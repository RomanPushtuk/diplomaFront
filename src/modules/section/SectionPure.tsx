import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { match } from "react-router-dom";
import { Sidebar, HeaderSection, ThemeList, Theme } from "./components";
import { ISection, ITheme } from "./interfaces";
import { Footer } from "../../common/components/Footer";
import shapeDark from "../../images/shapes/shape-dark.png";

interface Props {
  match: match<any>;
  history: any;
  getSection: (id: number) => void;
  addTheme: (theme: ITheme) => void;
  section: ISection;
  theme: ITheme;
}

export class SectionPure extends Component<Props> {
  componentDidMount = () => {
    // const { match, getSection } = this.props;
    // const id = Number(match.params.sectionId);
    //
    // getSection(id);
  };

  handleSelectTheme = (theme: ITheme) => {
    const { addTheme } = this.props;

    addTheme(theme);
  };

  render() {
    const { section, theme, history } = this.props;
    const { title, description, themes } = section;

    return (
      <>
        <HeaderSection
          title={title}
          description={description}
          history={history}
        />
        <section className="section">
          <div className="container">
            <Row>
              <Col lg={4} md={5} className="col-12">
                <Sidebar title="Доступные темы">
                  <ThemeList
                    themes={themes}
                    onSelect={this.handleSelectTheme}
                  />
                </Sidebar>
              </Col>

              <Col lg={8} md={7} className="col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <div className="ml-lg-4">
                  <Theme theme={theme} />
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
        <Footer />
      </>
    );
  }
}
