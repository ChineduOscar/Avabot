import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/avabot.png"
import logoTxt from "../assets/images/avabot-txt.png"
import BackArrow from "../assets/BackArrow"
import robot from "../assets/images/blur-robot.png"

const RegisterComponent = () => {
    const navigate = useNavigate()
  return (
    <div className='relative bg-login p-2 md:px-8 py-4'>
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
            <form className='md:bg-[#FFFFFF80] p-2 md:p-6 rounded-md md:shadow-lg w-full md:w-[420px]'>
                <p className='font-bold text-3xl text-[#0797BA] text-center'>Create An Account</p>
                <div className='flex flex-col gap-2 my-2'>
                    <label className="text-[#0797BA]">First Name</label>
                    <input type="text" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#01F123]' placeholder='Enter First Name' />
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label className="text-[#0797BA]">Last Name</label>
                    <input type="text" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#8F8F8F]' placeholder='Enter Last Name' />
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label className="text-[#0797BA]">Email Address</label>
                    <input type="email" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#8F8F8F]' placeholder='Enter Email Address' />
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label className="text-[#0797BA]">Phone Number</label>
                    <input type="number" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#8F8F8F]' placeholder='Enter Phone Number' />
                </div>
                <div className='flex flex-col gap-2 my-2'>
                    <label className="text-[#0797BA]">Password</label>
                    <input type="password" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#8F8F8F]' placeholder='Enter Password' />
                </div>
                <button className='text-white bg-gradient rounded-md w-full py-2 my-4'>Create An Account</button>
                <p className='text-[#0797BA] text-sm my-2 text-center'>By signing up you accept our <span className='font-bold'>terms and conditions & privacy policy</span></p>
                <div>
                    <p className='text-[#8F8F8F] my-2 text-center'>Already have an Account?</p>
                    <Link to="/login">
                        <button className='text-[#0797BA] font-bold rounded-md w-full py-2 border border-[#0797BA]'>LOGIN</button>
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

export default RegisterComponent
