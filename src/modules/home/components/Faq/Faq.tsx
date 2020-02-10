import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Import image
import shapeDark from "../../../../images/shapes/shape-dark.png";

export class Faq extends Component {
  render() {
    return (
      <section className="section bg-light">
        <div className="container">
          <Row>
            <Col md={6} className="col-12">
              <div className="faq-container">
                <h4 className="question">
                  <i className="mdi mdi-help-circle text-primary mr-2 h4" /> Как
                  наш портал <span className="text-primary">LElectronic</span>{" "}
                  работает ?
                </h4>
                <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                  Из-за его широкого использования в качестве наполнителя текста
                  для макетов, нечитабельность имеет большое значение:
                  человеческое восприятие настроено на распознавание
                  определенных шаблонов и повторений в текстах.
                </p>
              </div>
            </Col>

            <Col md={6} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <div className="faq-container">
                <h4 className="question">
                  <i className="mdi mdi-help-circle text-primary mr-2 h4" />{" "}
                  Каков основной процесс открытия счета ?
                </h4>
                <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                  Если распределение букв и слов является случайным, то читатель
                  не будет отвлекаться от принятия нейтрального суждения о
                  визуальное воздействие
                </p>
              </div>
            </Col>

            <Col md={6} className="col-12 mt-4 pt-2">
              <div className="faq-container">
                <h4 className="question">
                  <i className="mdi mdi-help-circle text-primary mr-2 h4" /> Как
                  сделать неограниченный ввод данных ?
                </h4>
                <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                  Кроме того, это выгодно, когда фиктивный текст является
                  относительно реалистично, так что макет впечатление от
                  окончательная публикация не скомпрометирована.
                </p>
              </div>
            </Col>

            <Col md={6} className="col-12 mt-4 pt-2">
              <div className="faq-container">
                <h4 className="question">
                  <i className="mdi mdi-help-circle text-primary mr-2 h4" /> Как{" "}
                  <span className="text-primary">LElectronic</span> сохранить
                  вход с моего аккаунта ?
                </h4>
                <p className="answer text-muted ml-lg-4 pl-lg-3 mb-0">
                  Самый известный фиктивный текст-это Lorem Ipsum, который
                  является говорят, что он возник в 16 веке. Лорем Ипсум-это
                  составлено на псевдо-латинском языке, который более или менее
                  соответствует правильной латыни.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center">
            <Col className="text-center">
              <div className="section-title">
                <h4 className="main-title mb-4">
                  Есть Вопрос ? Выходите на связь!
                </h4>
                <p className="text-muted para-desc mx-auto">
                  Начните работать с{" "}
                  <span className="text-primary font-weight-bold">
                    LElectronic
                  </span>{" "}
                  это может обеспечить все необходимое для формирования
                  осознанности, трафик, подключение.
                </p>
                <a href="page-contact-two" className="btn btn-primary mt-4">
                  Связаться с нами <i className="mdi mdi-arrow-right" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-fluid">
          <Row>
            <div className="home-shape-bottom">
              <img
                src={shapeDark}
                alt=""
                className="img-fluid mx-auto d-block"
              />
            </div>
          </Row>
        </div>
      </section>
    );
  }
}
