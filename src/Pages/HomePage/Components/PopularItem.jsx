import { useEffect, useState } from "react"
import SectionTitle from "../../../SharedComponents/SectionTitle/SectionTitle"
import ItemViewer from "../../../SharedComponents/ItemViewer/ItemViewer";


const PopularItem = () => {
    const [manus,setManus]=useState([]);
    useEffect(()=>{
        fetch('manu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularData= data?.filter(item=>item.category==="popular")
            setManus(popularData)
        }
            
        )
    },[])
  return (
    <div className="space-y-5 mb-4">
        <SectionTitle subheading="Check it out" heading='from our manu'/>
        <div className=" grid grid-cols-2 gap-5">
            {
                manus.map(manu=><ItemViewer key={manu._id} manu={manu}/>
                )
            }
        </div>
    </div>
  )
}

export default PopularItem