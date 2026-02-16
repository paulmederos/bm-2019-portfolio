# Family Sharing: Design Doc

> **Status:** Draft
> **Last updated:** 2026-02-16
> **Decision:** 1:1 Connections model (Model C)

---

## Context

We want to enable multiplayer mode: family members (and eventually other trusted
people) should be able to share habit and deck data with each other. The primary
use case is a household where both parents want to see and support each other's
habits, manage their kids' habits, and collaboratively build decks.

### Goals

- Spouse can join, claim her own profile, adjust her habits, and see mine + the kids'
- Either parent can build or edit a deck for any connected person
- Kids participate with their own accounts (parent manages their device)
- Apple Health sync enriches a person's own data; connections can see it
- The model should be simple to explain, explicit in consent, and flexible enough to extend beyond family (coach, doctor, PT, etc.) in the future

### Non-goals (for v1)

- Group/circle management
- Granular per-field or per-profile read/write permissions
- Multiple sharing tiers (e.g. "view-only" vs "full edit")
- Non-family use cases (coach, doctor) — the model supports them, but we won't build specific UX for them yet

---

## Sharing models investigated

We evaluated four approaches before landing on the 1:1 connections model.

### Model A: Proxy profiles + claiming

Profiles exist independently of accounts. The family "owner" creates profiles for
everyone (kids, grandpa, etc.). Real humans optionally "claim" a profile by
creating an account and linking to it.

**How it works:**
- Owner creates the family and adds profiles for each person
- Owner invites others to join; they pick an unclaimed profile to claim
- Unclaimed profiles are managed by anyone in the family
- Claimed profiles unlock account-specific features (Apple Health, notifications)

**Pros:**
- Kids/grandpa don't need accounts — profiles exist before anyone claims them
- History survives the transition from unclaimed to claimed
- Natural for "I set up the family, others join later"

**Cons:**
- Claiming/unclaiming adds real complexity (what if someone claims the wrong profile?)
- Two concepts to explain: "profile" vs "account"
- Permission model gets murky — who "owns" an unclaimed profile?
- The owner/member role distinction adds another layer

**Example:** Hearth Display uses a variant of this. They have adult profiles
(full accounts), kids-with-email profiles, and kids-without-email profiles that
only exist on the shared physical display. The display itself acts as the
shared family hub.

### Model B: Circles (Life360 style)

Every person is an account. People join named circles (groups). One circle can
be "family," another can be "friends." Each circle has admins and members.

**How it works:**
- Someone creates a circle and gets an invite code
- Others download the app, create an account, enter the code to join
- Admin(s) can remove members, manage circle settings
- Members can view data and interact, but can't manage the circle
- One person can be in multiple circles

**Pros:**
- Battle-tested pattern (Life360 has millions of users)
- Flexible — circles can be family, friends, coworkers, anything
- Multiple admins supported
- Familiar mental model

**Cons:**
- Every person needs their own account and device — no proxy profiles
- Admin/member permission layer still needed
- For our use case (collaborative deck building), need to bolt on delegation
  or "edit on behalf of" permissions — Life360 doesn't need this because
  location data is inherently per-device
- Circle management is overhead that may not be worth it for small families

**Example:** Life360. Invite code to join a circle. Admins manage settings and
members. Members see each other's locations. Up to 99 members per circle.
Multiple admins allowed.

### Model C: 1:1 Connections (selected)

Each person has an account. Sharing is bilateral — you connect with another
person and you can see each other's data. There's no group entity. The "family
board" is emergent: it's just "all the people I'm connected to."

**How it works:**
- I create my account, you create yours
- I send you an invite link/code; you accept; we're connected
- We can now see and edit each other's habits and decks
- For kids: parent creates their account on the kid's device, sends invite from
  their own account, accepts on the kid's device
- Repeat for each pair that wants to share

**Pros:**
- Dead simple mental model: "connect = share"
- No roles, no admin, no group management
- Permissions are symmetric and mutual — no owner/member distinction
- Each connection is an explicit, consensual act (good for health data)
- Naturally extends to non-family (coach, doctor, PT, friend)
- No "phantom profile" concept to explain

**Cons:**
- Setup scales O(n^2) — a family of 5 needs 10 connections
- "Family board" is per-person, not shared (my connections != your connections)
- One-time setup friction is real, though manageable
- No built-in concept of "the family" — it's emergent

**Example:** Jerry (DriveShield) uses 1:1 connections for their driving score
leaderboard. Connect with friends/family, compare scores, compete. No group
entity — just your personal leaderboard of connections.

### Model D: Household hub (Hearth Display style)

