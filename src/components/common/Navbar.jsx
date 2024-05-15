import { useState } from "react";
import { Link } from 'react-router-dom'
import { ClickAwayListener } from "@mui/base/ClickAwayListener"
import useMediaQuery from '@mui/material/useMediaQuery';
import DropdownIcon from "../../assets/DropdownIcon";
import logo from "../../assets/images/avabot.png"
import logoTxt from "../../assets/images/avabot-txt.png"
import CloseIcon from "../../assets/CloseIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isMediumScreen = useMediaQuery('(max-width: 1024px)')

  return (
    <div>
        {isMediumScreen ? (
          <div className="fixed top-0 w-full bg-white md:px-12 px-4 py-2 md:py-3 shadow-md flex items-center gap-6 min-h-[10vh] z-20">
              <ClickAwayListener onClickAway={()=>setOpen(false)}>
                <div>
                  <div onClick={() => setOpen(!open)}><DropdownIcon /></div>
                  <div className={`${open ? "w-[250px]" : "w-0" } h-[100%] fixed z-40 top-0 left-0 bg-[#F7FDF7] duration-500`}>
                    <div className="ml-10 mt-10 flex flex-col items-start justify-center gap-8 overflow-hidden">
                      <Link to="/login">
                        <p className="text-[#0797BA] text-xl font-semibold cursor-pointer z-30" onClick={() => setOpen(false)}>Login</p>
                      </Link>
                      <Link to="/register">
                        <button className="py-1 px-6 bg-gradient text-white text-xl font-semibold rounded-lg shadow-md cursor-pointer z-30" onClick={() => setOpen(false)} >Register</button>
                      </Link>
                    </div>
                    <div className={`${open ? "block" : "hidden"} absolute top-2 -right-8 p-2 z-[70]`} onClick={() => setOpen(false)}>
                      <CloseIcon />
                    </div>
                  </div>
                </div>
              </ClickAwayListener>
              <Link to="/">
                <div className="flex items-center md:gap-4 gap-2 z-30 cursor-pointer">
                  <img src={logo} alt="logo" className="md:w-12 md:h-12 w-8 h-8"/>
                  <img src={logoTxt}  alt="Avabot" className="md:h-6 md:w-28 h-4 w-[70px]" />
                </div>
              </Link>
          </div>
          ) :  (
            <div className="fixed top-0 w-full bg-white md:px-12 px-4 py-2 md:py-3 shadow-md flex justify-between items-center min-h-[10vh] z-20">
              <Link to="/">
                <div className="flex items-center md:gap-4 gap-2 z-30 cursor-pointer">
                  <img src={logo} alt="logo" className="md:w-12 md:h-12 w-8 h-8"/>
                  <img src={logoTxt}  alt="Avabot" className="md:h-6 md:w-28 h-4 w-[70px]" />
                </div>
              </Link>
              <div className="flex items-center gap-8">
                <Link to="/login">  
                  <p className="text-[#0797BA] text-xl font-semibold cursor-pointer z-30" >Login</p>
                </Link>
                <Link to="/register">
                  <button className="py-1 px-6 bg-gradient text-white text-xl font-semibold rounded-lg shadow-md cursor-pointer z-30">Register</button>
                </Link>
              </div>
            </div>
          )}
    </div>
  )
}

export default Navbar