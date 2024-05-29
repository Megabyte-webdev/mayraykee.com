import { useState } from "react";
import Mic from "../../assets/pngs/mic.png";

function Guest({ data }) {

    const [isMicEnabled, setIsMicEnabled] = useState(false)

    const toogleMic = () => setIsMicEnabled(!isMicEnabled)

  return (
    <li className="h-full relative w-[25%] min-w-[18%]  items-center flex">
      <img
        src={data.profileImg}
        className="h-full object-cover object-center rounded-[10px] w-full"
      />

      <div onClick={toogleMic} className={`absolute cursor-pointer hover:scale-105 duration-100 flex items-center justify-center left-2 bottom-2 ${isMicEnabled ? 'bg-green' : 'bg-red-700'} rounded-full h-[20px] w-[20px]`}>
        <img src={Mic} className="h-[10px]" />
      </div>
    </li>
  );
}

export default Guest;
