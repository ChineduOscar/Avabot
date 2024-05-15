
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/avabot.png"
import logoTxt from "../assets/images/avabot-txt.png"
import BackArrow from "../assets/BackArrow"
import dummyUser from "../assets/images/dummy.png"
import robot from "../assets/images/blur-robot.png"

const LoginComponent = () => {
    const navigate = useNavigate()
  return (
    <div className='relative bg-login px-2 md:px-8 py-4 h-screen md:h-full'>
        <div className='cursor-pointer' onClick={()=>navigate(-1)}>
            <BackArrow />
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
            <Link to="/">
                <div className="flex items-center gap-2 z-30 cursor-pointer mb-2">
                  <img src={logo} alt="logo" className="md:w-12 md:h-12 w-8 h-8"/>
                  <img src={logoTxt}  alt="Avabot" className="md:h-6 md:w-28 h-4 w-[70px]" />
                </div>
            </Link>
            <form className='md:bg-[#FFFFFF80] p-2 md:px-6 md:py-4 rounded-md md:shadow-lg w-full md:w-[420px]'>
                <p className='font-bold text-3xl text-[#0797BA] text-center'>Login</p>
                <div className='flex items-center justify-center'>
                    <img src={dummyUser} alt="logo" className="w-12 h-12 mt-4"/>
                </div>
                <div className='flex flex-col gap-2 my-6 md:my-2'>
                    <label className="text-[#0797BA] text-sm md:text-[15px]">Email Address OR Phone Number</label>
                    <input type="text" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#01F123]' placeholder='Enter Email Address OR Phone Number' />
                </div>
                <div className='flex flex-col gap-2 my-6 md:my-2 text-sm md:text-[15px]'>
                    <label className="text-[#0797BA] text-sm md:text-[15px]">Password</label>
                    <input type="password" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#8F8F8F]' placeholder='Enter Password' />
                </div>
                <button className='text-white bg-gradient rounded-md w-full py-2 my-6 md:my-2'>LOGIN</button>
                <div>
                    <p className='text-[#8F8F8F] my-2 text-center'>Already have an Account?</p>
                    <Link to="/register">
                        <button className='text-[#0797BA] font-bold rounded-md w-full py-2 border border-[#0797BA]'>CREATE AN ACCOUNT</button>
                    </Link>
                </div>
            </form>
        </div>
        <div className='grid md:grid-cols-3 absolute top-[10%] left-[18%]'>
            <img src={robot} alt="robot" className='hidden md:block' />
            <img src={robot} alt="robot" />
            <img src={robot} alt="robot" className='hidden md:block' />
        </div>
    </div>
  )
}

export default LoginComponent

