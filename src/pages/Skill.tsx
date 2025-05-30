import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

interface Skill {
  id: number;
  title: string;
  logo: string;
  desc: string;
  percent: number;
}

const frontSkills: Skill[] = [
  {
    id: 0,
    title: "html",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 1,
    title: "css",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 2,
    title: "javascript",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 3,
    title: "typescript",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 4,
    title: "react",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 5,
    title: "git",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
  {
    id: 6,
    title: "figma",
    logo: "./images/kakao.svg",
    desc: "hyper text markup language",
    percent: 90,
  },
];

const Skill = () => {
  return (
    <div className="main skill">
      <div className="content-inner">
        <SectionTitle
          title="Skill"
          subTitle="제가 할 수 있는 과목 스킬입니다."
        />
        <div>
          <ul className="skill-list">
            {frontSkills.map((skill) => (
              <li key={skill.id}>
                <SkillCard
                  id={skill.id}
                  title={skill.title}
                  logo={skill.logo}
                  desc={skill.desc}
                  percent={skill.percent}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
