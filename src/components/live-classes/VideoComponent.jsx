import { liveGuestsDummy } from "../../utils/dashboard/dummys";
import Guest from "./Guest";
import Mic from "../../assets/pngs/mic.png";
import Camera from "../../assets/pngs/camera-white.png";
import Comment from "../../assets/pngs/comment.png";
import Upload from "../../assets/pngs/upload.png";
import { useState } from "react";

function VideoComponent() {
  const [isMicEnabled, setIsMicEnabled] = useState(true);
  const [isCameraEnabled, setIsCameraEnabled] = useState(true);

  const getGuests = () =>
    liveGuestsDummy.map((currentGuest, index) => (
      <Guest key={index} data={currentGuest} />
    ));

  const toogleMic = () => setIsMicEnabled(!isMicEnabled);
  const toogleCamera = () => setIsCameraEnabled(!isCameraEnabled);

  return (
    <div className="w-[60%]  flex flex-col items-center  gap-[5%]">
      <hr className="w-full h-[70%] rounded-[10px] bg-gray-300" />

      <div className="w-full  gap-[10px] p-[10px] flex rounded-[10px] h-[25%] bg-white">
        <ul className="w-full  overflow-x-auto gap-[10px] flex rounded-[10px] h-full bg-white">
          {getGuests()}
        </ul>
      </div>

      <div className="w-full items-center px-[10px] gap-[10px] flex justify-between rounded-[10px] h-[10%] bg-white">
        <ul className="w-[50%] items-center px-[10px] gap-[10px] flex rounded-[10px] h-full bg-white">
          <li
            onClick={toogleMic}
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[25%] items-center rounded-full ${
              isMicEnabled ? "bg-green" : "bg-red-700"
            } justify-center flex`}
          >
            <img src={Mic} className="h-[50%]" />
          </li>
          <li
            onClick={toogleCamera}
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[25%] items-center rounded-full ${
              isCameraEnabled ? "bg-green" : "bg-red-700"
            } justify-center flex`}
          >
            <img src={Camera} className="h-[50%]" />
          </li>
        </ul>

        <ul className="w-[50%] items-center px-[10px] gap-[10px] flex rounded-[10px] h-full bg-white">
          <li
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[14%] items-center rounded-full bg-gray-300 justify-center flex`}
          >
            <img src={Comment} className="h-[50%]" />
          </li>
          <li
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[14%] items-center rounded-full bg-red-700/20 justify-center flex`}
          >
            <span className="h-[50%] rounded-full bg-red-400 p-[5px] text-[8px] flex items-center justify-center">Rec</span>
          </li>
          <li
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[14%] items-center rounded-full bg-gray-300 justify-center flex`}
          >
            <img src={Upload} className="h-[50%]" />
          </li>
          <li
            className={`h-[80%] cursor-pointer hover:scale-105 duration-100 w-[14%] items-center rounded-full bg-gray-300 justify-center flex`}
          >
            <span className="font-bold text-md pb-[8px]">...</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VideoComponent;
