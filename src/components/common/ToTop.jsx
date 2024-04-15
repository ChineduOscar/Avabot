import { useState } from "react"
const ToTop = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible =() =>{
        const scrolled = document.documentElement.scrollTop
        if(scrolled > 30){
            setVisible(true)
        }else if(scrolled <= 30){
            setVisible(false)
        }
    }
    const scrollToTop =() =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    window.addEventListener("scroll", toggleVisible)

  return (
    <div className={`${visible? "block" : "hidden"} px-3 py-4 bg-white hover:bg-[#FF931E] rounded-[50%] cursor-pointer border-[1px] border-[#FF931E] shadow-2xl z-10`} onClick={scrollToTop}>
        <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.55812 0.0929604C8.90612 0.0943956 9.23934 0.230803 9.48468 0.472261L16.056 6.90109C16.2714 7.14706 16.3839 7.46346 16.3711 7.78705C16.3583 8.11065 16.2212 8.41761 15.9871 8.6466C15.7531 8.87559 15.4393 9.00974 15.1085 9.02223C14.7778 9.03473 14.4543 8.92466 14.2029 8.71402L8.55812 3.19809L2.91331 8.71402C2.66189 8.92466 2.33848 9.03473 2.00771 9.02223C1.67694 9.00974 1.36317 8.87559 1.12911 8.6466C0.895041 8.41761 0.757919 8.11065 0.745144 7.78705C0.732368 7.46346 0.844877 7.14706 1.06019 6.90109L7.63156 0.472261C7.8769 0.230803 8.21011 0.0943956 8.55812 0.0929604Z" fill="#373737"/>
        </svg>
    </div>
  )
}

export default ToTop
