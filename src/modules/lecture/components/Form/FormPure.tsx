import React, { Component } from "react";

interface Props {
  form: any;
  changeProperty: (id: string, name: string, value: string | number) => void;
}

export class FormPure extends Component<Props> {
  render() {
    console.log(this.props.form);
    return <div className="form" />;
  }
}
