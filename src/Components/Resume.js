import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  
  render() {
    if (!this.props.data) return null;

    return (
      <section id="resume">

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>What We Do</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="info"><em className="date">New wiring and wiring upgrades</em></p>
              <p className="info"><em className="date">Fault finding and repairs</em></p>
              <p className="info"><em className="date">Lighting and additional power points</em></p>
              <p className="info"><em className="date">Ventilation</em></p>
              <p className="info"><em className="date">TV and Data</em></p>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Areas Covered</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <p className="info"><em className="date">Dunedin and surrounds</em></p>
                  <p className="info"><em className="date">Ranfurly/Naseby area by arrangement (please call for details)</em></p>     
                </div>
              </div>
            </div>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
