import React, { ChangeEvent, Component } from "react";
import classNames from "classnames/bind";
import { CircuitModel } from "../Circuit/CircuitModel";
import styles from "./FormPure.module.css";

interface Props {
  form: any;
  width: number;
  changeParams: (params: any) => void;
  onChange: () => void;
}

const cn = classNames.bind(styles);
const circuitModel = new CircuitModel();

export class FormPure extends Component<Props> {
  handleChange = (event: ChangeEvent<any>) => {
    const { changeParams, onChange } = this.props;
    const { name } = event.target.dataset;
    const { value } = event.target;

    const element = circuitModel.getElementById(this.props.form.id);

    element.setParam(name, value);

    changeParams(element.params);
    onChange();
  };

  renderField = (fieldName: string, index: number) => {
    return (
      <div className={cn("property")}>
        <label className={cn("label")}>{fieldName}</label>
        <input
          onChange={this.handleChange}
          className={cn("input")}
          key={index}
          data-name={fieldName}
          placeholder={fieldName}
          value={this.props.form.params[fieldName]}
        />
      </div>
    );
  };

  render() {
    const { params, name } = this.props.form;

    return (
      <div className={cn("form")} style={{ minWidth: this.props.width }}>
        <h5 className={cn("title")}>{name}</h5>
        {Object.keys(params).map(this.renderField)}
      </div>
    );
  }
}
