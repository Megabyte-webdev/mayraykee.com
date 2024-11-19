function ChatCard({ currentChat, selectedUser, setSelectedUser }) {
  return (
    <div
      onClick={() => setSelectedUser(currentChat)}
      className={`w-auto flex ${(currentChat.id === selectedUser?.id) ? 'border-l-[3px] border-b border-l-green' : 'border-l-0 border-b border-b-gray-400'}  px-[7.5%]  items-center pb-[10px] cursor-pointer hover:bg-gray-100`}
    >
      <div className="flex items-center gap-[10px] py-[10px]">
        <img
          src={currentChat.profilePic}
          className="h-[45px] rounded-full w-[45px]"
        />
        <div className="hidden md:flex flex-col ">
          <span className="text-sm font-semibold">{currentChat.name}</span>
          <span className="text-small">3 minutes ago</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
