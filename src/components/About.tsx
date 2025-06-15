import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <div className="main about" id="about">
      <div className="content-inner">
        <SectionTitle title="About" subTitle="저를 설명하는 키워드입니다." />
        <div className="about-wrap">
          <div className="photo-wrap">
            <img src="./images/sohyun.png" width={300} alt="임소현" />
            {/* <p>
              3<small>+</small>
            </p> */}
          </div>
          <div>
            <p>
              <span className="big-text">#열정적인 </span>
              <span>#기초에충실한 </span>
              <span>#사용자중심</span>
            </p>
            <p>
              <span>#프론트엔드 </span>
              <span className="big-text">#함께일하고싶은 </span>
            </p>
            <p>
              <span className="big-text">#앞서가는 </span>
              <span>#풀스택 </span>
            </p>
          </div>
        </div>
        {/* <div className="introduction">자기소개</div> */}
      </div>
    </div>
  );
};

export default About;
