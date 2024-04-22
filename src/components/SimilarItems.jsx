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
  import img1 from "../assets/images/img1.png"
  import img2 from "../assets/images/img2.png"
  import img3 from "../assets/images/img3.png"
  
  const SimilarItems = () => {
    const smallScreen = useMediaQuery('(max-width:640px)')
    console.log(smallScreen)
   
    return (
        <div>
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-[#373737] text-[18px] md:text-xl">Similar Items</p>
                <div className="bg-[#FF931E] w-[120px] h-[2px]"></div>
            </div>
        <Swiper
            style={{
            "--swiper-navigation-color": "#F58634",
            "--swiper-navigation-size": "30px",
            "--swiper-pagination-color": "#F58634",
            "--swiper-pagination-bullet-inactive-color": "#F5863440",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "2px"
            }}
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            spaceBetween={smallScreen ? 10 : 50}
            slidesPerView={smallScreen ? 2 : 4}
            autoplay={{ delay: 10000 }}
            pagination={{
                clickable: true,
            }}
            navigation
            className="rounded-md px-2 md:px-10 pt-5 md:pt-10 pb-10 z-0"
        >
            <SwiperSlide>
                <div className="relative flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl">
                    <img src={img1} alt="" className="w-full bg-[#D9D9D9] rounded-t-md"/>
                    <div className="p-2 pt-6">
                        <p className="text-sm md:text-[18px] text-[#0F172A] h-10">ORIAMO HEADSET</p>
                        <div className="flex items-center justify-between pt-2 h-10">
                            <p className="text-[#F58634] text-sm md:text-xl">₦ 30,000</p>
                            <p className="text-[#AEACAC] text-xs md:text-base line-through">₦ 15,000</p>
                        </div>
                    </div>
                    <p className="text-xs md:text-base absolute top-1 right-1 rounded-[50%] bg-white font-bold text-[#FF931E] py-1">-50%</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl">
                    <img src={img2} alt="" className="w-full bg-[#D9D9D9] rounded-t-md"/>
                    <div className="p-2 pt-6">
                        <p className="text-sm md:text-[18px] text-[#0F172A] h-10">SPORTY SNEAKERS</p>
                        <div className="flex items-center justify-between pt-2 h-10">
                            <p className="text-[#F58634] text-sm md:text-xl">₦ 30,000</p>
                            <p className="text-[#AEACAC] text-xs md:text-base line-through">₦ 15,000</p>
                        </div>
                    </div>
                    <p className="text-xs md:text-base absolute top-1 right-1 rounded-[50%] bg-white font-bold text-[#FF931E] py-1">-50%</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl">
                    <img src={img3} alt="" className="w-full bg-[#D9D9D9] rounded-t-md"/>
                    <div className="p-2 pt-6">
                        <p className="text-sm md:text-[18px] text-[#0F172A] h-10">HP PAVILION</p>
                        <div className="flex items-center justify-between pt-2 h-10">
                            <p className="text-[#F58634] text-sm md:text-xl">₦ 30,000</p>
                            <p className="text-[#AEACAC] text-xs md:text-base line-through">₦ 15,000</p>
                        </div>
                    </div>
                    <p className="text-xs md:text-base absolute top-1 right-1 rounded-[50%] bg-white font-bold text-[#FF931E] py-1">-50%</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex flex-col bg-white rounded-md shadow-md hover:shadow-2xl">
                    <img src={img1} alt="" className="w-full bg-[#D9D9D9] rounded-t-md"/>
                    <div className="p-2 pt-6">
                        <p className="text-sm md:text-[18px] text-[#0F172A] h-10">OSCAR HEADSET</p>
                        <div className="flex items-center justify-between pt-2 h-10">
                            <p className="text-[#F58634] text-sm md:text-xl">₦ 30,000</p>
                            <p className="text-[#AEACAC] text-xs md:text-base line-through">₦ 15,000</p>
                        </div>
                    </div>
                    <p className="text-xs md:text-base absolute top-1 right-1 rounded-[50%] bg-white font-bold text-[#FF931E] py-1">-50%</p>
                </div>
            </SwiperSlide>
        </Swiper>
      </div>
    );
  };
  
  export default SimilarItems;
  