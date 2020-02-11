import React, { Component } from "react";
import { Row, Col } from "reactstrap";

interface Props {
  title: string;
  description: string;
}

export class Header extends Component<Props> {
  render() {
    const { title, description } = this.props;

    return (
      <section className="bg-half bg-light">
        <div className="home-center">
          <div className="home-desc-center">
            <div className="container">
              <Row className="justify-content-center">
                <Col lg={12} className="text-center">
                  <div className="page-next-level">
                    <h4 className="title mb-3">{title}</h4>
                    <p className="para-desc mx-auto text-muted">
                      {description}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
