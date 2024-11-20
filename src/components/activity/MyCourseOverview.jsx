import Vector from "../../assets/pngs/vector.png";
import ClassInfo from "./ClassInfo";
import MyCourseDescription from "./MyCourseDescription";

function MyCourseOverview({ data }) {
  return (
<<<<<<< HEAD
    <li className="w-full md:w-[75%] flex flex-col first:pt-0 pt-[3%] gap-[3%] ">
=======
    <li className="w-[75%] flex flex-col first:pt-0 pt-[3%] gap-[3%] ">
>>>>>>> main
      <MyCourseDescription/>
      <div className="w-full flex flex-col gap-[20px]">
        <span className="bg-gray-300 px-[10px] py-[5px] w-fit rounded-[15px] text-sm">
          Class Schedules
        </span>

<<<<<<< HEAD
        <ul className="w-full flex flex-wrap justify-between gap-3 pb-5">
=======
        <ul className="w-full gap-y-2 grid pl-[1%] grid-cols-2">
>>>>>>> main
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
