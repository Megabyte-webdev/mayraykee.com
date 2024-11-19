import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { usersDummyForMeeting} from "../../utils/dashboard/dummys";
import ChatCard from "./ChatCard";

function ChatList({selectedUser,setSelectedUser}) {



    const getUsers = () => {
        return usersDummyForMeeting.map((currentChat, index) => <ChatCard selectedUser={selectedUser} setSelectedUser={setSelectedUser} currentChat={currentChat} />)
    }

  return (
    <div className="h-max w-full md:w-1/4 flex flex-col items-center gap-[3%] shadow-sm shadow-gray-300 py-[1%]  bg-white">
        <h3 className="font-semibold text-start w-full text-md px-[7.5%] text-gray-500">openDetails && <p className="block md:hidden" onClick={()=>setOpenDetails (true)}>open</p>    Chat</h3>
        <button className="flex text-small gap-[5px] justify-center  hover:scale-105 duration-75 items-center text-white rounded-[30px] w-[85%] bg-green px-[5px] py-[5px]"><FaPlus/> New Conversation</button>
       <ul className="min-h-20 w-full flex flex-row md:flex-col py-2 overflow-x-auto overflow-y-hidden md:overflow-y-auto">
          {getUsers()}
       </ul>
    </div>
  );
}

export default ChatList;