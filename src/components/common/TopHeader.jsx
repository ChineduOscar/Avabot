const TopHeader = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-2 md:p-4 bg-white">
      <select className="text-sm md:text-base w-[60%] md:w-[50%] lg:w-[20%] py-1 md:py-2 px-3 outline-none bg-white border-[#FF931E] border-[1px] text-[#FF931E] rounded-md no-number-arrows cursor-pointer">
        <option>
            <p className="cursor-pointer">Marketplace</p>
        </option>
        <option>
            <p className="cursor-pointer">Housing Space</p>
        </option>
        <option>
            <p className="cursor-pointer">Resale Property</p>
        </option>
      </select>
      <p className="text-[#A18B6C] text-sm md:text-base">Sell on Chollo</p>
    </div>
  )
}

export default TopHeader
