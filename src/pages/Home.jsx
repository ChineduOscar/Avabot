import { Link } from 'react-router-dom'
import Layout from "../layout/Layout"
import robot from "../assets/images/robot.png"

const Home = () => {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
          <img src={robot} alt="robot" className="mt-10 md:mt-14 w-[300px] md:w-[400px] h-[400px] md:h-[500px] z-10"/>
          <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4 md:gap-10 w-full md:w-[30%] z-10 px-8 md:px-0">
            <p className="text-3xl md:text-6xl text-[#0797BA] font-semibold">What is <br className="hidden md:block"/>Avabot <span className="text-[#01F123]">?</span></p>
            <p className="text-[#676969] font-medium"><span className="font-semibold">Avabot</span> is an exceptional ecommerce platform which gives users across the globe a seamless, more interactive and stress-free online shopping experience.</p>
            <Link to="/register">
              <button className="py-2 px-4 bg-gradient text-white text-2xl font-semibold rounded-lg shadow-md">Let’s Go Shopping</button>
            </Link>
          </div>
        </div>
        <div className="z-10">
          <div className="w-[480px] h-[480px] bg-[#A1EBFD] rounded-full absolute left-[25%] right-[25%] -bottom-[75%]"></div>
          <div className="w-[100px] h-[100px] bg-[#A1EBFD] rounded-full absolute left-[23%] top-[18%]"></div>
          <div className="w-[200px] h-[200px] bg-[#CDFFD4] rounded-full absolute left-[2%] md:-left-[10%] top-[35%]"></div>
          <div className="w-[100px] h-[100px] bg-[#CDFFD4] rounded-full absolute -right-[5%] top-[35%]"></div>
        </div>
      </div>
    </Layout>
  )
}

export default Home