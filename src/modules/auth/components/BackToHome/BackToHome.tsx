import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BackToHome extends Component {
  render() {
    return (
      <div className="back-to-home rounded d-none d-sm-block">
        <Link to="/" className="text-white rounded d-inline-block text-center">
          <i className="mdi mdi-home" />
        </Link>
      </div>
    );
  }
}
