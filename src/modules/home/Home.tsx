import React, { Component } from "react";
import { Header as HomeHeader, HowItWorks, Faq } from "./components";
import { Footer } from "../../common/components/Footer";

export class Home extends Component {
  render() {
    return (
      <>
        <HomeHeader />
        <HowItWorks />
        <Faq />
        <Footer />
      </>
    );
  }
}
