function ChatCard({data}) {
    return ( <li className="flex  gap-[10px] w-full">
        <img src={data?.profileImg} className="h-[30px] w-[30px] rounded-full " />
        <p className="min-h-[50px] w-[80%] text-sm p-[5px] rounded-[10px] bg-gray-200">Hello there.</p>
    </li> );
}

export default ChatCard;