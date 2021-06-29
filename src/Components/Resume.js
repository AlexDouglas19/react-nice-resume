import React, { Component } from "react";
import { testModeAPI } from "react-ga";
import Slide from "react-reveal";

class Resume extends Component {
  
  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });


    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    return (
      <section id="resume">

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Services</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="info"><em className="date">Service 1</em></p>
              <p className="info"><em className="date">Service 2</em></p>
              <p className="info"><em className="date">Service 3</em></p>
              <p className="info"><em className="date">Service 4</em></p>
              <p className="info"><em className="date">Service 5</em></p>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
