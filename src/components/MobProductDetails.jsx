import { useState } from "react";
import Dropdown from "../assets/Dropdown"

const data = [
    { id: 1, title: "Overview" },
    { id: 2, title: "Description"},
    { id: 3, title: "Warranty"},
    { id: 4, title: "Reviews" },
];

const MobProductDetails = () => {
    const [itemId, setItemId] = useState(null)
    const changeContent = (id) => {
        setItemId(prevItem => (
            prevItem === id ? null : id
        ))
    }

  return (
    <div className="bg-white rounded-md my-2">
        <div>
            <div className="text-[#373737] p-2">
                {data?.map((item)=>(
                    <div key={item?.id} className="cursor-pointer border-b-[1px] border-[#373737] pb-2 mb-2"  onClick={()=>changeContent(item?.id)}>
                        <div className="flex justify-between items-center">
                            <p  className="font-bold">{item?.title}</p>
                            <span className={item.id === itemId ? '-rotate-180 duration-200' : ''}><Dropdown color='black'/></span>
                        </div>
                        {item?.id === itemId && itemId === 1 && (
                            <div className="text-sm mt-2">
                                <p>what&apos;s in the box</p>
                                <ul className="list-disc pl-8">
                                    <li>iPhone 15 Pro,Blue Titanium</li>
                                    <li>Type C charging cable</li>
                                </ul>
                            </div>
                        )}
                        {item?.id === itemId && itemId === 2 && (
                            <div className="text-sm mt-2">
                                <p>Great phone with good camera like no other, you will rally love the phone if you buy it.</p>
                            </div>
                        )}
                        {item?.id === itemId && itemId === 3 && (
                            <div className="text-sm mt-2">
                                <p>This phone is on a two year warranty</p>
                            </div>
                        )}
                        {item?.id === itemId && itemId === 4 && (
                            <div className="text-sm mt-2">
                                <p>I rate it five star</p>
                            </div>
                        )}
                    </div>
                ))}
                
              
               
                
            </div>
        </div>
    </div>
  )
}

export default MobProductDetails
