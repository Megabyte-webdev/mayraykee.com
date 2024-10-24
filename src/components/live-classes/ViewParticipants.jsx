import { useEffect, useState } from "react";
import AddPerson from "../../assets/pngs/add-person.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Participant from "./Participant";
import { liveGuestsDummy } from "../../utils/dashboard/dummys";
import { motion } from "framer-motion";


function ViewParticipants() {
  const [areHidden, hideParticipants] = useState(false);

  const toogleViewParticipants = () => hideParticipants(!areHidden);

  const getParticipants = () =>
    liveGuestsDummy.map((currenGuest, index) => (
      <Participant key={index} data={currenGuest} />
    ));

  return (
    <div className="w-[90%] flex flex-col items-center rounded-[10px] gap-[20px] bg-white h-fit">
      <div className="h-[30px] bg-lime-600 w-full flex items-center justify-between rounded-[10px] px-[3%]">
        <h6 className="text-sm text-white">Participants</h6>

        <div className="flex gap-[5px] items-center justify-between">
          <button className="text-[10px]  flex items-center gap-[3px] cursor-pointer hover:scale-105 duration-100 rounded-[30px] px-[8px] py-[2px] bg-white text-black">
            Add Particpants
            <img src={AddPerson} className="h-[12px]" />
          </button>

          {areHidden ? (
            <FaAngleDown
              onClick={toogleViewParticipants}
              className="text-[15px] text-white cursor-pointer hover:scale-105 duration-100"
            />
          ) : (
            <FaAngleUp
              onClick={toogleViewParticipants}
              className="text-[15px] text-white cursor-pointer hover:scale-105 duration-100"
            />
          )}
        </div>
      </div>

      {!areHidden && <ul className="w-[80%] max-h-[200px] overflow-y-auto flex flex-col pb-[10px] gap-[8px]">{getParticipants()}</ul>}
    </div>
  );
}

export default ViewParticipants;
