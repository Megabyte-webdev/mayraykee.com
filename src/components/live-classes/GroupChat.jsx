import { liveGuestsDummy } from "../../utils/dashboard/dummys";
import ChatCard from "./ChatCard";
import InputField from "./InputField";

function GroupChat({}) {
  const getCharts = () =>
    liveGuestsDummy.map((currentGuest, index) => (
      <ChatCard key={index} data={currentGuest} />
    ));

  return (
    <>
      <h6 className="text-black font-semibold text-sm  bg-white w-full text-center">Group Chats</h6>
    <div className="w-[90%] items-center flex flex-col relative max-h-[300px] border-b pb-[10px] overflow-y-auto gap-[15px]">

      <ul className="w-full flex flex-col gap-[10px]">{getCharts()}</ul>

    </div>
      <InputField/>
    </>
  );
}

export default GroupChat;
