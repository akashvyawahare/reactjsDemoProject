import React, { useState } from "react";
import { useState } from "react";
import Accordian from "./Accordian";
const Mens = () => {
    const[open, setOpen] = useState(null);

    return(
        <div className="max-w-6xl mx-auto">
            <h1 className="font-bold text-xl mt-3" >Filter Options</h1>
            {
                ['Gender', 'Brand', 'Age', 'Type'].map((title, index)=>( 
            // This is  a controlled component, since it is being controlled by the parent component
                <Accordian key={index} title = {title} open = {index === open ? true : false} setOpen={()=>setOpen(index)}  />
            ))
            }
            
            
        </div>  
    )
}
export default Mens;