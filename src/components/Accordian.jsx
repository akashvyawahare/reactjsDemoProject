import React, { useState } from "react";
import Listitems from "./Listitems";
const Accordian = ({title, open, setOpen}) => {
    


    return(
        <div className="mt-4 w-55 my-1 shadow-md p-2 bg-gray-100 border-gray-200">
            <div className="flex justify-between ">

            <h1>{title}</h1>
            <button onClick={()=>{setOpen()}} className="bg-black text-white px-2 rounded-md py-1 ">show</button>
            </div>
            {
            
                open && <Listitems/>
            }
        </div>
    )
}

export default Accordian;