
import React, { memo } from "react";
import SearchIcon from '../../assets/pngs/search.png';
import UsFlag from '../../assets/pngs/us-flag.png';
import Cloud from '../../assets/pngs/cloud.png';
import ArrowDown from '../../assets/pngs/arrow-down.png';
import Notification from '../../assets/pngs/notification.png';
import Settings from '../../assets/pngs/settings.png';
import ProfilePic from '../../assets/pngs/profile-pic.png';
import { FaCartShopping, FaBell } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp, IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NavBar({ title }) {
  const navigate = useNavigate();

  const navigateToCart = () => navigate('/dashboard/cart');
  const navigateToInstantChat = () => navigate('/dashboard/instant_chat');

  return (
    <nav className="h-[90px] px-[3%] flex items-center justify-between bg-white shadow-md md:shadow-none">
      {/* Title */}
      <h1 className="font-bold text-gray-600 text-sm md:text-[25px] truncate">
        {title}
      </h1>

      {/* Search Bar (Hidden on Small Screens) */}
      <div className="hidden md:flex w-[40%] items-center gap-2 bg-gray-200 rounded-lg px-2 border">
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
          <p className="font-semibold text-gray-600">Eng</p>
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
          <li>
            <img
              src={ProfilePic}
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(NavBar); 