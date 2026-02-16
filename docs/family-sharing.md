# Family Sharing: Design Doc

> **Status:** Draft
> **Last updated:** 2026-02-16
> **Decision:** Hybrid — 1:1 Connections (adults) + Child Profiles (under 13)

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

### Phase 2: Child profile polish + graduation
- Apple Health sync for child profiles (with parent toggle)
- LLM features for child profiles (after legal review — either service
  provider exception confirmed or separate parental consent flow built)
- Child profile co-ownership (both parents can manage)
- Graduation flow: child turns 13 → profile migrates to their own account
- Push notification when someone accepts your invite

### Phase 3: Connection management polish
- "Remove connection" confirmation flow with clear explanation of what happens
- Invite expiry and revocation UI
- "Pending invites" list (sent and received)
- Re-invite flow after a connection is removed

### Phase 4: Suggested connections
- "People you may know" based on mutual connections
- "Sarah is also connected to Milo" visibility
- Batch invite flow (reduce setup friction for large families)

### Phase 5: Permission tiers (if needed)
- View-only connections (e.g. grandpa can see but not edit the kids' habits)
- Health data visibility toggle per-connection
- "Caregiver" connection type (view + limited edit, no health data)
- Per-child-profile sharing controls (share Milo with grandpa but not Lily)

### Phase 6: Beyond family
- Connection types / labels (family, coach, doctor, friend)
- Professional accounts with different UX (dashboard view for coaches)
- Data export / sharing for medical providers
- Time-limited connections (e.g. share with PT for 3 months)

---

## v1 recommendation: what to ship

Three paths were considered for how kids participate. Here's why we landed
where we did:

| Approach | Summary | Why not for v1? |
|---|---|---|
| **Adults-only** | Ship without kids. Couples and solo adults only. | Too limiting — the whole pitch is family habits. A family app that doesn't support kids isn't a family app. |
| **Full child accounts + COPPA** | Kids get their own 1:1 accounts. Full VPC consent flow, parental dashboard, age gate. | Correct but heavy. Adds 6+ screens, a new data model (ParentalConsent), audit logging, a VPC integration, and a legal review blocker. Overkill when the parent is doing everything anyway. |
| **Hybrid (recommended)** | Adults get 1:1 accounts. Kids under 13 are profiles under the parent's account. Profiles are shared via connections. | Best balance of UX, scope, and legal risk for v1. The parent is already the one setting up the kid's device. The model reflects reality. |

### What v1 includes

**Accounts and connections (Model C for adults):**
- Account creation via Sign in with Apple (13+ only)
- Invite via short code (single-use, 7-day expiry)
- Accept invite → connection created → mutual read/write
- Remove connection (either party, no notification)
- 10-connection cap

**Child profiles (hybrid model for under 13):**
- Parent creates child profiles under their own account
- Child profile: display name, avatar, date of birth
- No Apple Health sync for child profiles (v1)
- No email/Apple ID needed for the child
- Parent controls which connections can see which child profiles
  (default: share all child profiles with new connections)

**Kid's device experience:**
- Parent signs into kid's device with their own account
- Selects which child profile this device is for
- Sets a 4-digit PIN so the kid can open the app independently
- Kid sees only their own profile: their habits, their decks
- Kid can check off habits, interact with decks
- Kid cannot see parent's data, other profiles, or settings
- Parent switches to "parent view" via FaceID/PIN to manage

**What the kid sees vs. doesn't see:**

| Feature | Kid's device | Parent's device |
|---|---|---|
| Kid's habits | View + check off | View + edit + create |
| Kid's decks | View + interact | View + edit + create |
| Kid's health data | N/A (no sync in v1) | N/A |
| Other profiles | Hidden | Visible (all connections) |
| Settings | Hidden | Full access |
| LLM features | Hidden | Available (for parent's own data) |
| Invite someone | Hidden | Available |

**LLM features:**
- Available for adult accounts only (parent's own profile data)
- Not available for child profiles at launch
- Revisit post-launch after legal review of service provider exception
  or with separate parental consent flow

### What v1 does NOT include

- Age gate at registration (not needed — only adults register)
- COPPA VPC flow (not needed — parent owns the data)
- Parental consent dashboard (not needed — parent manages their own account)
- Child-to-child connections (kids don't have accounts)
- Graduation flow (designed but not built; triggered when kid turns 13)
- Apple Health for child profiles
- LLM features for child profiles
- Co-ownership of child profiles (one parent owns, other sees via share)
- Push notifications

### Before launch: legal review checklist

The hybrid model reduces COPPA exposure but doesn't eliminate it entirely.
Before public launch, confirm with counsel:

- [ ] **Proxy model validity.** Does the "parent owns the data, kid uses a
      PIN-protected device session" framing hold under current FTC guidance?
      Most family apps (Screen Time, Family Link) operate this way, but get
      an explicit opinion.
- [ ] **Privacy policy language.** Need COPPA-aware disclosures even with the
      proxy model. "We do not knowingly collect personal information from
      children under 13. Children participate through parent-managed profiles."
- [ ] **Third-party SDKs.** Audit analytics, crash reporting, and cloud
      services. Ensure they're either COPPA-compliant or excluded from
      child profile device sessions.
- [ ] **LLM service provider status.** If we want to enable LLM features for
      child profiles later, confirm whether a no-training API tier qualifies
      under the service provider exception.
- [ ] **State laws.** COPPA is federal. Some states (CA/CPRA, NY, etc.) have
      additional child privacy requirements. Quick scan for anything that
      changes the calculus.

### Setup ceremony: the full flow

This is what it looks like end-to-end for a family of four (two parents,
two kids):

```
DAY 1: Paul sets up the family

Paul's phone:
  1. Download app → Create Account (SiwA) → Paul's profile created
  2. Add child profile: "Milo" (age 8) → set habits, build deck
  3. Add child profile: "Lily" (age 5) → set habits, build deck
  4. Tap "Invite Someone" → gets code: FMLY-7X2K

Sarah's phone:
  5. Download app → Create Account (SiwA) → Sarah's profile created
  6. Enter code FMLY-7X2K → "Paul wants to connect" → Accept
  7. Sarah now sees: her profile, Paul's profile, Milo, Lily

Milo's iPad:
  8. Download app → "Setting up for my child"
  9. Paul signs in with his account (SiwA)
  10. Selects "Milo" → sets PIN: 1234
  11. Milo opens app with PIN → sees only his habits and decks

Lily's iPad:
  12. Same as Milo's setup, selects "Lily" → PIN: 5678

Sarah also wants to manage kids from her phone:
  13. Paul shares Milo + Lily profiles with Sarah's connection
      (this happened automatically at step 6 with default settings)
  14. Sarah sees Milo and Lily on her board, can edit their habits

Total time: ~15 minutes for the whole family.
Total accounts created: 2 (Paul, Sarah)
Total connections: 1 (Paul ↔ Sarah)
Total child profiles: 2 (Milo, Lily — under Paul's account)
```

### Data model (final, v1)

```
Account
  - id
  - email (from SiwA or manual)
  - apple_id
  - date_of_birth
  - created_at

Profile
  - id
  - account_id (FK → Account)
  - type: "self" | "child"
  - display_name
  - avatar
  - date_of_birth (nullable — used for child profiles, graduation)
  - apple_health_enabled (boolean, always false for type: "child")
  - created_at

Connection
  - id
  - inviter_account_id (FK → Account)
  - invitee_account_id (FK → Account)
  - status: pending | accepted | removed
  - created_at
  - accepted_at

Invite
  - id
  - from_account_id (FK → Account)
  - code (unique, 8-char alphanumeric, case-insensitive)
  - status: pending | accepted | expired | revoked
  - expires_at (7 days from creation)
  - created_at

ProfileShare
  - id
  - profile_id (FK → Profile, type: "child")
  - connection_id (FK → Connection)
  - shared_by_account_id (FK → Account)
  - created_at

DeviceSession
  - id
  - account_id (FK → Account)
  - profile_id (FK → Profile)
  - device_id (unique device identifier)
  - pin_hash
  - created_at
  - last_active_at
```

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

### Sign in with Apple and the COPPA flow

A wrinkle: if the parent used "Hide My Email" during Sign in with Apple for
their own account, we have a relay address (e.g. `abc123@privaterelay.appleid.com`),
not their real email. During the child's COPPA flow, we ask for the parent's
email for VPC — they'd likely enter their real email, which won't match.

This means **email matching alone can't link parent to child account.** The
`parent_account_id` FK must be set explicitly during the child setup flow,
not inferred from email.

Best approach: during the under-13 flow, require the parent to **authenticate
with their existing account** (Sign in with Apple again, or app PIN) rather
than just typing an email. This:
- Proves they're the parent (they can sign in)
- Sets the `parent_account_id` FK directly
- Sidesteps the relay email mismatch entirely
- The VPC email/text is still sent separately for COPPA compliance

If the parent doesn't have an account yet (creates kid's first), we capture
their email for VPC and set `parent_account_id` later when they create their
own account and authenticate.

### LLM vendors and third-party disclosure

**Yes, sending a child's data to an LLM API counts as third-party disclosure
under COPPA.** The 2025 rule amendments are explicit: disclosing children's
data to train or develop AI is **not integral** to a service and requires
separate verifiable parental consent.

But there's a nuance. There are two scenarios:

**Scenario A: LLM vendor uses data for training.**
This is unambiguously a third-party disclosure. Requires separate, specific
parental consent. Most consumer-tier LLM APIs (OpenAI free tier, etc.) may
train on input data.

**Scenario B: LLM vendor processes data but doesn't retain/train on it.**
Enterprise/API tiers (Anthropic API, OpenAI API with data usage off) process
the request and discard it. This *might* qualify under the "service provider
for internal operations" exception — similar to how sending data to a cloud
database provider isn't a "disclosure." But the FTC hasn't explicitly ruled
on this for LLMs, and it's legally gray.

**It doesn't matter who presses the button.** Whether the kid taps "Generate
Focus Plan" or the parent does it on the kid's behalf — if the app sends a
child's habit data to an external LLM, that's the operator (us) disclosing
a child's data to a third party. The actor is irrelevant; the data flow is
what matters.

**Practical options for v1:**
1. **Don't send child data to LLMs at all.** Simplest. LLM features are
   adults-only. Kid profiles get a simpler, non-AI experience.
2. **Use a no-training API tier + treat LLM as service provider.** Legally
   defensible but untested. Would need counsel to confirm.
3. **Get separate parental consent for LLM features.** Adds another consent
   screen during setup. Parent explicitly opts in to "AI-powered features
   that send your child's data to [vendor name] for processing."

Option 1 is the safest for launch. Option 3 is the right long-term answer if
AI features are core to the kid experience.

### The case for a hybrid model

Given the above — COPPA consent flows, the LLM disclosure question, the SiwA
email mismatch, the VPC requirement, the parental dashboard obligation — it's
worth asking: **do kids under 13 actually need their own accounts?**

The sovereignty philosophy is right for teens and adults. But for an 8-year-old
whose parent is setting up their device, managing their habits, and physically
present during setup... the kid isn't really exercising sovereignty. The parent
is doing everything.

**A hybrid model might be simpler and more honest:**

```
Adults/teens (13+):  Full 1:1 accounts (Model C, unchanged)
Kids (under 13):     Child profiles under parent's account
```

#### How the hybrid works

**Parent's account contains child profiles:**
```
Paul's Account (full account, Model C)
├── Paul's Profile (his own habits, health data, decks)
├── Milo's Profile (child, age 8)
│   └── Milo's habits, Milo's decks (no health data)
└── Lily's Profile (child, age 5)
    └── Lily's habits, Lily's decks
```

**Connections share profiles, not just accounts:**
When Paul connects with Sarah (spouse), Sarah can see all profiles Paul has
shared with her — including the kid profiles. Paul controls which child
profiles are visible to which connections.

```
Paul's Board                        Sarah's Board
├── Paul's Profile                  ├── Sarah's Profile
├── Milo (Paul's child profile)     ├── Milo (shared by Paul)
├── Lily (Paul's child profile)     ├── Lily (shared by Paul)
└── Sarah (connection)              └── Paul (connection)
```

**Kid uses the app on their own device:**
The kid doesn't sign in with their own account. Instead:

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Download app on kid's device                              │
│                                                              │
│ 2. "Who's using this device?"                                │
│    → "I'm setting up this device for my child"               │
│                                                              │
│ 3. Parent signs in with THEIR account (SiwA / email+pw)      │
│                                                              │
│ 4. "Which profile is this device for?"                       │
│    → Select "Milo" from their child profiles                 │
│    → Or create a new child profile now                       │
│                                                              │
│ 5. Set a device PIN (so Milo can open the app without        │
│    parent's password)                                        │
│                                                              │
│ 6. Milo's device shows Milo's profile as the primary view    │
│    → Milo sees his habits, his decks                         │
│    → Milo can check off habits, interact with decks          │
│    → Milo does NOT see parent's data or other profiles       │
│                                                              │
│ 7. Parent can switch to "parent view" via PIN/FaceID         │
│    to manage Milo's profile from Milo's device               │
└──────────────────────────────────────────────────────────────┘
```

#### Data model (hybrid)

```
Account
  - id
  - email
  - apple_id
  - date_of_birth
  - created_at

Profile
  - id
  - account_id (FK → Account, the owner)
  - type: "self" | "child"
  - display_name
  - avatar
  - date_of_birth (for child profiles — to track when they age out)
  - apple_health_enabled (boolean, false for child profiles)
  - created_at

Connection (unchanged from Model C)
  - id
  - inviter_account_id
  - invitee_account_id
  - status: pending | accepted | removed
  - created_at
  - accepted_at

ProfileShare (NEW — controls which child profiles a connection can see)
  - id
  - profile_id (FK → Profile, must be type: "child")
  - connection_id (FK → Connection)
  - shared_by_account_id (the parent who shared it)
  - created_at

DeviceSession (NEW — ties a device to a specific profile)
  - id
  - account_id (the parent's account)
  - profile_id (which profile this device shows)
  - device_id
  - pin_hash (for kid to unlock without parent password)
  - created_at
```

Key relationship: `Account 1 → many Profiles`. One "self" profile (always),
zero or more "child" profiles. The Account holder owns all the data.

#### Why this simplifies COPPA

1. **The parent is the account holder.** All data is collected from and
   owned by the parent. The kid doesn't have an account — they have a
   profile that the parent created and manages.

2. **No VPC flow needed.** The parent isn't "consenting to us collecting
   their child's data" — they're entering their child's data into their
   own account. It's like a parent tracking their kid's chores in a
   notes app. The parent is the user.

3. **Kid's device interaction is under the parent's account.** When Milo
   checks off a habit on his device, he's interacting with the parent's
   account via a PIN-protected device session. Legally, the parent
   authorized this by setting up the device.

4. **No separate parental dashboard needed.** The parent already owns the
   data. They can view, edit, export, or delete any child profile from
   their own account. The COPPA "parental access" right is satisfied by
   default.

5. **LLM features are cleaner.** If the parent sends Milo's data to
   generate a focus plan, it's the parent (an adult account holder)
   choosing to send their own account data to an LLM. The data belongs
   to the parent. This is a much more defensible position than sending
   a child's account data.

6. **No age gate at registration.** Only adults create accounts. The
   "age" question only comes up when creating a child profile, and it's
   informational (for the age-out graduation flow), not a COPPA trigger.

#### What this doesn't solve

**COPPA gray area: kid actively using the device.**
If Milo is actively using the app — checking off habits, browsing decks —
the FTC *could* argue that we're collecting behavioral data from a child,
even if the account is the parent's. This is a gray area. Most family apps
(Apple Screen Time, Google Family Link, Life360) operate in this space and
treat it as parent-authorized use. But it's not a slam dunk.

**Mitigation:** The parent explicitly set up the device for the child and
authorized it with their own credentials. The app collects only what the
parent configured (habits the parent created, decks the parent built). The
kid is interacting with content the parent chose. This is closer to "parent
gave kid a configured tool" than "service collecting data from a child."

**Two parents, one kid profile.**
If both Paul and Sarah want to manage Milo, the profile lives under one
account. The other parent sees it via `ProfileShare`. Only the profile owner
can delete it. This creates a slight asymmetry — but it mirrors real life
(one parent usually does the initial setup).

Alternatively: allow a child profile to be "co-owned" by linked accounts.
Both parents with the profile shared between them get full management rights.
Worth considering but adds complexity.

**Graduation at 13.**
When a child turns 13, we should offer to "graduate" their profile into a
full account. The kid creates their own account, data migrates from the
parent's child profile to the kid's new account, and the old profile is
archived. This transition honors the sovereignty philosophy — ownership
transfers when the kid is old enough for it to matter.

```
Child turns 13 → "Milo is old enough for their own account!"
  → Parent initiates graduation from their app
  → Milo creates account on their device (Flow 1: standard 13+ signup)
  → Data migrates: habits, decks, history move to Milo's new account
  → Old child profile archived under parent's account
  → Connection auto-created between parent and Milo's new account
```

#### Hybrid model: comparison summary

| Concern | Full child accounts (current) | Hybrid (child profiles) |
|---|---|---|
| COPPA VPC required? | Yes — full flow | Likely no (gray area) |
| Age gate at registration? | Yes | No (only adults register) |
| Parental dashboard? | Must build separately | Free — parent owns data |
| LLM for kids? | Requires separate consent | Parent sends their own data |
| SiwA email mismatch? | Must handle explicitly | Non-issue (one account) |
| Kid device experience? | Own account, own sign-in | PIN-protected profile view |
| Data sovereignty? | Kid owns data from day 1 | Parent owns → graduates at 13 |
| Setup complexity? | Age gate + VPC + invite | Sign in + pick profile |
| Legal risk? | Lower (explicit compliance) | Moderate (gray area on kid usage) |

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
