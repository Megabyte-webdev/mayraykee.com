import { FaPlus } from "react-icons/fa";
import { usersDummyForMeeting } from "../../utils/dashboard/dummys";
import ChatCard from "./ChatCard";

function ChatList({ selectedUser, setSelectedUser }) {
  const getUsers = () => {
    return usersDummyForMeeting.map((currentChat, index) => (
      <ChatCard
        key={index}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        currentChat={currentChat}
      />
    ));
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:w-1/4 items-center md:items-start md:gap-4 gap-2 shadow-sm shadow-gray-300 p-4 bg-white">
      {/* Header */}
      <h3 className="font-semibold text-start w-full md:w-auto text-md text-gray-500">
        Chat
      </h3>

      {/* New Conversation Button */}
      <button className="flex text-small gap-2 justify-center hover:scale-105 duration-75 items-center text-white rounded-full w-full md:w-auto bg-green-500 px-4 py-2">
        <FaPlus /> New Conversation
      </button>

      {/* Chat List */}
      <ul className="flex flex-row md:flex-col gap-2 w-full overflow-x-auto md:overflow-y-auto">
        {getUsers()}
      </ul>
    </div>
  );
}

export default ChatList;
