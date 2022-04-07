import "../css/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MenuBar from "../components/MenuBar";
import { useRef } from "react";

const scrollToRef = (ref: any) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth"
  });

function App() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <div className="App">
      <MenuBar />
      <div>
        <Carousel
          className="Carousel"
          autoPlay
          infiniteLoop
          stopOnHover={false}
          interval={8000}
          showThumbs={false}
          swipeable={false}
          animationHandler={"fade"}
          transitionTime={1000}
          showStatus={false}
          dynamicHeight={false}
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
            hasPrev && (
              <button
                className="control-arrow control-prev"
                onClick={clickHandler}
                style={{
                  alignItems: "center",
                  padding: 16,
                  background: "transparent"
                }}
              >
                <img
                  className="arrow-img"
                  style={{ height: "40px", width: "40px", color: "white" }}
                  src={require("../images/prev.png")}
                  alt=""
                />
              </button>
            )
          }
          renderArrowNext={(clickHandler, hasNext, labelNext) =>
            hasNext && (
              <button
                className="control-arrow control-next"
                onClick={clickHandler}
                style={{
                  alignItems: "center",
                  padding: 16,
                  background: "transparent"
                }}
              >
                <img
                  className="arrow-img"
                  style={{
                    height: "40px",
                    width: "40px"
                  }}
                  src={require("../images/next.png")}
                  alt=""
                />
              </button>
            )
          }
        >
          <div>
            <img src={require("../images/5.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/6.jpg")} alt="" />
          </div>
          <div>
            <img src={require("../images/7.jpg")} alt="" />
          </div>
        </Carousel>
        <a
          onClick={() => executeScroll()}
          style={{
            position: "absolute",
            width: "100%",
            marginBottom: 40,
            zIndex: 998,
            bottom: 0,
            left: 0,
            color: "white",
            letterSpacing: "0.25em",
            textDecoration: "none",
            cursor: "pointer",
            fontSize: "1.15rem",
            textShadow: "1px 1px 1px black"
          }}
        >
          KATSO LISÄÄ
        </a>
      </div>

      <div ref={myRef} style={{ height: "1200px" }}>
        <div style={{ padding: "3rem 9rem" }}>
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
                  className="imgTrans"
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
                    className="imgTrans"
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
                    className="imgTrans"
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
                    className="imgTrans"
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
                    className="imgTrans"
                    style={{
                      width: "100%"
                    }}
                    src={require("../images/6.jpg")}
                    alt=""
                  />
                </div>
              </div>
              <div
                style={{
                  flex: 1,
                  width: "100%"
                }}
              >
                <img
                  className="imgTrans"
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
      </div>
    </div>
  );
}

export default App;