A hybrid. One person sets up the household. Adults get full accounts. Kids can
have lightweight profiles (with or without their own email/account). A shared
device (display) acts as the family hub where all profiles are visible.

**Pros:**
- Accommodates kids without devices via the shared display
- Adults have full control; the permission model is simple (adults manage everything)
- The physical display creates a shared "source of truth"

**Cons:**
- Requires a shared physical device as the anchor
- Doesn't translate well to a phone-only app
- Limited flexibility — it's a "household," not extensible to friends/coaches

---

## Decision: 1:1 Connections (Model C)

### Why this model

1. **Consent is explicit.** Health data sharing should be bilateral. "I chose to
   share with you, you chose to share with me." No ambient sharing with a group
   you didn't individually opt into.

2. **No permissions system needed for v1.** Connected = full read/write access.
   Not connected = no access. One rule. No roles, no admin, no owner.

3. **Kids having Apple IDs is a reasonable ask.** By the time a child is old
   enough for habit tracking, they likely have a device and an Apple ID. Most
   parents set this up anyway for Family Sharing, iMessage, etc.

4. **Future extensibility is built-in.** The same "connect" mechanic works for
   spouse, kid, grandpa, friend, coach, doctor, PT, nutritionist. No model
   changes needed — just different UX framing later.

5. **Simplicity of explanation.** "Invite someone to connect. Once connected,
   you can see and help with each other's habits." That's the whole pitch.

### What we're accepting

- **One-time setup friction.** A family of 5 requires 10 connections. This is a
  real cost, but it's one-time and the model's clarity is worth it.
- **No shared "family" entity.** There's no family name, no family settings, no
  single admin. The family is just the overlap in everyone's connection graphs.
- **Per-person boards.** My board shows my connections. Spouse's board shows hers.
  They'll mostly overlap in a family context, but they're not identical.

---

## v1 Design: 1:1 Connections

### Data model

```
Account
  - id
  - email
  - name
  - apple_id (for Sign in with Apple)
  - created_at

Profile
  - id
  - account_id (1:1 with Account)
  - display_name
  - avatar
  - apple_health_enabled (boolean)
  - created_at

Connection
  - id
  - inviter_account_id
  - invitee_account_id
  - status (pending | accepted | removed)
  - created_at
  - accepted_at

Invite
  - id
  - from_account_id
  - token (unique, URL-safe)
  - status (pending | accepted | expired | revoked)
  - expires_at
  - created_at
```

**Key relationships:**
- One Account has one Profile (1:1, always)
- A Connection links two Accounts bidirectionally
- When a Connection is `accepted`, both parties gain full read/write access to
  each other's habits, decks, and health data
- An Invite generates a shareable link/code; accepting it creates a Connection

### Invite + connect flow

```
1. I tap "Invite Someone"
2. App generates an Invite with a unique token → shareable link
3. I send the link (iMessage, email, AirDrop, whatever)
4. Recipient opens link:
   a. Has the app → app opens, shows "Paul wants to connect"
   b. Doesn't have app → App Store → download → open link → same screen
5. Recipient signs in / creates account
6. Recipient taps "Accept" → Connection created (status: accepted)
7. Both parties now see each other on their boards
```

**For kids:**
```
1. Parent taps "Invite Someone" on their own device → gets a link
2. Parent opens link on kid's device
3. Parent creates account for kid (or signs in if already created)
4. Parent taps "Accept" on kid's device
5. Parent and kid are now connected
6. Other parent repeats steps 1-5 with the same kid
```

### Permissions (v1 — intentionally simple)

| Connected? | Can view habits/decks? | Can edit habits/decks? | Can view health data? | Can enable health sync? |
|---|---|---|---|---|
| Yes | Yes | Yes | Yes | Own profile only |
| No | No | No | No | Own profile only |

That's it. One rule: **connected = full mutual access.**

No read-only mode. No admin role. No per-field visibility toggles.

### What "my board" looks like

The board shows all your connections and their data:

```
My Board
├── My habits          (my own profile)
├── Sarah (spouse)     (connected)
│   └── her habits, her deck, her health data
├── Milo (kid)         (connected)
│   └── his habits, his deck
├── Lily (kid)         (connected)
│   └── her habits, her deck
└── Dad                (connected)
    └── his habits, his deck, his health data
```

Each person's board is their own view. Sarah's board would look similar but from
her perspective, and would only include people she's connected to.

### Apple Health sync

- Any account holder can enable Apple Health sync for their own profile
- Synced data (steps, sleep, workouts, etc.) attaches to their profile
- Anyone connected to them can see this data
- You cannot enable Apple Health sync for someone else's profile
- If a connection is removed, the other party loses visibility into health data
  (the data itself remains on the profile)

