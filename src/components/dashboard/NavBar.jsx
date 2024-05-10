import React, { memo } from "react";
import SearchIcon from '../../assets/pngs/search.png'
import UsFlag from '../../assets/pngs/us-flag.png'
import Cloud from '../../assets/pngs/cloud.png'
import ArrowDown from '../../assets/pngs/arrow-down.png'
import Notification from '../../assets/pngs/notification.png'
import Settings from '../../assets/pngs/settings.png'
import ProfilePic from '../../assets/pngs/profile-pic.png'


function NavBar({ title }) {


  return (
    <nav className="h-[10%] items-center px-[3%] flex justify-between bg-white">
      <h1 className="font-bold text-gray-600 text-[25px]">{title}</h1>

      <div className="w-[40%] h-[60%] flex items-center pl-[10px] gap-[10px] bg-gray-200 rounded-[16px] overflow-hidden border-[1.5px]">
        <img src={SearchIcon} className="h-[20px]" />

      <input
        onChange={() => {}}
        name="password"
        type="password"
        required
        className="w-full h-[80%] placeholder:text-small text-small bg-gray-200 focus:outline-none text-gray-700 "
        placeholder="Search here..."
      />
      </div>

      <div className="flex h-full gap-[10px] items-center">
        <div className="flex items-center cursor-pointer group mr-[10px] gap-[8px]">
            <img src={UsFlag} />
            <p className="font-semibold text-gray-600">Eng</p>
            <img className="h-[5px]  group-hover:scale-110 duration-500" src={ArrowDown} />
         </div>
      
        <ul className="flex h-full items-center gap-[20px]">
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative">
            <div className="h-[8px] top-[20%] right-0 w-[8px] rounded-full absolute bg-lime-400"/>
            <img className="h-[40%]" src={Cloud}/>
          </li>
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative">
            <div className="h-[8px] top-[20%] right-0 w-[8px] rounded-full absolute bg-lime-400"/>
            <img className="h-[40%]" src={Notification}/>
          </li>
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative"> 
            <img className="h-[40%]" src={Settings}/>
          </li>
          <li className="h-full flex items-center cursor-pointer hover:scale-105 duration-500 relative"> 
            <img className="h-[50%]" src={ProfilePic}/>
          </li>
        </ul>
       
      </div>
    </nav>
  );
}

export default memo(NavBar);
