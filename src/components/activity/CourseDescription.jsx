import Vector from "../../assets/pngs/vector.png";
import ClassInfo from "./ClassInfo";

function CourseDescription({ data }) {
  return (
    <li className="w-[75%] flex flex-col first:pt-0 pt-[3%] gap-[3%] ">
      <div className=" w-full border-r-[15px] p-[3%] justify-between flex items-start border-green bg-gray-300">
        <img src={Vector} className="h-[20%]" />
        <div className="w-[93%] flex flex-col gap-[10px]">
          <h3 className="font-semibold text-[15px]">
            Understanding and Managing Global Business
          </h3>
          <p className="text-small">
            The course aims to equip participants with a broad understanding of
            the breadth and scope of international business and a solid
            foundation upon which to advance their careers and interests. This
            course prepares founders with the skills necessary to launch new
            ventures, critical to raising capital and funding start-ups.The
            course aims to equip participants with a broad understanding of the
            breadth and scope of Furthermore, it would address the crucial
            questions along the path towards a financially sustainable venture.
            Participants who successfully complete the course would be well
            positioned for entrepreneurship competencies now and real capital
            acquisition in the future
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-[20px]">
        <span className="bg-gray-300 px-[10px] py-[5px] w-fit rounded-[15px] text-sm">
          Class Schedules
        </span>

        <ul className="w-full gap-y-2 grid pl-[1%] grid-cols-2">
          <ClassInfo active={true} />
          <ClassInfo active={false} />
          <ClassInfo active={false} />
          <ClassInfo active={false} />
        </ul>
      </div>
    </li>
  );
}

export default CourseDescription;
