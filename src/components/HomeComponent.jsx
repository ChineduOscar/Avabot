import { useState } from "react"
import HomeSlide from "./HomeSlide"
import HomeProductSlide from "./HomeProductSlide"
import money from "../assets/icons/money.png"
import online from "../assets/icons/online.png"
import payment from "../assets/icons/payment.png"
import shipping from "../assets/icons/shipping.png"
import safe from "../assets/icons/safe.png"
import phone from "../assets/images/phone.png"
import fashion from "../assets/images/fashion.png"
import computing from "../assets/images/computing.png"
import gaming from "../assets/images/gaming.png"
import grocery from "../assets/images/grocery.png"
import accessories from "../assets/images/accessories.png"
import electronics from "../assets/images/electronics.png"
import kitchen from "../assets/images/kitchen.png"

const HomeComponent = () => {
    const [productHovered, setProductHovered] = useState(false)
  return (
    <div className="mx-2 md:mx-16">
        <div className="my-2 md:my-4">
          <HomeSlide />
        </div>
        <div className="flex items-center justify-between my-6">
            <div className="flex justify-center items-center gap-2">
                <img src={shipping} alt="Free Shipping" />
                    <div className="flex flex-col justify-center items-start gap-1">
                        <p className="font-medium text-[#0F172A]">Free Shipping</p>
                        <p className="text-[#0F172A] text-sm">1 every week</p>
                    </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <img src={payment} alt="Free Shipping" />
                    <div className="flex flex-col justify-center items-start gap-1">
                        <p className="font-medium text-[#0F172A]">Payment Method</p>
                        <p className="text-[#0F172A] text-sm">Online System</p>
                    </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <img src={online} alt="Free Shipping" />
                    <div className="flex flex-col justify-center items-start gap-1">
                        <p className="font-medium text-[#0F172A]">Online Support</p>
                        <p className="text-[#0F172A] text-sm">Every 24 hrs</p>
                    </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <img src={money} alt="Free Shipping" />
                    <div className="flex flex-col justify-center items-start gap-1">
                        <p className="font-medium text-[#0F172A]">Money Guarantee</p>
                        <p className="text-[#0F172A] text-sm">7 days back</p>
                    </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <img src={safe} alt="Free Shipping" />
                    <div className="flex flex-col justify-center items-start gap-1">
                        <p className="font-medium text-[#0F172A]">100% Safe</p>
                        <p className="text-[#0F172A] text-sm">Secure</p>
                    </div>
            </div>
        </div>
        <div className="bg-[#F0F0F0] py-6 px-12 flex flex-col gap-8">
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-[#373737] text-xl">SHOP BY CATEGORIES</p>
                <div className="bg-[#FF931E] w-[160px] h-[2px]"></div>
            </div>
            <div className="grid grid-cols-4 place-items-center gap-8">         
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer">
                        <img src={phone} alt="" className="w-[200px] h-[230px] hover:opacity-65 bg-slate-800" onMouseEnter={() => setProductHovered(true)} onMouseLeave={() => setProductHovered(false)} />
                        <p className={`absolute bottom-4 left-4 font-bold py-2 px-4 ${productHovered ? 'text-[#A15604]' : 'text-white'} ${productHovered ? 'bg-white' : 'bg-[#373737]'}`}>Phones & Tablets</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={computing} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Computing Deals</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={fashion} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Fashion</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={gaming} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Gaming</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={grocery} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Groceries</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={accessories} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Mobile Accessories</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={electronics} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Electronics</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative shadow-md cursor-pointer text-white">
                        <img src={kitchen} alt="" className="w-[200px] h-[230px]" />
                        <p className="absolute bottom-4 left-4 font-bold py-2 px-4 bg-[#373737]">Home & Kitchen</p>
                    </div>
                </div>
            </div>
        </div>
        <HomeProductSlide />
        <div className="my-10">
            <p className="font-bold text-black text-[18px] mb-2">Chollo Online Shopping in Nigeria - Best Shopping Site</p>
            <p className="text-[#8D8989]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
  )
}

export default HomeComponent
