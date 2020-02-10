import React, { Component } from "react";

interface Props {
  label: string;
  isRequired: boolean;
  placeholder: string;
  type: string;
  onChange: (event: any) => void;
}

export class FieldInput extends Component<Props> {
  render() {
    const { label, isRequired, placeholder, type, onChange } = this.props;

    return (
      <div className="form-group position-relative">
        <label>
          {label} {isRequired && <span className="text-danger">*</span>}
        </label>
        <i className="mdi mdi-account ml-3 icons" />
        <input
          type={type}
          className="form-control pl-5"
          placeholder={placeholder}
          name="s"
          onChange={onChange}
        />
      </div>
    );
  }
}
