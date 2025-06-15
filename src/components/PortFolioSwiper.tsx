import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./scss/PortfolioSwiper.scss";

interface Portfolio {
  id: number;
  img: string;
  title: string;
  des: string;
  skill: string;
  webUrl: string;
  gitUrl: string;
}

const PortfolioList: Portfolio[] = [
  {
    id: 0,
    img: "ziktalk.png",
    title: "ZikTalk",
    des: "취업 준비생을 위한 AI 기반 직무 맞춤형 모의 면접 서비스",
    skill: "#React #JavaScript #TailwindCss #Zustand #Axios #Node.js",
    webUrl: "zik-talk-smey.vercel.app",
    gitUrl: "https://github.com/ko9612/ZikTalk",
  },
  {
    id: 1,
    img: "naver.png",
    title: "Naver",
    des: " 네이버(Naver) 메인 페이지를 HTML5와 CSS3로 구현한 프로젝트",
    skill: "#HTML5 #CSS3",
    webUrl: "lsohyuniil.github.io/naver/",
    gitUrl: "https://github.com/lsohyuniil/naver",
  },
  {
    id: 2,
    img: "pokedex.png",
    title: "Pokédex",
    des: "포켓몬 데이터를 기반으로 사용자가 원하는 포켓몬을 검색하고, 탐색할 수 있는 웹 애플리케이션",
    skill: "#React #CSS3 #JavaScript",
    webUrl: "lsohyuniil.github.io/pokedex",
    gitUrl: "https://github.com/lsohyuniil/pokedex",
  },
  {
    id: 3,
    img: "emotional.png",
    title: "Inside Out Emotional Chat",
    des: "인사이드 아웃 애니메이션의 감정 캐릭터의 성격과 대화 스타일에 맞춰 채팅 응답을 생성하는 웹 기반 감정 채팅 서비스. OpenAI의 GPT API를 활용해 감정별 맞춤형 대화 경험 제공.",
    skill:
      "#React #JavaScript #styled-components #Axios #Node.js #Express.js #OpenAI",
    webUrl: "",
    gitUrl: "https://github.com/lsohyuniil/emotional",
  },
];

const PortFolioSwiper = () => {
  return (
    <div className="main portSwiper">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation
        // spaceBetween={30} 간격
        slidesPerView={1}
        loop={true}
      >
        {PortfolioList.map((item) => (
          <SwiperSlide>
            <p>
              <img src={`./images/portfolio/${item.img}`} alt={item.title} />
            </p>
            <div className="text-box">
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <div className="btn-wrap">
                <span>{item.skill}</span>
                <ul>
                  <li>
                    <a href={item.gitUrl}>git</a>
                  </li>
                  <li>
                    <a href={item.webUrl}>web</a>
                  </li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortFolioSwiper;
