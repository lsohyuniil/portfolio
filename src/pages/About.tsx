import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="main about">
      <div className="content-inner">
        <SectionTitle title="About" subTitle="임소현" />
        <div className="about-wrap">
          <div>
            <p>
              <span className="big-text">#열정적인</span>
              <span>#기초에충실한</span>
              <span>#사용자경험</span>
            </p>
            <p>
              <span>#프론트엔드</span>
              <span className="big-text">#함께일하고싶은</span>
            </p>
            <p>
              <span className="big-text">#앞서가는</span>
              <span>풀스택</span>
            </p>
          </div>
          <div className="photo-wrap">
            <p>
              3<small>+</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
