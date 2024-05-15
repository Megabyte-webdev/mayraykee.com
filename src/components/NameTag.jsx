import { highlightKeyword } from "../utils/UtilMethods";
import { courses } from "../utils/constants";

function NameTag({initials, initialsBackground, name, extraText}) {


  const editExtraText = () => {
    let text = extraText

    courses.map((currentCourse => {
        if(text.toLowerCase().includes(currentCourse.name.toLowerCase())){
          text = highlightKeyword(text, currentCourse)
        }
    }))

    return <div className="font-normal text-gray-700 peer-hover:scale-50 text-small flex gap-[5px]" dangerouslySetInnerHTML={{ __html: text }} />
  }


  return (
    <div className="flex  items-center">
      <p className={`p-[8px] rounded-[5px] hover:scale-105 duration-100 mr-[10px] peer/initials tracking-wide ${initialsBackground} cursor-pointer flex items-center justify-center text-white font-semibold text-small `}>{initials}</p>
      <button className="font-bold text-gray-700 peer-hover/initials:underline cursor-pointer hover:underline text-small flex mr-[5px] ">{name}</button>
      {editExtraText()}
    </div>
  );
}

export default NameTag;
