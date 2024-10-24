import React, { memo } from "react";
import SearchIcon from '../../../assets/pngs/search.png'
import UsFlag from '../../../assets/pngs/us-flag.png'
import ArrowDown from '../../../assets/pngs/arrow-down.png'
import ProfilePic from '../../../assets/pngs/profile-pic.png'
import { FaCartShopping, FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp, IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


function NavBar({ title }) {
  const navigate = useNavigate()

  const navigateToCart = () => navigate('/dashboard/cart')
  const navigateToInstantChat = () => navigate('/dashboard/instant_chat')


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
            <div className="h-[5px] top-[30%] right-0 w-[5px] rounded-full absolute bg-lime-400"/>
            <IoChatbubbleEllipsesSharp onClick={navigateToInstantChat} className="text-xl text-gray-400"/>
          </li>
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative">
            <div className="h-[5px] top-[30%] right-0 w-[5px]  rounded-full absolute bg-lime-400"/>
            <FaBell className="text-xl text-gray-400"/>
          </li>
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative">
            <div className="h-[5px] top-[30%] right-0 w-[5px]  rounded-full absolute bg-lime-400"/>
            <FaCartShopping onClick={navigateToCart} className="text-lg text-gray-400"/>
          </li>
          <li className="h-full flex items-center hover:scale-105 duration-500 cursor-pointer relative"> 
          <IoSettings className="text-lg text-gray-400"/>
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
