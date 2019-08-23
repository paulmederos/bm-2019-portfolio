import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'

export default class CFPBCollege extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"CFPB"}
        projectTitle={"Paying For College"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header cfpb-college"></header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Helping Students make smarter financial decisions about college.
          </h2>

          <hr />

          <h3>The Problem</h3>

          <p>Student debt is on the rise, last year the Consumer Financial Protection Bureau (CFPB) calculated that over one trillion dollars was owed in student debt. Education is a part of the American dream, but it is a great investment. For most students who have to take out a loan, this is the first big investment decision they have to make. It can be overwhelming to not know the cost or the sources of funding.</p>

          <h3>Users &amp; audience</h3>
          <ol>
            <li>21 million students enrolling for college every year</li>
            <li>Guidance councilors that want to help their high school seniors smartly prepare for taking on student loans.</li>
          </ol>

          <h3>Team &amp; stakeholders</h3>
          <p>The core team consisted of a product manager, a front end developer, a visual designer and myself. We had a few stakeholders to work with. Inside the CFPB there was a “Students Team” that was leading the project. Externally the CFPB was working with the Department of Education on this same project. </p>

          <CaseStudyFigure
            imageUrl={"https://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-paying-for-college-home.png"}
          />

          <h3>Design process</h3>
          <p>The CFPB wants to create consumer experience platforms catered to the financial milestones in most American’s lives. The first platform is “Paying for College” focused around a student's journey; applying at colleges, selecting a loan, managing their money at school, and how to pay back their debt after school. This life cycle is captured in the platform as individual steps.</p>

          <h4>Research Schools</h4>
          <p>The CFPB partnered with the Department of Education to collaborate on this platform. The Department of Education created the College Navigator tool to help students find information about the colleges they want to attend.</p>

          <h4>Fill Out FAFSA</h4>
          <p>The CFPB linked to an online resource, built by the Department of Education, for electronically submitting a Free Application for Federal Student Aid (FAFSA).</p>

          <h4>Choose a Loan</h4>
          <p>For many students, searching for college funding will be their first experience shopping for loans. The CFPB wanted to create a list of action items and common loan definitions that help guide students through the selection process.</p>

          <h4>Compare Costs and Financial Aid</h4>
          <p>Once a student receives their offer letters from their colleges, they must choose which school to attend. The CFPB built the Cost Comparison Calculator to help students compare the costs of attending each college.</p>

          <h4>Manage your Money</h4>
          <p>When a student is at college, they're faced with unprecedented financial responsibility. The CFPB created an action guide to support student's financial decisions while attending college.</p>

          <h4>Repay Student Debt</h4>
          <p>After graduation, students are tasked with repaying their debts. The CFPB created an actionable, step-by-step tool to help students answer their payment options questions.</p>

          <CaseStudyFigure
            imageUrl={"https://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-paying-for-college-loan.png"}
          />

          <h3>What I Worked On</h3>
          <p>I started on this project during it's beta. The key tool in this platform for the CFPB was the Cost Comparison Tool. There were both functional and visual deficiencies in the "Paying for College" platform that needed much improvement before the tool could be launched from beta.</p>

          <ol>
            <li>Usability tests uncovered that layout for the comparison tool was ineffective, and needed a redesigned layout to make it easier for students to compare college costs.</li>
            <li>We received requests from the office of Veteran Affairs to include a GI Bill calculator for all military, and their dependents, to calculate their eligible benefits while attending school.</li>
            <li>The Department of Education wanted to include the school indicators in the comparison tool so that students could compare schools more accurately; not just based upon the financial burden.</li>
            <li>The CFPB believes in encouraging consumers to shop around for loans to see the best rates they qualify for. To encourage students to shop around, we included an interest rate picker to indicate that a student could find higher or lower rates elsewhere.</li>
            <li>The Department of Education and the CFPB made a joint effort to standardize the offer letters sent to students from colleges, in both print and digital format. The tool detects if the student's school is participating in the program, thereby prepopulating the data into the comparison tool to simplify the entry process.</li>
          </ol>

          <CaseStudyFigure
            imageUrl={"https://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-paying-for-college-tool.png"}
          />


          <p><i>The tool was released on April 10, 2013 just in time for prospective college students to receive their offer letters. <a href="http://www.consumerfinance.gov/paying-for-college/compare-financial-aid-and-college-cost/">See it in action here</a>.</i></p>

          <h3>Awards</h3>
          <ul>
            <li>Winner of a Best of the Web &amp; Digital Government Achievement Award for 2013</li>
            <li>Runner-up for the 2013 Core77 Design Award in Research and Strategy</li>
            <li>Finalist for the 2013 IDEA Award in Design Strategy</li>
          </ul>
        </div>

        {/* <h3 className="carousel-title">Process / source shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container wip-shots" style={{ width: "2280px "}}>
            <li><Shot fileName={"territory-wip-01"} /></li>
            <li><Shot fileName={"territory-wip-02"} /></li>
            <li><Shot fileName={"territory-wip-03"} /></li>
            <li><Shot fileName={"territory-wip-05"} /></li>
            <li><Shot fileName={"territory-wip-06"} /></li>
          </ul>
        </div>

        <h3 className="carousel-title">Product shots</h3>
        <div className="carousel-wrap">
          <ul className="carousel-container product-shots" style={{ width: "1780px "}}>
            <li><Shot fileName={"territory-product-01"} /> </li>
            <li><Shot fileName={"territory-product-02"} /></li>
            <li><Shot fileName={"territory-product-03"} /></li>
            <li><Shot fileName={"territory-product-04"} /></li>
            <li><Shot fileName={"territory-product-05"} /></li>
            <li><Shot fileName={"territory-product-06"} /></li>
          </ul>
        </div> */}

      </CaseStudyPage>
    )
  }

}
