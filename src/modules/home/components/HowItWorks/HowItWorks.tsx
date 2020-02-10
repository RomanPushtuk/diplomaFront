import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import seoSVG from "../../../../images/illustrator/SEO_SVG.svg";

export class HowItWorks extends Component {
  render() {
    return (
      <section className="section bg-light border-bottom">
        <div className="container">
          <Row className="justify-content-center">
            <Col className="text-center">
              <div className="section-title mb-60">
                <h4 className="main-title mb-4">Как начать ?</h4>
                <p className="text-muted para-desc mb-0 mx-auto">
                  Начните с наиболее{" "}
                  <span className="text-primary font-weight-bold">
                    Подходящего
                  </span>{" "}
                  вам раздела. Они разбиты по уровню знаний и вы всегда можете
                  что-то выучить, или восполнить знания.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={5} md={6}>
              <img src={seoSVG} alt="" />
            </Col>

            <Col lg={7} md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="section-title ml-lg-5">
                <h4 className="title mb-4">Основы электронки</h4>
                <p className="text-muted">
                  Этот раздел является основным для изучения. В нем вы
                  познакомитесь с электическими цепями и оснавними
                  радиоэлектронными приборами. Изучите основные физические
                  законы.
                </p>
                <ul className="list-unstyled feature-list text-muted">
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                    Узнаете оснонвые физические законы
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                    Изучите работу элекронных компонентов
                  </li>
                  <li>
                    <i className="mdi mdi-checkbox-marked-circle text-success h4 mr-2" />
                    Научитесь проектировать аналоговые схемы
                  </li>
                </ul>
                <Link to="/section/1" className="mt-3 text-primary">
                  Перейти к разделу <i className="mdi mdi-chevron-right" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}
