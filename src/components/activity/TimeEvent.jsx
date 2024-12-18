import NameTag from "../NameTag";
import FileImg from "../../assets/pngs/file.png";

function TimeEvent({ currentEvent }) {
  const getAttachments = () => {
    let components = [];
    if (currentEvent.attachments.length === 0) {
      return components;
    }
    currentEvent.attachments.map((currentAttachment, index) => {
      components.push(
        <li
          key={index}
          className="min-h-[50px] w-full rounded-[10px] cursor-pointer group hover:bg-white flex items-center py-[5px] px-[5%] gap-[10px] bg-gray-300"
        >
          <img
            src={FileImg}
            className="h-8 md:h-12 group-hover:scale-105 duration-100"
          />
          <div className="h-full flex group-hover:scale-105 duration-100 flex-col justify-end">
            <span className="text-small font-semibold break-all">
              {currentAttachment.name}
            </span>
            <span className="text-[10px] font-gray-400">
              {currentAttachment.size}
            </span>
          </div>
        </li>
      );
    });
    return components;
  };

  return (
    <li className="w-full flex gap-[25px] last:has-[hr]:h-0 last:min-h-fit min-h-[50px]">
      <div className="flex flex-col items-center h-full text-center">
        <span className="text-gray-400 text-small">
          {currentEvent.time}
        </span>
        <hr className="h-[80%] w-[1px] bg-gray-200" />
      </div>
      <div className="flex flex-col gap-[15px] min-w-[200px] overflow-hidden">
        <NameTag
          initials={currentEvent.event.initials}
          initialsBackground={currentEvent.event.initialsBackground}
          extraText={currentEvent.event.extraText}
          name={currentEvent.event.name}
        />
        <ul
          className={`w-full gap-[10px] grid grid-cols-2 flex-wrap ${
            currentEvent.attachments.length === 0 ? "hidden" : ""
          }`}
        >
          {getAttachments()}
        </ul>
      </div>
    </li>
  );
}

export default TimeEvent;
