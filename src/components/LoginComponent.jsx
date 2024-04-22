import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import chollo from "../assets/images/chollo.svg"
import BackArrow from "../assets/BackArrow"

const LoginComponent = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-login px-2 md:px-8 py-4 h-screen md:h-full'>
        <div className='cursor-pointer' onClick={()=>navigate(-1)}>
            <BackArrow />
        </div>
        <div className='flex flex-col justify-center items-center pb-4'>
            <Link to="/" className="flex justify-center items-center gap-2 mb-2 md:mb-4">
                <img src={chollo} alt="chollo" className="w-[61px] h-[35px]"/>
                <p className="text-[#373737] font-bold text-2xl">Chollo</p>
            </Link>
            <form className='md:bg-[#FFFFFF80] p-2 md:p-6 rounded-md md:shadow-lg w-full md:w-[420px]'>
                <p className='font-bold text-3xl text-[#FF931E] text-center'>Login</p>
                <div className='flex flex-col gap-2 my-6 md:my-4'>
                    <label className="text-[#373737] text-sm md:text-[15px]">Email Address OR Phone Number</label>
                    <input type="text" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#FF931E]' placeholder='Enter Email Address OR Phone Number' />
                </div>
                <div className='flex flex-col gap-2 my-6 md:my-4 text-sm md:text-[15px]'>
                    <label className="text-[#373737]">Password</label>
                    <input type="password" className='outline-0 text-[#8F8F8F] p-2 border rounded-md border-[#FF931E]' placeholder='Enter Password' />
                </div>
                <button className='text-white bg-[#FF931E] rounded-md w-full py-2 my-6 md:my-4'>LOGIN</button>
                <div>
                    <p className='text-[#373737] my-2 text-center'>Already have an Account?</p>
                    <Link to="/register">
                        <button className='text-[#373737] font-bold rounded-md w-full py-2 border border-[#373737]'>CREATE AN ACCOUNT</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginComponent
