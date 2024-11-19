import { useState } from "react";
import ChatList from "../components/instant-chat/ChatList";
import CurrentChatDetails from "../components/instant-chat/CurrentChatDetails";
import { currentUser } from "../utils/dashboard/dummys";
import ConversationBox from "../components/instant-chat/ConversationBox"; 
import { RiUserSharedLine, RiUserSharedFill } from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";
function InstantChat() {
  const [selectedUser, setSelectedUser] = useState();
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div className="w-full h-full px-[2%] py-[1%] flex flex-col md:flex-row gap-4 relative">
      {/* Chat List */}
      <div className="w-full md:w-1/4 h-full">
        <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>

      {/* Conversation Box */}
      <div className="w-full md:w-2/4 h-full">
        <ConversationBox currentUser={currentUser} selectedUser={selectedUser} />
      </div>

      {/* Current Chat Details */}
      <div
        className={`hidden min-[900px]:block min-[900px]:relative min-[900px]:w-1/4`}
      >
        <CurrentChatDetails
          selectedUser={selectedUser}
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      </div>
            {/* Current Chat Details small screens */}
            <div
        className={`h-full ${
          openDetails ? "block w-[300px] absolute top-0 bottom-0 right-0" : "hidden"
        } min-[900px]:block min-[900px]:relative min-[900px]:w-1/4`}
      >
        <CurrentChatDetails
          selectedUser={selectedUser}
          openDetails={openDetails}
          setOpenDetails={setOpenDetails}
        />
      </div>


      {/* Mobile Toggle for Details */}
      {selectedUser && (
        <div
          onClick={() => setOpenDetails(!openDetails)}
          className="min-[900px]:hidden block absolute top-4 right-4 cursor-pointer z-50"
        >
          {!openDetails ? <RiUserSharedLine size="24" /> : <MdOutlineCancelPresentation size="24" />}
        </div>
      )}
    </div>
  );
}

export default InstantChat;