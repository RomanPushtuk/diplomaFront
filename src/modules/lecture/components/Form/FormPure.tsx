import React, { ChangeEvent, Component } from "react";
import { CircuitModel } from "../Circuit/CircuitModel";

interface Props {
  form: any;
  changeParams: (params: any) => void;
}

const circuitModel = new CircuitModel();

export class FormPure extends Component<Props> {
  handleChange = (event: ChangeEvent<any>) => {
    const { changeParams } = this.props;
    const { name } = event.target.dataset;
    const { value } = event.target;

    const element = circuitModel.getElementById(this.props.form.id);

    element.setParam(name, value);

    changeParams(element.params);
  };

  renderField = (fieldName: string, index: number) => {
    return (
      <div>
        <label>{fieldName}</label>
        <input
          onChange={this.handleChange}
          key={index}
          data-name={fieldName}
          placeholder={fieldName}
          value={this.props.form.params[fieldName]}
        />
      </div>
    );
  };

  render() {
    const { params } = this.props.form;

    return (
      <div className="form">{Object.keys(params).map(this.renderField)}</div>
    );
  }
}
