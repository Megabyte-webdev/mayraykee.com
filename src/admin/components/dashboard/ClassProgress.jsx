import { classProgressDummy } from "../../utils/contants";
import ClassProgressItem from "./ClassProgressItem";

function ClassProgress() {
  const getClassProgress = classProgressDummy.map((currentClass) => <ClassProgressItem key={currentClass.key} currentClass={currentClass}/>);

  return (
    <div className="w-[25%] h-full bg-white rounded-[10px] py-[1%] px-[1%]">
      <div className="w-full h-[10%] flex text-sm justify-between font-semibold border-b-[1.5px] bordder-b-gray-400 pb-[3px]">
        <h3 className="text-black">Class Progress</h3>
      </div>

      <ul className="h-[90%] flex flex-col divide-y-[1px] py-[2%] justify-between">{getClassProgress}</ul>
    </div>
  );
}

export default ClassProgress;
