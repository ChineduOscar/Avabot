const DeliveryReturns = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div>
            <p className="text-[#FF931E] text-xs font-bold mb-2">DELIVERY & RETURNS</p>
            <hr />
        </div>
        <div className="flex flex-col gap-2 my-2">
            <p className="text-[#FF931E]">Choose Location</p>
            <select className="text-sm md:text-base w-full p-1 outline-none bg-white border-[#373737] border-[1px] text-[#373737] rounded-md no-number-arrows cursor-pointer">
                <option>
                    <p className="cursor-pointer">Hilltop</p>
                </option>
                <option>
                    <p className="cursor-pointer">Odenigwe</p>
                </option>
                <option>
                    <p className="cursor-pointer">Odim</p>
                </option>
            </select>
            <select className="text-sm md:text-base w-full p-1 outline-none bg-white border-[#373737] border-[1px] text-[#373737] rounded-md no-number-arrows cursor-pointer">
                <option>
                    <p className="cursor-pointer">Transformer Junction</p>
                </option>
                <option>
                    <p className="cursor-pointer">Ankis</p>
                </option>
                <option>
                    <p className="cursor-pointer">Casablanca</p>
                </option>
            </select>
        </div>
        <div>
            <div className="my-1">
                <p className="text-xs text-[#FF931E] mb-1">Delivery</p>
                <p className="text-[#606060] text-[10px]">Delivery Fee = <span>₦ 650</span></p>
                <p className="text-[#606060] text-[10px]">Ready for delivery between 29 March & 31 March when you order within next 9hrs 50mins</p>
            </div>
            <div className="my-1">
                <p className="text-xs text-[#FF931E] mb-1">Return Policy</p>
                <p className="text-[#606060] text-[10px]">Ready for delivery between 29 March & 31 March when you order within next 9hrs 50mins</p>
            </div>
            <div className="my-1">
                <p className="text-xs text-[#FF931E] mb-1">Warranty</p>
                <p className="text-[#606060] text-[10px]">Ready for delivery between 29 March & 31 March when you order within next 9hrs 50mins</p>
            </div>
        </div>
    </div>
  )
}

export default DeliveryReturns
