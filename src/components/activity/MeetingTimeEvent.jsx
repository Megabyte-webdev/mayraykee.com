import NameTag from "../NameTag";
import FileImg from "../../assets/pngs/file.png";
import PictureTag from "../PictureTag";

function MeetingTimeEvent({ currentEvent }) {
  const getUsers = () => {
    let components = [];

    if (currentEvent.users.length === 0) {
      return components;
    }

    currentEvent.users.map((currentUser, index) => {
      components.push(
        <PictureTag data={currentUser} key={index}/>
      );
    });

    return components;
  };

  return (
    <li className="w-full flex gap-[25px] mb-[2%] last:has-[hr]:h-0 last:min-h-fit min-h-[50px] ">
      <div className="flex flex-col h-full">
        <span className="text-gray-400 text-small place-self-center">
          {currentEvent.time}
        </span>
        <hr className="h-[80%] w-[1px] place-self-center bg-gray-200" />
      </div>

      <div className="flex flex-col gap-[5px] w-[80%]">
        <div className="flex items-center justify-between">
        <NameTag
          initials={currentEvent.event.initials}
          initialsBackground={currentEvent.event.initialsBackground}
          extraText={currentEvent.event.extraText}
          name={currentEvent.event.name}
        />
        <span className=" px-[5px] py-[1px] text-[10px] rounded-[5px] text-red-800 font-semibold border border-red-800">Completed</span>
        </div>

        <ul
          className={`w-[80%] ${
            currentEvent.users.length === 0
              ? "hidden"
              : "flex items-center justify-start gap-[3%] pl-[10%] overflow-x-auto"
          }`}
        >
          {getUsers()}
        </ul>
      </div>
    </li>
  );
}

export default MeetingTimeEvent;
