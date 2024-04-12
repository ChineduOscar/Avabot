import sendIcon from "../../assets/icons/sendIcon.png"
import chollo from "../../assets/images/chollo.svg"
const Subscription = () => {
  return (
    <div className="bg-[#1E1E1E] flex justify-between px-16 py-6">
        <div className="flex w-[25%]">
            <img src={chollo} alt="chollo" />
            <p className="text-white text-[27px]">Chollo</p>
        </div>
        <div className="w-[40%]">
            <p className="text-white font-bold">NEW TO CHOLLO?</p>
            <p className="text-white text-[14px]">Subscribe to our newsletter to get updates on our latest offers!</p>
        </div>
        <div className="flex items-center justify-center w-[35%]">
          <input className="text-[#67563F] text-sm bg-white rounded-l-md p-2 outline-0 w-full" type="text" placeholder="Email Address" />
          <button className="bg-[#FF931E] p-2 rounded-r-md"><img src={sendIcon} className="w-[20px] h-[20px]"/></button>
        </div>
    </div>
  )
}

export default Subscription
