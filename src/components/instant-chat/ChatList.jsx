import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { usersDummyForMeeting} from "../../utils/dashboard/dummys";
import ChatCard from "./ChatCard";

function ChatList({selectedUser,setSelectedUser}) {



    const getUsers = () => {
        return usersDummyForMeeting.map((currentChat, index) => <li key={index}><ChatCard selectedUser={selectedUser} setSelectedUser={setSelectedUser} currentChat={currentChat} /></li>)
    }

  return (
    <div className="flex-1 h-max md:h-full w-full flex flex-col items-center gap-[3%] shadow-sm shadow-gray-300 py-[1%] bg-white">
        <h3 className="font-semibold text-start w-full text-md px-[7.5%] text-gray-500"> Chat</h3>
        <button className="flex text-small gap-[5px] justify-center hover:scale-105 duration-75 items-center text-white rounded-[30px] w-[85%] bg-green px-[5px] py-[5px]"><FaPlus/> New Conversation</button>
       <ul className="min-h-20 min-w-full flex md:justify-start gap-2 min-[900px]:flex-col py-2 overflow-x-auto overflow-y-hidden md:overflow-y-auto">
          {getUsers()}
       </ul>
    </div>
  );
}

export default ChatList;