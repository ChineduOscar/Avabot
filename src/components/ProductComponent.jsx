import { useState } from "react"
import ProductPreview from "./ProductPreview"
import product from "../assets/images/product.png"
import CartIcon from "../assets/CartIcon"
import LikeIcon from "../assets/LikeIcon"
import DeliveryReturns from "./DeliveryReturns"
import ProductDetails from "./ProductDetails"
import MobProductDetails from "./MobProductDetails"
import SimilarItems from "./SimilarItems"

const ProductComponent = () => {
    const [facebookHovered, setFacebookHovered] = useState(false);
    const [twitterHovered, setTwitterHovered] = useState(false);
    const [youtubeHovered, setYoutubeHovered] = useState(false);
    const [instagramHovered, setInstagramHovered] = useState(false);

  return (
    <div className="">
        <div className="bg-white px-2 md:px-16 py-2 md:py-4">
            <p className="text-[10px] md:text-base text-[#373737]"><span>Home</span> {'>'} <span>Phones & Tablets</span> {'>'} <span>Mobile Phones</span> {'>'} <span className="font-bold">Smart Phones</span></p>
            <p className="text-black text-xl md:text-3xl font-bold">iOS Phones</p>
        </div>
        <div className="px-2 md:px-16 py-4 flex flex-col md:flex-row items-start gap-0 md:gap-8">
            <div className="rounded-md w-full md:w-[80%]">
                <div className="p-4 flex flex-col md:flex-row items-center gap-4 bg-white">
                    <div className="bg-[#F8F8F8] p-4 w-full md:w-1/2 flex flex-col item-center justify-center rounded-md h-full md:h-[460px]">
                        <div className="w-full flex items-center justify-center">
                            <img src={product} alt="" />
                        </div>
                        <ProductPreview />
                    </div>
                    <div className="w-full md:w-1/2 rounded-md p-4 border border-[#E4E4E4] h-full md:h-[460px]">
                        <p className="text-xl md:text-2xl text-black">Apple iPhone 15 Pro 512GB Blue Titanium</p>
                        <p className="text-base text-black my-4"><span className="text-[#AEACAC]">Brand:</span> Apple</p>
                        <p className="font-bold text-2xl md:text-[27px]">₦ 150,000</p>
                        <div className="flex items-start gap-10 my-3">
                            <p className="text-[17px] md:text-xl text-[#606060] line-through">₦ 186,000</p>
                            <p className="text-sm md:text-base text-[#F58634] bg-[#E4E4E4] py-1">-35%</p>
                        </div>
                        <div className="mt-4 flex gap-2 items-center">
                            <button className="text-white bg-[#373737] flex gap-2 py-2 px-6 rounded-md"><CartIcon /> <p>ADD TO CART</p></button>
                            <div className="cursor-pointer">
                                <LikeIcon />
                            </div>
                        </div>
                        <div className="my-6">
                            <p className="mb-2">Quantity</p>
                            <div className="flex">
                                <p className="border border-[#FF931E] py-1 md:py-2 px-3 md:px-4 cursor-pointer">-</p>
                                <p className="text-white bg-[#FF931E] py-1 md:py-2 px-3 md:px-4">1</p>
                                <p className="border border-[#FF931E] py-1 md:py-2 px-3 md:px-4 cursor-pointer">+</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-4 gap-2">
                            <div>
                                <p className="text-[#606060] text-xs">Call To Order</p>
                                <p className="text-xs md:text-base mt-2">+234 815 790 5252</p>
                            </div>
                            <div className="text-[#606060] text-xs">
                                <p>Share Product</p>
                                <div className="flex items-center gap-2 mt-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => setFacebookHovered(true)} onMouseLeave={() => setFacebookHovered(false)}>
                                        <circle cx="12" cy="12" r="12" fill={facebookHovered ? '#FF931E' : '#606060'}/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 9.15625H13V7.28125C13 7.03261 13.1054 6.79415 13.2929 6.61834C13.4804 6.44252 13.7348 6.34375 14 6.34375H15V4H13C12.2044 4 11.4413 4.29632 10.8787 4.82376C10.3161 5.35121 10 6.06658 10 6.8125V9.15625H8V11.5H10V19H13V11.5H15L16 9.15625Z" fill="white"/>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => setTwitterHovered(true)} onMouseLeave={() => setTwitterHovered(false)}>
                                        <circle cx="12" cy="12" r="12" fill={twitterHovered ? '#FF931E' : '#606060'}/>
                                        <path d="M17.6637 9.63134C17.672 9.74682 17.672 9.86232 17.672 9.9778C17.672 13.5 14.9912 17.5584 10.0914 17.5584C8.58186 17.5584 7.17958 17.1212 6 16.3623C6.21448 16.3871 6.42067 16.3953 6.6434 16.3953C7.88894 16.3953 9.03554 15.9747 9.95115 15.257C8.77983 15.2323 7.79822 14.4651 7.46002 13.4093C7.62501 13.434 7.78997 13.4505 7.96321 13.4505C8.20242 13.4505 8.44165 13.4175 8.66435 13.3598C7.44354 13.1123 6.5279 12.04 6.5279 10.7449V10.7119C6.88258 10.9099 7.29505 11.0336 7.73221 11.0501C7.01456 10.5717 6.5444 9.75507 6.5444 8.8312C6.5444 8.33629 6.67636 7.88261 6.90734 7.48666C8.2189 9.10342 10.1904 10.1592 12.401 10.2747C12.3598 10.0768 12.335 9.87057 12.335 9.66435C12.335 8.19606 13.5228 7 14.9994 7C15.7665 7 16.4594 7.3217 16.9461 7.84137C17.5482 7.7259 18.1256 7.50317 18.6371 7.19797C18.4391 7.81664 18.0184 8.33631 17.4657 8.66624C18.0019 8.60853 18.5216 8.46002 19 8.25382C18.6371 8.78172 18.1834 9.25188 17.6637 9.63134Z" fill="white"/>
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => setYoutubeHovered(true)} onMouseLeave={() => setYoutubeHovered(false)}>
                                        <circle cx="12" cy="12" r="12" fill={youtubeHovered ? '#FF931E' : '#606060'}/>
                                        <path d="M12.5015 9.16626C10.6569 9.16626 9.16916 10.654 9.16916 12.4985C9.16916 14.3431 10.6569 15.8308 12.5015 15.8308C14.346 15.8308 15.8337 14.3431 15.8337 12.4985C15.8337 10.654 14.346 9.16626 12.5015 9.16626ZM12.5015 14.665C11.3095 14.665 10.335 13.6934 10.335 12.4985C10.335 11.3037 11.3066 10.3321 12.5015 10.3321C13.6963 10.3321 14.6679 11.3037 14.6679 12.4985C14.6679 13.6934 13.6934 14.665 12.5015 14.665ZM16.7473 9.02995C16.7473 9.46207 16.3993 9.80719 15.9701 9.80719C15.5379 9.80719 15.1928 9.45917 15.1928 9.02995C15.1928 8.60072 15.5408 8.2527 15.9701 8.2527C16.3993 8.2527 16.7473 8.60072 16.7473 9.02995ZM18.9543 9.81879C18.905 8.77764 18.6672 7.85538 17.9045 7.09554C17.1446 6.33569 16.2224 6.09788 15.1812 6.04568C14.1081 5.98477 10.8919 5.98477 9.8188 6.04568C8.78054 6.09498 7.85828 6.33279 7.09554 7.09264C6.33279 7.85248 6.09788 8.77473 6.04568 9.81589C5.98477 10.889 5.98477 14.1052 6.04568 15.1783C6.09498 16.2195 6.33279 17.1417 7.09554 17.9016C7.85828 18.6614 8.77764 18.8992 9.8188 18.9514C10.8919 19.0123 14.1081 19.0123 15.1812 18.9514C16.2224 18.9021 17.1446 18.6643 17.9045 17.9016C18.6643 17.1417 18.9021 16.2195 18.9543 15.1783C19.0152 14.1052 19.0152 10.8919 18.9543 9.81879ZM17.568 16.3297C17.3418 16.8981 16.9039 17.336 16.3326 17.5651C15.477 17.9045 13.4469 17.8262 12.5015 17.8262C11.556 17.8262 9.52298 17.9016 8.67033 17.5651C8.1019 17.3389 7.66397 16.901 7.43486 16.3297C7.09554 15.4741 7.17384 13.444 7.17384 12.4985C7.17384 11.5531 7.09844 9.52008 7.43486 8.66743C7.66107 8.099 8.099 7.66107 8.67033 7.43196C9.52588 7.09264 11.556 7.17094 12.5015 7.17094C13.4469 7.17094 15.4799 7.09554 16.3326 7.43196C16.901 7.65817 17.3389 8.0961 17.568 8.66743C17.9074 9.52298 17.8291 11.5531 17.8291 12.4985C17.8291 13.444 17.9074 15.477 17.568 16.3297Z" fill="white" />
                                    </svg>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => setInstagramHovered(true)} onMouseLeave={() => setInstagramHovered(false)}>
                                        <circle cx="12" cy="12" r="12" fill={instagramHovered ? '#FF931E' : '#606060'}/>
                                        <path d="M18.7075 8.54021C18.5464 7.93395 18.072 7.45648 17.4697 7.29444C16.3779 7 12 7 12 7C12 7 7.6221 7 6.53029 7.29444C5.92795 7.4565 5.45356 7.93395 5.29254 8.54021C5 9.6391 5 11.9318 5 11.9318C5 11.9318 5 14.2245 5.29254 15.3234C5.45356 15.9297 5.92795 16.3873 6.53029 16.5493C7.6221 16.8437 12 16.8437 12 16.8437C12 16.8437 16.3779 16.8437 17.4697 16.5493C18.072 16.3873 18.5464 15.9297 18.7075 15.3234C19 14.2245 19 11.9318 19 11.9318C19 11.9318 19 9.6391 18.7075 8.54021ZM10.5682 14.0134V9.8502L14.2272 11.9319L10.5682 14.0134Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <ProductDetails />
                </div>
                <div className="block md:hidden">
                    <MobProductDetails/>
                </div>
            </div>
            <div className="w-full md:w-[20%]">
                <DeliveryReturns />
            </div>
        </div>
        <div className="w-full md:w-[80%] bg-white py-2 mx-2 md:mx-16 mb-4 rounded-md">
            <SimilarItems />
        </div>
    </div>
  )
}

export default ProductComponent
