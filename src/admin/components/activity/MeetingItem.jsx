function MeetingItem({active}) {
    return <li className={`w-[98%] h-[80px] flex items-center px-[3%] justify-between   rounded-[10px] ${active? 'bg-red-700' : 'bg-gray-300'}`}>
  
      <hr className={`h-[80%]  ${active ? 'bg-white w-[1%]' : 'bg-red-700 w-[1.5%]'} rounded-t-[10px] rounded-b-[10px]`}/>
  
      <div className={`w-[95%] flex flex-col h-[80%] justify-center gap-[10px] ${active ? 'text-white' : 'text-black'}`}>
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold text-small">Design Thinking and Innovation</p>
              <button className={`${active ? ' text-red-700 bg-white ' : 'border border-red-700 ' } rounded-[30px] hover:scale-105 duration-100 px-[15px] text-[10px]`}>Join</button>
            </div>
            <p className="text-small">8:00 Am - 9:00 PM</p>
      </div>
  
    </li>;
  }
  
  export default MeetingItem;
  