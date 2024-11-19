import { useState } from "react";
import ChatList from "../components/instant-chat/ChatList";
import CurrentChatDetails from "../components/instant-chat/CurrentChatDetails";
import { currentUser } from "../utils/dashboard/dummys";
import ConversationBox from "../components/instant-chat/ConversationBox";

function InstantChat() {
    const [selectedUser,setSelectedUser] = useState();
const [openDetails, setOpenDetails]=useState(false);
  return (
    <div className="w-full h-full px-[2%] py-[1%] justify-start gap-[1%] flex flex-col md:flex-row relative">{
!openDetails && <p className="block md:hidden" onClick={()=>setOpenDetails(true)}>open</p>}
      <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ConversationBox currentUser={currentUser} selectedUser={selectedUser}/>
      <CurrentChatDetails selectedUser={selectedUser} openDetails={openDetails} setOpenDetails={setOpenDetails} />
    </div>
  );
}

export default InstantChat;
