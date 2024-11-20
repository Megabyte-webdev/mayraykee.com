function ConversationTimeline({ currentConversation, user }) {
  return (
    <div
      className={`flex w-full ${
        currentConversation.isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
<<<<<<< HEAD
        className={`w-2/3 items-start gap-[10px] ${
=======
        className={`w-[50%] items-start gap-[10px] ${
>>>>>>> main
          currentConversation.isCurrentUser ? "flex flex-row-reverse" : "flex"
        }`}
      >
        <img
          src={user.profilePic}
          className={`h-[50px] w-[50px] rounded-full`}
        />
        <div className="flex flex-col gap-[5px] pt-[10px]">
          <p
            className={`text-small px-[8px] py-[5px] ${
              currentConversation.isCurrentUser
<<<<<<< HEAD
                ? "bg-green-400 text-black rounded-l-[10px] rounded-br-[10px]"
                : "bg-white text-gray-700 rounded-r-[10px] rounded-bl-[10px]"
=======
                ? "bg-gray-300 text-black rounded-l-[10px] rounded-br-[10px]"
                : "bg-white text-gray-500 rounded-r-[10px] rounded-bl-[10px]"
>>>>>>> main
            }`}
          >
            {currentConversation.chat}
          </p>
          <span className="text-[10px] text-gray-500">{currentConversation.time}</span>
        </div>

    
      </div>
    </div>
  );
}

export default ConversationTimeline;
