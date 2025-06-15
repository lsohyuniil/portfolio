import React from "react";
import SectionTitle from "../components/SectionTitle";
import PortFolioSwiper from "../components/PortFolioSwiper";

const Portfolio = () => {
  return (
    <div className="main portfolio" id="portfolio">
      <div className="content-inner">
        <SectionTitle
          title="Portfolio"
          subTitle="직접 개발한 프로젝트입니다."
        />
        <div>
          <PortFolioSwiper />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
