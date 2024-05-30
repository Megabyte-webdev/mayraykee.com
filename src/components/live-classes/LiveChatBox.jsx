import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import GroupChat from "./GroupChat";
import PersonalChat from "./PersonalChat";


function LiveChatBox() {
    const [areHidden, hideChats] = useState(false);
    const [isGroup, setIsGroup] = useState(true)

    const toogleViewChats = () => hideChats(!areHidden);

    return ( <div className={`w-[90%]  flex flex-col items-center rounded-[10px] ${ areHidden ? 'pb-[8px]' : 'pb-0'} gap-[10px] bg-white h-fit`}>
        <div className="h-[30px] bg-lime-600 w-full flex items-center justify-between rounded-[10px] px-[3%]">
        <h6 className="text-sm text-white">Chat</h6>

        <div className="flex gap-[5px] w-[50%] items-center justify-between">
          <div className="text-[10px] w-[90%]  flex items-center gap-[3px] rounded-[30px] px-[3px] py-[2px] bg-white text-black">
            <button onClick={() => setIsGroup(true)} className={`text-[10px] w-[50%]  flex items-center gap-[3px] cursor-pointer hover:scale-105 duration-100 rounded-[30px] px-[8px] py-[2px] ${isGroup ? 'bg-green text-white' : 'bg-white' } text-black`}>Group</button>
            <button onClick={() => setIsGroup(false)} className={`text-[10px] w-[50%]  flex items-center gap-[3px] cursor-pointer hover:scale-105 duration-100 rounded-[30px] px-[8px] py-[2px] ${!isGroup ? 'bg-green text-white' : 'bg-white' } text-black`}>Personal</button>
          </div>

          {!areHidden ? (
            <FaAngleDown
              onClick={toogleViewChats}
              className="text-[15px] text-white cursor-pointer hover:scale-105 duration-100"
            />
          ) : (
            <FaAngleUp
              onClick={toogleViewChats}
              className="text-[15px] text-white cursor-pointer hover:scale-105 duration-100"
            />
          )}
        </div>
      </div>

      
      { (isGroup && areHidden) && <GroupChat/>}
      { (!isGroup && areHidden) && <PersonalChat/>}
      
      
    

    </div> );
}

export default LiveChatBox;