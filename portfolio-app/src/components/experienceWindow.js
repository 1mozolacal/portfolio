import React from "react"
import styling from "../style/componentStyles.module.sass"

const ExperienceWindow = () => (
  <div className={styling.homepagebackground + " " + styling.hidescroll}>
    <div
      className={
        "justify-content-center align-items-center " + styling.workwrapper
      }
    >
      <h1>Technical Experience</h1>
      <div className={styling.workFrame + " " + styling.airplanebg}>
        {" "}
        <h1 className={styling.work}>
          Flight de vol International {"\n"}
          <small>
            Backend Developer <small style={{ fontSize: "0.5em" }}>2020</small>
          </small>
        </h1>
        <div className={styling.lightenbg} style={{ marginTop: "6em" }}>
          <ul className={styling.work}>
            <li>
              Gathered, parsed, cleaned, and stored data into a Postgres
              database for API usage.
            </li>
            <li>
              Developed APIs using Django REST framework to feed aviation data
              to the frontend application or perform flight analysis and
              decoding.
            </li>
            <li>
              Created and managed docker containers that hosted web and data
              services.
            </li>
            <li className={styling.work}>
              Scrum Master; facilitated Scrum meetings and documentation
              service.
            </li>
          </ul>
        </div>
      </div>
      <div className={styling.workFrame + " " + styling.medicalbg}>
        {" "}
        <h1 className={styling.work}>
          Internation Medical Solution {"\n"}
          <small>
            Quality Control Engineer{" "}
            <small style={{ fontSize: "0.5em" }}>2017</small>
          </small>
        </h1>
        <div className={styling.lightenbg} style={{ marginTop: "6em" }}>
          <ul className={styling.work}>
            <li>
              Tested software through rigorous procedures to ensure full
              functionality.
            </li>
            <li>
              Worked with the development team to remedy any identified issues.
            </li>
            <li className={styling.work}>
              Wrote reports on tests performed and issues found.
            </li>
          </ul>
        </div>
      </div>
      <h1>Non Technical Experience</h1>
      <div className={styling.workFrame + " " + styling.factorybg}>
        {" "}
        <h1 className={styling.work} style={{ marginBottom: "8em" }}>
          Assembler and Machine Operator {"\n"}
          <small>
            Mitchell Plastics <small style={{ fontSize: "0.5em" }}>2018</small>
          </small>
        </h1>
      </div>
      <div className={styling.workFrame + " " + styling.poolbg}>
        {" "}
        <h1 className={styling.work} style={{ marginBottom: "8em" }}>
          Swim Instructor and Life Guard {"\n"}
          <small>
            Town of Milton <small style={{ fontSize: "0.5em" }}>2016</small>
          </small>
        </h1>
      </div>
    </div>
  </div>
)

export default ExperienceWindow
