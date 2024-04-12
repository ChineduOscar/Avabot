// import { Link } from "react-router-dom"
// importing swiper kits
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import slideBg from "../assets/images/slidebg.png"

const HomeSlide = () => {

  return (
    <Swiper
      style={{
        "--swiper-navigation-color" :"#FFFFFF",
        "--swiper-pagination-color": "#FFFFFF",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "16px",
        "--swiper-pagination-bullet-horizontal-gap": "2px"
      }}
      modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 10000 }} 
      navigation
      pagination={{
        clickable: true,
      }}
      className="rounded-md bg-[#222]"
    >
      <SwiperSlide>
        <div className="relative w-full">
          <img src={slideBg} alt="" className="w-full object-cover"/>
          <div className="absolute top-[20%] left-[10%] md:left-[10%] right-0 flex flex-col justify-center gap-12  items-center md:items-start">
            <p className="text-xl md:text-5xl text-white md:leading-[60px]">Bringing the market <br/><span className="text-[#FF931E]">closer</span> to you!</p>
            <button className="text-white bg-[#FF931E] text-sm md:text-[18px] py-2 px-4 rounded-md">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img src={slideBg} alt="" className="w-full h-full object-cover"/>
          <div className="absolute top-[20%] left-[10%] right-0 flex flex-col justify-center gap-12  items-center md:items-start">
            <p className="text-5xl text-white leading-[60px]">We are fast and <br/><span className="text-[#FF931E]">reliable</span></p>
            <button className="text-white bg-[#FF931E] text-[18px] py-2 px-4 rounded-md">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative w-full">
          <img src={slideBg} alt="" className="w-full h-full object-cover"/>
          <div className="absolute top-[20%] left-[10%] right-0 flex flex-col justify-center gap-12  items-center md:items-start">
            <p className="text-5xl text-white leading-[60px]">Your happiness is our <br/><span className="text-[#FF931E]">priority</span></p>
            <button className="text-white bg-[#FF931E] text-[18px] py-2 px-4 rounded-md">Shop Now</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlide;
