import { dummyChats } from "../../utils/dashboard/dummys";
import ConversationTimeline from "./ConversationTimeline";
import InputBar from "./InputBar";

function ConversationBox({ selectedUser, currentUser }) {
  const getConversations = () =>
    dummyChats.map((currentConversation, index) => (
      <ConversationTimeline
        key={index}
        currentConversation={currentConversation}
        user={currentConversation.isCurrentUser ? currentUser : selectedUser}
      />
    ));

  return (
    <div className="w-full h-full relative flex flex-col bg-gray-200">
      {selectedUser && currentUser ? (
        <>
          {/* Chat messages container */}
          <ul className="w-full min-h-full flex flex-col px-[3%] gap-[15px] flex-grow overflow-y-auto">
            {getConversations()}
          </ul>

          {/* Input bar fixed at the bottom */}
          <div className="w-full p-2 bg-white sticky bottom-0 left-0">
            <InputBar />
          </div>
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h3 className="text-center text-md font-semibold ">No chats to display</h3>
          <span className="text-center text-small text-gray-500">
            Please select or add a conversation
          </span>
        </div>
      )}
    </div>
  );
}

export default ConversationBox;
