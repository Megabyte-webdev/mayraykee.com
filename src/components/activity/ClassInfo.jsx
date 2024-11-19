function ClassInfo({active}) {
  return <li className={`min-w-[200px] h-[80px] flex items-center px-[3%] justify-between   rounded-[10px] ${active? 'bg-green' : 'bg-gray-300'}`}>

    <hr className={`h-[80%]  ${active ? 'bg-white w-[1%]' : 'bg-green w-[1.5%]'} rounded-t-[10px] rounded-b-[10px]`}/>

    <div className={`w-[95%] flex flex-col h-[80%] justify-center gap-[10px] ${active ? 'text-white' : 'text-black'}`}>
          <div className="w-full flex justify-between items-center">
            <p className="font-semibold text-small">Design Thinking and Innovation</p>
            <button className={`${active ? ' text-green bg-white ' : 'border border-green ' } rounded-[30px] hover:scale-105 duration-100 px-[15px] text-[10px]`}>Join</button>
          </div>
          <p className="text-small">8:00 Am - 9:00 PM</p>
    </div>

  </li>;
}

export default ClassInfo;
