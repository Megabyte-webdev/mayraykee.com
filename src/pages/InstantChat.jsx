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
    <div className="w-full h-[90vh] px-[2%] py-[1%] relative lg:grid lg:grid-cols-12 lg:gap-4 bg-gray-200">
      {/* Chat List */}
      <div className="w-full lg:col-span-3 flex-shrink-0 overflow-y-auto max-h-[calc(90vh-2rem)] lg:h-auto">
        <ChatList selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      </div>

      {/* Conversation Box */}
      <div className="w-full lg:col-span-6 flex-grow overflow-y-auto h-[calc(90vh-2rem)] pt-3">
        <ConversationBox currentUser={currentUser} selectedUser={selectedUser} />
      </div>

      {/* Current Chat Details for large screens */}
      {selectedUser && (
        <div className="hidden lg:block lg:col-span-3 h-full flex-shrink-0 overflow-y-auto max-h-[calc(90vh-2rem)]">
          <CurrentChatDetails
            selectedUser={selectedUser}
            openDetails={openDetails}
            setOpenDetails={setOpenDetails}
          />
        </div>
      )}

      {/* Current Chat Details for small screens */}
      <div
        className={`h-full ${openDetails ? "block w-[300px] absolute top-0 bottom-0 right-0" : "hidden"} lg:hidden overflow-y-auto h-[calc(90vh-2rem)]`}
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
          className="lg:hidden block absolute top-4 right-5 cursor-pointer z-50"
        >
          {!openDetails ? <RiUserSharedLine size="24" /> : <MdOutlineCancelPresentation size="24" />}
        </div>
      )}
    </div>
  );
}

export default InstantChat;
