function ChatCard({ currentChat, selectedUser, setSelectedUser }) {
  return (
    <div
      onClick={() => setSelectedUser(currentChat)}
      className={`w-full flex justify-center lg:justify-start ${
        currentChat.id === selectedUser?.id
          ? 'sticky-0 left-0 bg-gray-100 lg:border-l-[3px] lg:border-l-green lg:border-b-0 border-b-[3px] border-b-green'
          : 'lg:border-l-0 border-b border-b-transparent lg:border-b-gray-400'
      } px-[7.5%] items-center pb-1 lg:pb-[10px] cursor-pointer hover:bg-gray-100`}
    >
      <div className="flex flex-col lg:flex-row items-center gap-[10px] py-[10px]">
        <div className="w-16 h-16 lg:h-18 lg:w-18 rounded-full overflow-hidden">
          <img
            src={currentChat.profilePic}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <span className="hidden lg:block text-sm font-semibold">{currentChat.name}</span>
 <span className="block lg:hidden text-sm font-semibold text-center">{currentChat.name.split(" ")[0]}</span>
          <span className="text-small">3 mins ago</span>
        </div>
      </div>
    </div>
  );
}

export default ChatCard;
