import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";

interface Skills {
  id: number;
  title: string;
  logo: string;
  desc: string;
  percent: number;
}

const webSkills: Skills[] = [
  {
    id: 0,
    title: "React.js",
    logo: "./images/skills/react.png",
    desc: "사용자 인터페이스 구축을 위한 라이브러리",
    percent: 90,
  },
  {
    id: 1,
    title: "Next.js",
    logo: "./images/skills/next.png",
    desc: "React 기반 SSR/SSG 지원 프레임워크",
    percent: 80,
  },
  {
    id: 2,
    title: "JavaScript",
    logo: "./images/skills/javascript.png",
    desc: "웹 개발을 위한 핵심 프로그래밍 언어",
    percent: 90,
  },
  {
    id: 3,
    title: "TypeScript",
    logo: "./images/skills/typescript.png",
    desc: "JavaScript 기반 정적 타입 언어",
    percent: 80,
  },
  {
    id: 4,
    title: "HTML5",
    logo: "./images/skills/html.png",
    desc: "웹 페이지의 구조를 설계하는 마크업 언어",
    percent: 90,
  },
  {
    id: 5,
    title: "CSS3",
    logo: "./images/skills/css.png",
    desc: "웹 페이지의 스타일을 디자인하는 언어",
    percent: 90,
  },
  {
    id: 6,
    title: "Tailwind CSS",
    logo: "./images/skills/tailwind.png",
    desc: "유틸리티 퍼스트 CSS 프레임워크",
    percent: 90,
  },
  {
    id: 7,
    title: "Sass",
    logo: "./images/skills/sass.png",
    desc: "CSS 전처리기, 스타일 코드 효율화",
    percent: 80,
  },
  {
    id: 8,
    title: "Zustand",
    logo: "./images/skills/zustand.png",
    desc: "가벼운 글로벌 상태 관리 라이브러리",
    percent: 80,
  },
  {
    id: 9,
    title: "Node.js",
    logo: "./images/skills/node.png",
    desc: "비동기 이벤트 기반 서버 사이드 런타임",
    percent: 80,
  },
  {
    id: 10,
    title: "Prisma",
    logo: "./images/skills/prisma.png",
    desc: "ORM을 통한 데이터베이스 모델 관리 도구",
    percent: 90,
  },
  {
    id: 11,
    title: "MySQL",
    logo: "./images/skills/mysql.png",
    desc: "관계형 데이터베이스 관리 시스템",
    percent: 80,
  },
  {
    id: 12,
    title: "PostgreSQL",
    logo: "./images/skills/postgresql.png",
    desc: "오픈 소스 객체-관계형 데이터베이스",
    percent: 80,
  },
  {
    id: 13,
    title: "Git",
    logo: "./images/skills/git.png",
    desc: "버전 관리를 위한 필수 도구",
    percent: 90,
  },
  {
    id: 14,
    title: "GitHub",
    logo: "./images/skills/github.png",
    desc: "Git 기반 코드 협업 플랫폼",
    percent: 90,
  },
  {
    id: 15,
    title: "Figma",
    logo: "./images/skills/figma.png",
    desc: "UI/UX 디자인 협업 툴",
    percent: 90,
  },
];

const Skill = () => {
  return (
    <div className="main skill" id="skill">
      <div className="content-inner">
        <SectionTitle
          title="Skill"
          subTitle="현재까지 배우고 사용해본 기술입니다."
        />
        <div>
          <ul className="skill-list">
            {webSkills.map((skill) => (
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
