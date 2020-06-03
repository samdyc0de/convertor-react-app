import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div
        className="navbar navbar-expand-lg navbar-light bg-secondary  "
        data-toggle="tooltip"
      >
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link
                className=" text-white nav-link active"
                to="/"
                data-toggle="tooltip"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white " to="Longitude">
                Metros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="Mass">
                Kilos
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="Litres">
                Litros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
