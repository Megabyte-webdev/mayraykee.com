import { dummyChats } from "../../utils/dashboard/dummys";
import ConversationTimeline from "./ConversationTimeline";
import InputBar from "./InputBar";

function ConversationBox({ selectedUser, currentUser }) {
  const getConversations = () =>
    dummyChats.map((currentConversation, index) => (
      <ConversationTimeline
        currentConversation={currentConversation}
        user={currentConversation.isCurrentUser ? currentUser : selectedUser}
      />
    ));

  return (
    <div className="w-[58%] h-full relative">
      {selectedUser && currentUser && (
        <>
          <ul className="w-full flex flex-col pt-[20px] px-[3%] gap-[15px]">
            {getConversations()}
          </ul>
          <InputBar/>
        </>
      )}
      {(!selectedUser || !currentUser) && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h3 className="text-md font-semibold ">No chats to display</h3>
          <span className="text-small text-gray-500">
            Please select or add a conversation
          </span>
        </div>
      )}
    </div>
  );
}

export default ConversationBox;
