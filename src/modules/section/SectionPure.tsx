import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { match } from "react-router-dom";
import { Sidebar, HeaderSection, ThemeList, Theme } from "./components";
import { Footer } from "../../common/components/Footer";
import shapeDark from "../../images/shapes/shape-dark.png";
import { ISection, ITheme } from "../../common/interfaces";

interface Props {
  match: match<any>;
  getSection: (id: number) => void;
  section: ISection;
}

interface State {
  theme: ITheme | null;
}

export class SectionPure extends Component<Props, State> {
  state = {
    theme: null
  };

  componentDidMount = () => {
    const { match, getSection } = this.props;
    const id = Number(match.params.sectionId);

    getSection(id);
  };

  handleSelectTheme = (idTheme: number) => {
    this.props.section.themes.forEach((theme: any) => {
      if (theme.id === idTheme) {
        this.setState({ theme });
      }
    });
  };

  render() {
    const { section } = this.props;
    const { title, description, themes } = section;
    const theme = this.state.theme || themes[0];

    return (
      <>
        <HeaderSection title={title} description={description} />
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
