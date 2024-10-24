function MeetingSummary({ data }) {
  const getMeetingSummary = () => {
    return data.map((current, index) => (
      <li className="flex w-[30%] first:pl-0 pl-[2%] justify-center gap-[15px] items-center">
        {current.icon}
        <div className="flex flex-col text-sm gap-[10px] text-gray-400">
            <span>{current.name}</span>
            <div className="flex gap-[10px]">
             <span className="text-black font-semibold">{current.number}</span>
             <span className="text-[11px] font-light">This Month</span>
            </div>
        </div>
      </li>
    ));
  };

  return (
    <div className="w-[80%] h-[20%] flex items-center rounded-[10px] border border-lime-600">
      <ul className="p-[2%] w-full items-center flex  justify-between divide-gray-400 divide-x-[1px]">{getMeetingSummary()}</ul>
    </div>
  );
}

export default MeetingSummary;
