import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { usersDummyForMeeting} from "../../utils/dashboard/dummys";
import ChatCard from "./ChatCard";

function ChatList({selectedUser,setSelectedUser}) {

    

    const getUsers = () => {
        return usersDummyForMeeting.map((currentChat, index) => <ChatCard selectedUser={selectedUser} setSelectedUser={setSelectedUser} currentChat={currentChat} />)
    }

  return (
    <div className="w-[20%] flex flex-col items-center h-full gap-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white">
        <h3 className="font-semibold text-start w-full text-md px-[7.5%] text-gray-500">Chat</h3>
        <button className="flex text-small gap-[5px] justify-center  hover:scale-105 duration-75 items-center text-white rounded-[30px] w-[85%] bg-green px-[5px] py-[5px]"><FaPlus/> New Conversation</button>
       <ul className="flex flex-col w-full items-start justify-start ">
          {getUsers()}
       </ul>
    </div>
  );
}

export default ChatList;
