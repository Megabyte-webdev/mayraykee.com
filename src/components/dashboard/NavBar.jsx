<<<<<<< HEAD

import React, { useState, memo } from "react";
import SearchIcon from '../../assets/pngs/search.png';
import UsFlag from '../../assets/pngs/us-flag.png';
import Cloud from '../../assets/pngs/cloud.png';
import ArrowDown from '../../assets/pngs/arrow-down.png';
import Notification from '../../assets/pngs/notification.png';
import Settings from '../../assets/pngs/settings.png';
import ProfilePic from '../../assets/pngs/profile-pic.png';
import { FaCartShopping, FaBell } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NavBar({ title, menu, setMenu }) {
  const navigate = useNavigate();

  const navigateToCart = () => navigate('/dashboard/cart');
  const navigateToInstantChat = () => navigate('/dashboard/instant_chat');
  
  return (
    <nav className="p-2 flex items-center justify-between bg-white shadow-md md:shadow-none">
      {/* Title */}
      <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="cursor-pointer block mr-2 md:hidden transition-all ease-in-out duration-300"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
      <h1 className="font-bold text-gray-600 text-sm md:text-[25px] truncate mr-auto md:mr-0">
        {title}
      </h1>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="flex-1 max-w-[400px] mx-1 hidden md:flex h-8 items-center gap-2 bg-gray-200 rounded-lg px-2 border">
        <img src={SearchIcon} alt="Search" className="h-[20px]" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full h-[80%] text-gray-700 placeholder:text-sm bg-gray-200 focus:outline-none"
        />
      </div>

      {/* Icons and Profile Section */}
      <div className="flex items-center gap-4">
        {/* Language Selector */}
        <div className="hidden md:flex items-center cursor-pointer gap-2">
          <img src={UsFlag} alt="US Flag" />
          <p className="font-semibold text-gray-600 text-xs">Eng</p>
          <img src={ArrowDown} className="h-[5px] transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Icons List */}
        <ul className="flex items-center gap-4">
          <li className="relative">
            <IoChatbubbleEllipsesSharp
              onClick={navigateToInstantChat}
              className="text-xl text-gray-400 hover:scale-110 transition-transform"
            />
            <div className="absolute top-1 right-0 h-2 w-2 bg-lime-400 rounded-full"></div>
          </li>
          <li className="relative">
            <FaBell className="text-xl text-gray-400 hover:scale-110 transition-transform" />
            <div className="absolute top-1 right-0 h-2 w-2 bg-lime-400 rounded-full"></div>
          </li>
          <li className="relative">
            <FaCartShopping
              onClick={navigateToCart}
              className="text-lg text-gray-400 hover:scale-110 transition-transform"
            />
            <div className="absolute top-1 right-0 h-2 w-2 bg-lime-400 rounded-full"></div>
          </li>
          <li>
            <IoSettings className="text-lg text-gray-400 hover:scale-110 transition-transform" />
          </li>
          <li className="flex-shrink-0">
            <img
              src={ProfilePic}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </li>
        </ul>
=======
import React, { memo } from "react";
import SearchIcon from '../../assets/pngs/search.png'
import UsFlag from '../../assets/pngs/us-flag.png'
import Cloud from '../../assets/pngs/cloud.png'
import ArrowDown from '../../assets/pngs/arrow-down.png'
import Notification from '../../assets/pngs/notification.png'
import Settings from '../../assets/pngs/settings.png'
import ProfilePic from '../../assets/pngs/profile-pic.png'
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
       
>>>>>>> main
      </div>
    </nav>
  );
}

<<<<<<< HEAD
export default memo(NavBar); 
=======
export default memo(NavBar);
>>>>>>> main
