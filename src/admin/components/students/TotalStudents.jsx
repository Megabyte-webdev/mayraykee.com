import Graph from "../../../assets/pngs/graph.png";
import People from "../../../assets/pngs/people.png";

function TotalStudents() {
  return (
    <div className="h-full w-[25%] flex justify-between px-[3%] py-[2%] bg-green rounded-[10px]">
      <div className="flex flex-col">
        <img src={People} className="h-[50px] w-[50px] " />
        <span className="text-md mt-[5px] font-semibold text-white">
          43,000
        </span>
        <span className="text-white text-small font-normal">
          Total Students
        </span>
      </div>
      <img src={Graph} className="" />
    </div>
  );
}

export default TotalStudents;
