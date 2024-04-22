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
  import useMediaQuery from '@mui/material/useMediaQuery'
  import preview from "../assets/images/preview.png"
  
  const ProductPreview = () => {
    const smallScreen = useMediaQuery('(max-width:640px)')
    console.log(smallScreen)
   
    return (
        <div className="flex items-center justify-center">
           
        <Swiper
            style={{
            "--swiper-navigation-color": "#8F8F8F",
            "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={5}
            slidesPerView={3}
            autoplay={{ delay: 10000 }}
            navigation
            className="rounded-md px-[4rem] pt-5 md:pt-10 pb-10 w-full md:w-1/2 z-0"
        >
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl p-[2px]">
                    <img src={preview} alt="" className="bg-[#D9D9D9] rounded-t-md"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl p-[2px]">
                    <img src={preview} alt="" className="bg-[#D9D9D9] rounded-t-md"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl p-[2px]">
                    <img src={preview} alt="" className="bg-[#D9D9D9] rounded-t-md"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl p-[2px]">
                    <img src={preview} alt="" className="bg-[#D9D9D9] rounded-t-md"/>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    );
  };
  
  export default ProductPreview;
  