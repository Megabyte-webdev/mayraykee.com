function EventItem({ event }) {
  return (
    <div
      className={`h-[45px] w-[14%] ${event.color} flex flex-col border  justify-center border-y-gray-200 gap-[5px] rounded-[5px] pl-[5px] absolute border-l-[5px] bg-white shadow-lg shadow-gray-200 `}
    >
      <span className="text-[11px] text-gray-600 font-semibold">
        {event.title}
      </span>
      <span className="text-[10px] text-gray-400">10:00 Am</span>
    </div>
  );
}

export default EventItem;
