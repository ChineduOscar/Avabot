import SearchIcon from "../../assets/SearchIcon"

const MobileSearch = () => {
  return (
    <div className="flex items-center justify-center w-full py-1 px-2 bg-white">
    <input className="text-[#67563F] text-sm bg-[#FFEFDE] rounded-l-md p-2 w-full outline-0" type="text" placeholder="Search products, brands & Categories..." />
    <button className="bg-[#FFEFDE] p-2 rounded-r-md"><SearchIcon color='black' /></button>
  </div>
  )
}

export default MobileSearch
