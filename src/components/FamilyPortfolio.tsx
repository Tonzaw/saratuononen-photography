import { Slide } from "react-awesome-reveal";
import PortfolioRow from "./PortfolioRow";

const FamilyPortfolio = () => {
  return (
    <div className="container" style={{ paddingTop: 42 }}>
      <Slide duration={500} direction="left" fraction={0.001} cascade={true}>
        <div>
          <PortfolioRow
            leftImage={require("../images/family/family8.jpg")}
            rightImage={require("../images/family/family2.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family3.jpg")}
            rightImage={require("../images/family/family4.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family9.jpg")}
            rightImage={require("../images/family/family10.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family13.jpg")}
            rightImage={require("../images/family/family14.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family15.jpg")}
            rightImage={require("../images/family/family20.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family17.jpg")}
            rightImage={require("../images/family/family18.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family21.jpg")}
            rightImage={require("../images/family/family42.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family23.jpg")}
            rightImage={require("../images/family/family24.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family31.jpg")}
            rightImage={require("../images/family/family32.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family33.jpg")}
            rightImage={require("../images/family/family1.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family50.jpg")}
            rightImage={require("../images/family/family52.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family37.jpg")}
            rightImage={require("../images/family/family38.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family39.jpg")}
            rightImage={require("../images/family/family40.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family41.jpg")}
            rightImage={require("../images/family/family22.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family19.jpg")}
            rightImage={require("../images/family/family16.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family5.jpg")}
            rightImage={require("../images/family/family6.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family11.jpg")}
            rightImage={require("../images/family/family12.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family35.jpg")}
            rightImage={require("../images/family/family36.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family25.jpg")}
            rightImage={require("../images/family/family26.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family27.jpg")}
            rightImage={require("../images/family/family28.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family48.jpg")}
            rightImage={require("../images/family/family44.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family51.jpg")}
            rightImage={require("../images/family/family45.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family46.jpg")}
            rightImage={require("../images/family/family49.jpg")}
          />
          <PortfolioRow
            leftImage={require("../images/family/family47.jpg")}
            rightImage={""}
          />
        </div>
      </Slide>
    </div>
  );
};

export default FamilyPortfolio;
