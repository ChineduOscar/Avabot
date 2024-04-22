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

const categories = [
    { id: 1, image: phone, title: "Phones & Tablets" },
    { id: 2, image: computing, title: "Computing Deals" },
    { id: 3, image: fashion, title: "Fashion" },
    { id: 4, image: gaming, title: "Gaming" },
    { id: 5, image: grocery, title: "Groceries" },
    { id: 6, image: accessories, title: "Mobile Accessories" },
    { id: 7, image: electronics, title: "Electronics" },
    { id: 8, image: kitchen, title: "Home & Kitchen" }
  ];

const data = [
    { id: 1, image: shipping, title: "Free Shipping", description: "1 every week" },
    { id: 2, image: payment, title: "Payment Method", description: "Online System" },
    { id: 3, image: online, title: "Online Support", description: "Every 24 hrs" },
    { id: 4, image: money, title: "Money Guarantee", description: "7 days back" },
    { id: 5, image: safe, title: "100% Safe", description: "Secure" }
  ];

const HomeComponent = () => {
    const [productHovered, setProductHovered] = useState(null);
  return (
    <div className="mx-2 md:mx-16">
        <div className="my-2 md:my-4">
          <HomeSlide />
        </div>
        <div className="flex items-center justify-between my-2 md:my-6 gap-4">
            {data?.map(item => (
            <div key={item?.id} className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-2">
                <img src={item?.image} alt={item?.title} className="w-8 h-7 md:w-10 md:h-10" />
                <div className="flex flex-col justify-center items-start gap-1">
                <p className="font-medium text-[7px] md:text-base text-[#0F172A]">{item?.title}</p>
                <p className="text-[#0F172A] text-[7px] md:text-sm">{item?.description}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="bg-[#F0F0F0] py-4 md:py-6 px-2 md:px-12 flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-[#373737] text-[18px] md:text-xl">SHOP BY CATEGORIES</p>
                <div className="bg-[#FF931E] w-[160px] h-[2px]"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 md:gap-8">
                {categories?.map(item => (
                    <div key={item?.id} className="flex items-center">
                        <div className="relative rounded-md shadow-md cursor-pointer">
                            <img
                                src={item?.image}
                                alt={item?.title}
                                className={`rounded-md w-[150px] h-[170px] md:w-[200px] md:h-[230px] ${productHovered === item?.id && 'opacity-65' } bg-slate-800`}
                                onMouseEnter={() => setProductHovered(item?.id)}
                                onMouseLeave={() => setProductHovered(null)}
                            />
                            <p className={`text-[11px] md:text-base absolute bottom-4 left-4 font-bold py-2 px-2 md:px-4 ${
                                productHovered === item?.id ? 'text-[#A15604] bg-white' : 'text-white bg-[#373737]'
                                }`}>
                                {item?.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <HomeProductSlide />
        <div className="my-4 md:my-10">
            <p className="font-bold text-black text-base md:text-[18px] mb-2">Chollo Online Shopping in Nigeria - Best Shopping Site</p>
            <p className="text-sm md:text-base text-[#8D8989]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
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
