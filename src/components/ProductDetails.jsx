import { useState } from "react"

const data = [
    { id: 1, title: "Overview" },
    { id: 2, title: "Description"},
    { id: 3, title: "Warranty"},
    { id: 4, title: "Reviews" },
  ];
const ProductDetails = () => {
    const [itemId, setItemId] = useState(1)
    const changeContent = (id) => {
        setItemId(id)
    }

  return (
    <div className="bg-white rounded-md px-8 py-4 my-4">
      <div className="flex items-start gap-4">
        {data?.map((item)=>(
          <div key={item?.id} className="flex flex-col items-center cursor-pointer" onClick={() => changeContent(item?.id)}>
            <p className="text-black font-bold mb-1">{item?.title}</p>
            {item?.id === itemId && <div className="h-[2px] w-14 bg-[#FF931E]"></div>}
          </div>
        ))}
      </div>
      {itemId === 1 && <div className="mx-4 mt-4">
          <p>what&apos;s in the box</p>
          <ul className="list-disc pl-8">
              <li>iPhone 15 Pro,Blue Titanium</li>
              <li>Type C charging cable</li>
          </ul>
      </div>}
      {itemId === 2 && <div className="mx-4 mt-4">
          <p>Great phone with good camera like no other, you will rally love the phone if you buy it.</p>
      </div>}
      {itemId === 3 && <div className="mx-4 mt-4">
          <p>This phone is on a two year warranty</p>
      </div>}
      {itemId === 4 && <div className="mx-4 mt-4">
          <p>I rate it five star</p>
      </div>}
    </div>
  )
}

export default ProductDetails
