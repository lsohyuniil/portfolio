import React from "react";
import "./scss/Cube.scss";

const Cube = () => {
  return (
    <div className="cube-wrap">
      <div className="cubes">
        <div className="cube front">
          <img src="./logo192.png" alt="React" />
        </div>
        <div className="cube left">
          <div className="cube front">
            <img src="./images/skills/javascript.png" alt="JavaScript" />
          </div>
        </div>
        <div className="cube top">
          <div className="cube front">
            <img src="./images/skills/next.png" alt="Next.js" />
          </div>
        </div>
        <div className="cube bottom">
          <div className="cube front">
            <img src="./images/skills/typeScript.png" alt="TypeScript" />
          </div>
        </div>
        <div className="cube right">
          <div className="cube front">
            <img src="./images/skills/node.png" alt="Node.js" />
          </div>
        </div>
        <div className="cube back">
          <div className="cube front">
            <img src="./images/skills/tailwind.png" alt="Tailwind CSS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
