import Vector from "../../assets/pngs/vector.png";
import ClassInfo from "./ClassInfo";
import MyCourseDescription from "./MyCourseDescription";

function MyCourseOverview({ data }) {
  return (
    <li className="w-[75%] flex flex-col first:pt-0 pt-[3%] gap-[3%] ">
      <MyCourseDescription/>
      <div className="w-full flex flex-col gap-[20px]">
        <span className="bg-gray-300 px-[10px] py-[5px] w-fit rounded-[15px] text-sm">
          Class Schedules
        </span>

        <ul className="w-full flex flex-wrap justify-center md: justify-between gap-3">
          <ClassInfo active={true} />
          <ClassInfo active={false} />
          <ClassInfo active={false} />
          <ClassInfo active={false} />
        </ul>
      </div>
    </li>
  );
}

export default MyCourseOverview;
