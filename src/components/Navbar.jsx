import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [btnName, setBtnName] = useState("Dark");
  
  return (
    <div className="flex justify-between px-10 py-5 shadow-md" >
      <h1 className="font-bold text-2xl ">AJIO</h1>
      <ul className="flex justify-between w-[40%]">
        <li><Link to="/mens">MEN</Link></li>
        <li><Link to="/womens">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <li><Link to={"/about"}>ABOUT</Link></li>
        <button className="bg-purple-700 px-6 py-2  text-white" onClick={()=>{btnName == "Dark"? setBtnName("Light"): setBtnName("Dark")}}>{btnName}</button>
      </ul>
    </div>
  );
};

export default Navbar;