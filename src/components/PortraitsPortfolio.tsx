import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const PortraitsPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/portraits/portrait36.jpg")}
            rightImage={require("../images/portraits/portrait37.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait38.jpg")}
            rightImage={require("../images/portraits/portrait39.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait34.jpg")}
            rightImage={require("../images/portraits/portrait8.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait3.jpg")}
            rightImage={require("../images/portraits/portrait4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait5.jpg")}
            rightImage={require("../images/portraits/portrait6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait9.jpg")}
            rightImage={require("../images/portraits/portrait10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait12.jpg")}
            rightImage={require("../images/portraits/portrait14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait15.jpg")}
            rightImage={require("../images/portraits/portrait16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait18.jpg")}
            rightImage={require("../images/portraits/portrait19.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait20.jpg")}
            rightImage={require("../images/portraits/portrait21.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait24.jpg")}
            rightImage={require("../images/portraits/portrait25.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait26.jpg")}
            rightImage={require("../images/portraits/portrait27.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait28.jpg")}
            rightImage={require("../images/portraits/portrait29.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait43.jpg")}
            rightImage={require("../images/portraits/portrait33.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait40.jpg")}
            rightImage={require("../images/portraits/portrait41.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait53.jpg")}
            rightImage={require("../images/portraits/portrait52.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait44.jpg")}
            rightImage={require("../images/portraits/portrait45.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait46.jpg")}
            rightImage={require("../images/portraits/portrait47.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait48.jpg")}
            rightImage={require("../images/portraits/portrait49.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait56.jpg")}
            rightImage={require("../images/portraits/portrait35.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait55.jpg")}
            rightImage={require("../images/portraits/portrait54.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait11.jpg")}
            rightImage={require("../images/portraits/portrait13.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait50.jpg")}
            rightImage={require("../images/portraits/portrait31.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait42.jpg")}
            rightImage={require("../images/portraits/portrait32.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait22.jpg")}
            rightImage={require("../images/portraits/portrait23.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait1.jpg")}
            rightImage={require("../images/portraits/portrait2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/portraits/portrait7.jpg")}
            rightImage={""}
          />
        </div>
      </Slide>
    </div>
  );
};

export default PortraitsPortfolio;