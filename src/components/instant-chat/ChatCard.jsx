function ChatCard({ currentChat, selectedUser, setSelectedUser }) {
  return (
    <div
      onClick={() => setSelectedUser(currentChat)}
      className={`w-full flex flex-col md: flex-row justify-center md:justify-start ${
        currentChat.id === selectedUser?.id
          ? 'bg-gray-100 md:border-l-[3px] md:border-l-green md:border-b-0 border-b-[3px] border-b-green'
          : 'md:border-l-0 border-b border-b-gray-400'
      } px-[7.5%] items-center pb-[10px] cursor-pointer hover:bg-gray-100`}
    >
      <div className="flex items-center gap-[10px] py-[10px]">
        <div className="w-16 h-16 md:h-20 md:w-20 rounded-full overflow-hidden">
          <img
            src={currentChat.profilePic}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">{currentChat.name}</span>
          <span className="text-small">3 minutes ago</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
