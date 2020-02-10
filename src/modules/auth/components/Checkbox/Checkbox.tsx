import React, { Component } from "react";
import { Link } from "react-router-dom";

interface Props {
  label: string;
}

export class Checkbox extends Component<Props> {
  render() {
    const { label } = this.props;

    return (
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            I Accept{" "}
            <Link to="#" className="text-primary">
              Terms And Condition
            </Link>
          </label>
        </div>
      </div>
    );
  }
}
