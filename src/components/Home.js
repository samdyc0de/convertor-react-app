import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 p-5">
            <div className="c">
              <h1 className="title font-italic font-bold text-center font-weight-bold">
                Convertor ReactApp
              </h1>
              <div className="container">
                <br />
                <p className="line anim-typewriter">
                  conversiones reactivas a un click
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
