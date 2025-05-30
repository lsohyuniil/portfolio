import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./scss/PortfolioSwiper.scss";

interface Portfolio {
  id: number;
  title: string;
  des: string;
  skill: string;
  webUrl: string;
  gitUrl: string;
}

const PortfolioList: Portfolio[] = [
  {
    id: 0,
    title: "제목1",
    des: "사이트 리뉴얼함",
    skill: "#React #Typescript",
    webUrl: "http://naver.com",
    gitUrl: "",
  },
  {
    id: 1,
    title: "제목2",
    des: "사이트 리뉴얼함",
    skill: "#React",
    webUrl: "http://kakao.com",
    gitUrl: "",
  },
  {
    id: 2,
    title: "제목3",
    des: "사이트 리뉴얼함",
    skill: "#Typescript",
    webUrl: "http://google.com",
    gitUrl: "",
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
              <img
                src={`./images/portfolio_slider_${item.id + 1}.jpg`}
                alt={item.title}
              />
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
