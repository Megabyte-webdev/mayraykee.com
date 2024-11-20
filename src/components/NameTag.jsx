import { highlightKeyword } from "../utils/UtilMethods";
import { categories } from "../utils/constants";

function NameTag({initials, initialsBackground = 'bg-lime-600/70', name, extraText}) {


  const editExtraText = () => {
    let text = extraText

    if(!extraText){
      return
    }

    categories.map((currentCourse => {
        if(text.toLowerCase().includes(currentCourse.name.toLowerCase())){
          text = highlightKeyword(text, currentCourse)
        }
    }))

    return <div className="font-normal text-gray-700 peer-hover:scale-50 text-small flex gap-[5px]" dangerouslySetInnerHTML={{ __html: text }} />
  }


  return (
    <div className="flex flex-wrap gap-x-2 items-center">
      <p className={`p-[8px] rounded-[5px] hover:scale-105 duration-100 mr-[10px] peer/initials tracking-wide ${initialsBackground} cursor-pointer flex items-center justify-center text-white font-semibold text-small `}>{initials}</p>
      <button className="font-bold text-gray-700 peer-hover/initials:underline cursor-pointer hover:underline text-small flex mr-[5px] ">{name}</button>
      {editExtraText()}
    </div>
  );
}

export default NameTag;
