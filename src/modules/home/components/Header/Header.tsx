import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import classNames from "classnames/bind";
import { ButtonLink } from "../../../links";
import styles from "./Header.module.css";

import startupSVG from "../../../../images/illustrator/Startup_SVG.svg";

const cn = classNames.bind(styles);

export class Header extends Component {
  render() {
    return (
      <section className={cn("header")} id="home">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <Row className="align-items-center">
                <Col lg={7} md={7}>
                  <div className="title-heading mt-4">
                    <h1 className="heading mb-3">
                      Изучайте электронику{" "}
                      <span className="text-primary">Интерактивно !</span>{" "}
                    </h1>
                    <p className="para-desc text-muted">
                      Научитесь проектировать электрические проборы вместе с
                      нашим интерактивным учебником.
                    </p>
                    <div className="mt-4 pt-2">
                      <ButtonLink to="section/1">Начать</ButtonLink>
                      <div className={cn("margin")} />
                      <ButtonLink to="section/1" outline>
                        Продолжить
                      </ButtonLink>
                    </div>
                  </div>
                </Col>
                <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <img src={startupSVG} alt="" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
