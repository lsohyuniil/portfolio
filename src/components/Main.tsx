import React from "react";
import BigTitle from "../components/BigTitle";
import "../components/scss/BigTitle.scss";
import Cube from "../components/Cube";

const Main = () => {
  return (
    <div className="main index" id="main">
      <div className="content-inner">
        <BigTitle title="FRONTEND" desTitle="DEVELOPER" subTitle="LIM SOHYUN" />
        <Cube />
      </div>
    </div>
  );
};

export default Main;
