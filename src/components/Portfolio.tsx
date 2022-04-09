import { Element } from "react-scroll";
import "../css/App.css";
import { Slide } from "react-awesome-reveal";

const Portfolio = () => {
  return (
    <div className="container">
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <Element name="portfolio" style={{ height: "100vh" }}>
          <div style={{ paddingTop: 42 }}>
            <div>
              <h3>LYHYT OTSIKKO</h3>
              <h2>PALJON PIDEMPI OTSIKKO</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 10
                }}
              >
                <div
                  style={{
                    flex: 1,
                    width: "100%"
                  }}
                >
                  <img
                    style={{
                      width: "100%"
                    }}
                    src={require("../images/7.jpg")}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      width: "50%",
                      paddingTop: 10,
                      paddingRight: 10
                    }}
                  >
                    <img
                      style={{
                        width: "100%"
                      }}
                      src={require("../images/6.jpg")}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      width: "50%",
                      paddingTop: 10,
                      paddingLeft: 10
                    }}
                  >
                    <img
                      style={{
                        width: "100%"
                      }}
                      src={require("../images/6.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 10
                }}
              >
                <div
                  style={{
                    flex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row"
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      width: "50%",
                      paddingBottom: 10,
                      paddingRight: 10
                    }}
                  >
                    <img
                      style={{
                        width: "100%"
                      }}
                      src={require("../images/6.jpg")}
                      alt=""
                    />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      width: "50%",
                      paddingBottom: 10,
                      paddingLeft: 10
                    }}
                  >
                    <img
                      style={{
                        width: "100%"
                      }}
                      src={require("../images/6.jpg")}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="hoverContainer"
                  style={{
                    flex: 1,
                    width: "100%"
                  }}
                >
                  <img
                    className="image"
                    style={{
                      width: "100%"
                    }}
                    src={require("../images/7.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Element>
      </Slide>
    </div>
  );
};

export default Portfolio;