### Actions by connection status

| Action | Not connected | Connected |
|---|---|---|
| Send invite | Yes | N/A (already connected) |
| Accept invite | Yes | N/A |
| View their habits | No | Yes |
| Edit their habits | No | Yes |
| Build their deck | No | Yes |
| See their health data | No | Yes |
| Enable their health sync | No | No (own profile only) |
| Remove connection | N/A | Yes (either party) |

### Edge cases and decisions

**What happens when a connection is removed?**
- Both parties lose visibility into each other's data immediately
- Neither party's data is deleted — it stays on their own profile
- The connection record transitions to `status: removed`
- Either party can send a new invite to reconnect

**Can I connect with someone twice?**
- No. One active connection per pair of accounts. If removed, a new invite is
  needed to reconnect.

**What if I open my own invite link?**
- App recognizes the invite is from your own account and shows an error:
  "This is your own invite link."

**What if the invite link expires?**
- Invites expire after a configurable period (suggest 7 days for v1)
- Expired links show a friendly message: "This invite has expired. Ask [name]
  to send a new one."

**Can I see who my connections are connected to?**
- Not in v1. Your board only shows your direct connections. You don't see
  that your spouse is also connected to kid1. (This could be a future
  enhancement — "mutual connections" or "suggested connections.")

**What if a kid deletes the app / loses their device?**
- The account still exists. Re-download the app, sign in, connections are
  intact. No data loss.

**Can I revoke an invite before it's accepted?**
- Yes. The inviter can revoke a pending invite. The link becomes invalid.

---

## Future phases

### Phase 2: Connection management polish
- "Remove connection" confirmation flow with clear explanation of what happens
- Invite expiry and revocation UI
- "Pending invites" list (sent and received)
- Push notification when someone accepts your invite
- Re-invite flow after a connection is removed

### Phase 3: Suggested connections
- "People you may know" based on mutual connections
- "Sarah is also connected to Milo" visibility
- Batch invite flow (reduce setup friction for large families)

