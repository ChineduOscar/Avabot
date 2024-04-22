import { useState } from "react"
import { Link } from 'react-router-dom'
import MenuIcon from "../../assets/MenuIcon"
import chollo from "../../assets/images/chollo.svg"
import SearchIcon from "../../assets/SearchIcon"
import UserIcon from "../../assets/UserIcon"
import HelpIcon from "../../assets/HelpIcon"
import CartIcon from "../../assets/CartIcon"
import Dropdown from "../../assets/Dropdown"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MobileSearch from "./MobileSearch"

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = (newOpen) => () => {
    setSideBarOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Phones & Tablets', 'Computing', 'Fashion', 'Gaming', 'Groceries', 'Mobile Accessories', 'Home & Kitchen', 'Electronics'].map((text) => (
          <ListItem key={text} className="hover:bg-[#FF931E] hover:text-white" disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <section>
      <header className="flex items-center justify-between gap-12 w-full px-2 md:px-6 lg:px-16 py-2  z-50 bg-[#373737]">
        <div className="flex justify-center items-center gap-0 md:gap-8">
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>
          <Drawer open={sideBarOpen} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
          <Link to="/">
            <div className="flex justify-center items-center">
              <img src={chollo} alt="chollo" className="w-[45px] h-[26px] md:w-[61px] md:h-[35px]"/>
              <p className="text-white text-base md:text-[27px]">Chollo</p>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center w-[40%]">
          <input className="text-[#67563F] text-sm bg-white rounded-l-md p-2 w-full outline-0" type="text" placeholder="Search products, brands & Categories..." />
          <button className="bg-[#FF931E] p-2 rounded-r-md"><SearchIcon /></button>
        </div>
        <div className="text-white flex items-center justify-center gap-1 md:gap-6">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className="flex justify-center items-center gap-2"
          >
            <UserIcon />
            <p className="hidden md:block font-bold text-white">Account</p>
            <span className="hidden md:inline"><Dropdown /></span>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            
          >
            <MenuItem onClick={handleClose}>
              <Link to="/login">
                <button className="bg-[#FF931E] rounded-md text-white px-4 py-2 text-sm md:text-base">SIGN IN</button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <p className="text-sm md:text-base">My Account</p>
            </MenuItem>
            <MenuItem onClick={handleClose}><p className="text-sm md:text-base">Orders</p>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <p className="text-sm md:text-base">Saved Items</p>
            </MenuItem>
          </Menu>
          <div className="hidden md:flex justify-center items-center gap-2 cursor-pointer">
            <HelpIcon />
            <p className="font-bold">Help</p>
            <Dropdown />
          </div>
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <CartIcon />
            <p className="hidden md:block font-bold">Cart</p>
          </div>
        </div>
      </header>
      <div className='block md:hidden px-1'>
        <MobileSearch />
      </div>
      <div className="hidden md:block text-center text-sm md:text-base overflow-hidden bg-[#1E1E1E] p-2">
        <p className="text-white text-sm scroll-text whitespace-nowrap">Welcome to <span className="text-[#FF931E] font-bold">Chollo!</span> We bring the market <span className="text-[#FF931E]">closer</span> to you...<span className="hidden md:inline">Enjoy <span className="text-[#FF931E]">FREE</span> shipping on a product per week</span></p>
      </div>
    </section>
  )
}

export default Header
