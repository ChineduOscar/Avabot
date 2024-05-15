import { useEffect, useState } from "react"

function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState()
    console.log(isClicked)
    useEffect(()=>{
        const handleClickOutside = (event) => {
            console.log(ref.current)
            if(ref.current && !ref.current.contains(event.target)){
                setIsClicked(true)
            } else{
                setIsClicked(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])  
}

export default OutsideClick