### Phase 4: Permission tiers (if needed)
- View-only connections (e.g. grandpa can see but not edit the kids' habits)
- Health data visibility toggle per-connection
- "Caregiver" connection type (view + limited edit, no health data)

### Phase 5: Beyond family
- Connection types / labels (family, coach, doctor, friend)
- Professional accounts with different UX (dashboard view for coaches)
- Data export / sharing for medical providers
- Time-limited connections (e.g. share with PT for 3 months)

---

## Resolved questions

1. **Invite format:** Short code (like Life360). Codes are simple and
   unambiguous. Codes should be single-use: once accepted, the code is
   consumed. If the invite expires or is revoked, the inviter generates a
   new code. No need for rotation — each code is a one-shot token.

2. **Connection removal — mutual or unilateral?** Either party can remove.
   No notification sent — the disconnected person simply disappears from the
   other's board. Clean and low-drama.

3. **Account deletion:** All connections removed. Connected parties see the
   person disappear from their board. Data associated with the deleted account
   is purged per our data retention policy.

4. **Maximum connections:** Capped at 10 for v1. Covers a large family or a
   moderate mix of family + trusted others. Can revisit later.

## Open questions

5. **Minor accounts and COPPA compliance:** With the 1:1 model, kids own
   their own accounts and data. This means COPPA likely applies for children
   under 13. See "COPPA considerations" section below for details and
   recommended approach. Needs legal review before launch.

---

## COPPA considerations

With the shift to "every person has their own account" (including kids), we
move squarely into COPPA territory for children under 13. This is a meaningful
compliance obligation — fines can reach $42,530 per violation — but it's
tractable if we design for it from the start.

### When does COPPA apply?

COPPA applies when an operator (us) has **actual knowledge** that a user is
under 13, or when the service is **directed at children**. Our app isn't
specifically directed at children — it's a family habits app — but the moment
a parent creates an account for their 8-year-old, we have actual knowledge.

### What COPPA requires

1. **Age gate at account creation.** Collect date of birth (or age range).
   If under 13, route to the parental consent flow before collecting any
   personal information beyond what's needed to request consent.

2. **Verifiable Parental Consent (VPC).** Before collecting a child's data,
   we need to verify that a parent has actually consented. Approved methods
   include:
   - Credit/debit card verification (charge a small amount, refundable)
   - Knowledge-based authentication (dynamic questions only a parent would know)
   - Government-issued ID check (must delete ID after verification)
   - Text-plus verification (text to parent's phone + additional step)
   - Signed consent form (email/scan/fax — clunky but valid)
   - Video conference with trained personnel (overkill for us)

   **Note:** A parent's App Store password alone is NOT sufficient for VPC,
   though it can be part of a combined method.

3. **Direct notice to parent.** Before collecting data, we must tell the
   parent: what data we collect, why, and who we share it with. The parent
   must be able to consent to collection/use without consenting to
   third-party disclosure.

4. **Parental access and deletion rights.** Parents must be able to:
   - Review what data we've collected about their child
   - Request deletion of their child's data
   - Revoke consent (which means we stop collecting and delete)

5. **Data minimization and retention limits.** Only collect what's necessary.
   Don't retain children's data longer than reasonably needed for the
   purpose it was collected.

6. **No behavioral advertising or profiling** using children's data without
   separate, specific parental consent (2025 rule amendment).

### Account creation flows

There are three flows depending on who's creating the account. The age gate
is the fork point — it routes people into the right path.

#### Flow 1: Adult creates their own account (13+)

Standard registration. No COPPA involvement.

```
┌─────────────────────────────────────────────────┐
│ 1. "Create Account"                             │
│ 2. "What's your date of birth?" → 13 or older   │
│ 3. Sign in with Apple (or email/password)        │
│ 4. Set display name, avatar                      │
│ 5. Account created → lands on empty board        │
│ 6. "Invite Someone" to start connecting          │
└─────────────────────────────────────────────────┘
```

Data model:
```
Account
  - email: their own
  - date_of_birth: stored (used for age verification)
  - is_minor: false
  - parent_account_id: null
```

Nothing special here. Standard onboarding.

#### Flow 2: Teen creates their own account (13-17)

Functionally identical to the adult flow. COPPA doesn't apply to 13+.
We may want to flag them as a minor for future feature gating (e.g. if
we add social features later), but no legal consent requirements.

```
┌─────────────────────────────────────────────────┐
│ Same as Flow 1, but:                            │
│ - is_minor: true (informational flag)           │
│ - No parental consent required                  │
│ - No restrictions on account features           │
└─────────────────────────────────────────────────┘
```

#### Flow 3: Child account (under 13) — requires parental consent

This is the COPPA flow. The key insight: **the parent is physically present**
setting up the kid's device. We use that natural context.

```
ON THE KID'S DEVICE (parent is holding it):

┌──────────────────────────────────────────────────────────────────┐
│ 1. "Create Account"                                             │
│                                                                  │
│ 2. "What's your date of birth?" → under 13 detected             │
│                                                                  │
│ 3. COPPA notice screen:                                          │
│    "This account is for someone under 13.                        │
│     A parent or guardian needs to set this up."                   │
│                                                                  │
│    [I'm the parent — continue]                                   │
│                                                                  │
│ 4. Direct notice to parent:                                      │
│    "Before creating this account, here's what we collect         │
│     and why:"                                                    │
│    • Display name and avatar (to identify them in the app)       │
│    • Habit data (the core feature — tracking habits)             │
│    • Health data (only if Apple Health sync is enabled)           │
│    • We don't share data with third parties for advertising      │
│    • We don't use data for profiling or behavioral targeting     │
│                                                                  │
│    [I understand — continue]                                     │
│                                                                  │
│ 5. Parent enters THEIR OWN email or phone number                 │
│    "Enter your email so we can verify your consent."             │
│                                                                  │
│ 6. We send a verification code to parent's email/phone           │
│    (this is the "email-plus" or "text-plus" VPC method)          │
│                                                                  │
│ 7. Parent enters the code on kid's device                        │
│    → Consent verified                                            │
│                                                                  │
│ 8. Set up kid's profile:                                         │
│    - Display name ("What should we call them?")                  │
│    - Avatar                                                      │
│    - No email needed for the kid — parent's email is on file     │
│                                                                  │
│ 9. Account created → lands on empty board                        │
│                                                                  │
│ 10. Parent enters their invite code → connection established     │
│     Kid now appears on parent's board, and vice versa            │
└──────────────────────────────────────────────────────────────────┘
```

Data model for a child account:
```
Account
  - email: null (kid doesn't need one)
  - date_of_birth: stored
  - is_minor: true
  - parent_account_id: → links to the parent's Account.id
  - coppa_consent_at: timestamp
  - coppa_consent_method: "email_plus" | "text_plus"
  - parent_contact: parent's email or phone (used for VPC)

ParentalConsent (separate record for audit trail)
  - id
  - child_account_id
  - parent_account_id (nullable — set when parent also has an account)
  - parent_contact: email or phone used for verification
  - consent_method: "email_plus" | "text_plus"
  - consented_at: timestamp
  - revoked_at: nullable timestamp
  - data_notice_version: "v1" (tracks which notice they agreed to)
```

**How we know the kid "belongs to" the parent:**

The `parent_account_id` link is established during account creation. The
parent's email/phone is captured and verified via the VPC flow. This gives
us two linkage mechanisms:

1. **`parent_account_id`** — direct FK to the parent's Account, set when the
   parent already has an account (most common: they created their own account
   first, then set up the kid's). This powers the in-app parental dashboard.

2. **`parent_contact`** on the ParentalConsent record — the verified email or
   phone. This is the fallback if the parent doesn't have an account yet
   (unlikely but possible), and it's the audit trail for "who consented."

If the parent later creates their own account with that same email, we can
auto-link the `parent_account_id` at that point.

### How the parent exercises COPPA rights

The FTC says parental access must not be ["unduly burdensome"](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions).
They don't explicitly require self-serve, but they strongly imply it. A
manual email process is technically compliant but feels like a bad look for
an app that's supposed to be parent-friendly.

**Recommendation: self-serve in-app, with email as fallback.**

It's not much extra work because the parent is already connected to the kid
and can already see the kid's data via the connection. We're mostly adding
a "manage" layer on top of what they can already see.

#### Parental data dashboard (in-app, self-serve)

Accessible from the parent's own app, scoped to linked child accounts:

```
Settings → Child Accounts
├── Milo (age 8)
│   ├── View collected data
│   │   └── Shows: display name, avatar, habits, decks,
│   │       health data (if enabled), account creation date
│   ├── Download data (export as JSON/PDF)
│   ├── Delete all data
│   │   └── Confirmation: "This will permanently delete Milo's
│   │       account and all associated data. This cannot be undone."
│   │   └── Triggers: account deletion, connection removal,
│   │       data purge per retention policy
│   └── Revoke consent
│       └── "This will disable Milo's account. No new data will
│           be collected. You can delete the account entirely or
│           re-consent later."
│       └── Triggers: account deactivation, consent revoked flag
├── Lily (age 5)
│   └── (same options)
```

**What "revoke consent" does vs "delete data":**
- **Revoke consent**: Account is frozen. No new data collected. Existing
  data is retained (parent might want to re-consent later). Kid sees
  "Your account is paused — ask your parent."
- **Delete data**: Full account deletion. Everything gone. Irreversible.
  This is the nuclear option.

Parents can do either. The FTC requires both options.

#### Email fallback (for parents without the app)

If a parent loses access to the app, they can email us (address in privacy
policy). We verify their identity against the `parent_contact` on file,
then process their request manually. This covers edge cases but shouldn't
be the primary path.

### What we'd need to build (detailed)

**Registration changes:**
- Age gate screen (date of birth picker)
- Under-13 detection → route to COPPA flow
- COPPA notice screen (what we collect and why)
- Parent email/phone input screen
- Verification code send + entry (email-plus or text-plus)
- Child profile setup (name, avatar — no email needed)

**Data model additions:**
- `is_minor` flag on Account
- `parent_account_id` FK on Account
- `ParentalConsent` table (audit trail)
- `coppa_consent_at` / `coppa_consent_method` on Account

**Parent-facing features:**
- "Child Accounts" section in Settings (only visible if parent has
  linked child accounts)
- View collected data screen
- Data export (JSON or PDF)
- Delete child account flow
- Revoke consent flow
- Re-consent flow (reactivate a frozen account)

**Backend/policy:**
- Data retention policy scoped to COPPA (don't keep child data
  indefinitely)
- COPPA-specific privacy policy section
- Email fallback process for parental requests
- Audit log for consent events (granted, revoked, data deleted)

### What we can punt

- Government ID verification (overkill for v1 — email-plus is sufficient
  when we're not disclosing data to third parties)
- Safe harbor certification (nice-to-have, not required)
- In-app parental controls beyond what connections already provide
  (the connection model already gives parents visibility + edit access)
- Separate consent for third-party disclosure (we're not disclosing to
  third parties, so this doesn't apply yet)

### Key compliance deadline

The FTC's 2025 COPPA rule amendments take full effect **April 22, 2026**.
Any launch after that date must comply with the updated requirements,
including the expanded definition of personal information (biometrics,
precise geolocation) and stricter data retention rules.

### Key question for legal review

The "email-plus" VPC method is only valid when children's data is used
**internally and not disclosed to third parties**. If we use any
third-party analytics, crash reporting, or cloud services that process
children's data, we may need to either:
- Ensure those services are COPPA-compliant (most major ones are)
- Use a stronger VPC method (credit card, KBA)
- Exclude child accounts from third-party SDKs entirely

This is worth confirming with counsel before locking in email-plus.
