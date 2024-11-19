import { useState } from "react";
import ChatList from "../components/instant-chat/ChatList";
import CurrentChatDetails from "../components/instant-chat/CurrentChatDetails";
import { currentUser } from "../utils/dashboard/dummys";
import ConversationBox from "../components/instant-chat/ConversationBox";

function InstantChat() {
    const [selectedUser,setSelectedUser] = useState()
  return (
    <div className="w-full h-full px-[2%] py-[1%] justify-start gap-[1%] flex flex-col md:flex-row">
      <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ConversationBox currentUser={currentUser} selectedUser={selectedUser}/>
      <CurrentChatDetails selectedUser={selectedUser}/>
    </div>
  );
}

export default InstantChat;
