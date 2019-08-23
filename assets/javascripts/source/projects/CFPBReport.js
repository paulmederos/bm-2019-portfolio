import React from 'react'
import PropTypes from 'prop-types'

import CaseStudyPage from '../CaseStudyPage'
import CaseStudyFigure from '../CaseStudyFigure'
import Shot from '../Shot'

export default class CFPBReport extends React.Component {
  render() {
    return (
      <CaseStudyPage
        companyName={"CFPB"}
        projectTitle={"Yearly Strategic Report"}
        onClosePressed={this.props.onClosePressed}
      >
        <header className="project-page-header cfpb-report"></header>

        <div className="wrap mid-wrap">
          <h2 className="project-title">
            Modernizing the government report
          </h2>

          <hr />

          <h3>The Problem</h3>
          <p>The CFPB wanted to provide an interactive and data-rich experience to showcase their strategic plan. The CFPB wanted their plan to be more accessible to the public. By serving it online as a live HTML document, they would lead government reporting <em>sound the trumpets</em> into the digital age.</p>

          <h3>Users &amp; Audience</h3>
          <p>All members of congress, and the American public who want to know more about the CFPB’s plans.</p>

          <h3>Team &amp; Stakeholders</h3>
          <p>I reported directly to the design director for this role and worked with a front end developer to build it out and a project manager who made sure we met our deadlines :)</p>

          <p>Our main stakeholders was the Director of the CFPB and the approval committee, anything that was external facing had to be reviewed by the committee before pusblishing. </p>

          <h3>Constraints</h3>
          <h4>Orders from the Director</h4>
          <p>The one kink in the plan came when the Director required that the document be print friendly. Initially we thought this could be taken care of by a separate print style sheet, but it turned out to be a little more complicated, and messier, than that. We found a service called PDF Reactor that could easily generate a PDF straight from HTML.</p>


          <h3>Design Process</h3>

          <p>One of the biggest reports a federal agency has to produce is their strategic plan, as required by the Government Performance Rule and Act (GPRA). The CFPB prides itself in being forward thinking and understanding the value of a well-designed experience. They wanted to rethink the current format of their reports to the public. Currently, most of these reports are text-heavy documents that are difficult to digest.</p>

          <p>The answer seemed simple: design an interactive report meant for the web. But this was uncharted land for a government agency, and the CFPB hoped to lead the way forward by providing real-time data and interactive visualization of this report, and all reports moving forward.</p>


          <p>I dove into my research: how could I best bring this report into the 21st century, and make the information digestible and visually appealing? By moving the report online it provided the possibility of a richer experience. It helped make the report more concise because we could link to external content instead of directly including it in the report body.</p>

          <p>Designing a report, traditionally in print, for consumption on the web, is an exercise in the importance of flexible content. It is important to know your audience and make sure that your content is formatted for how they wish to consume it.</p>

          <h3>The Result</h3>

          <p>See it in action here: <a href="http://www.consumerfinance.gov/strategic-plan/">http://www.consumerfinance.gov/strategic-plan/</a></p>

          <CaseStudyFigure
            imageUrl={"https://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-strategic-plan-head.png"}
          />

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-strategic-plan-budget.png"}
          />

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-strategic-plan-measure.png"}
          />

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-strategic-plan-population.png"}
          />

          <CaseStudyFigure
            imageUrl={"http://paulmederos.s3.amazonaws.com/enchant/case-studies/britt-cfpb-strategic-plan-accordian.png"}
          />

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
