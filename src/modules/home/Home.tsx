import React, { Component } from "react";
import { Header, HowItWorks, Faq } from "./components";
import { Footer } from "../../common/components/Footer";

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <HowItWorks />
        <Faq />
        <Footer />
      </>
    );
  }
}
