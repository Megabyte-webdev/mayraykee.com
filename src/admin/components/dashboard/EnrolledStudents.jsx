import { usersDummyAsStudents } from "../../utils/dummy";
import NameTag from "../../../components/NameTag";
import { currentUser } from "../../../utils/dashboard/dummys";

function EnrolledStudents() {
  
  const getStudents = usersDummyAsStudents.map((currentStudent, index) => (
    <div className="flex py-[5px] items-center w-full justify-between">
      <NameTag
        initials={currentStudent.initials}
        key={index}
        name={currentStudent.name}
      />
      <span className="text-small text-gray-400">10:35 pm</span>
    </div>
  ));

  return (
    <div className="w-[30%] rounded-[10px] bg-white h-full py-[1%] px-[2%]">
      <div className="w-full h-[10%] flex text-sm justify-between font-semibold border-b-[1.5px] bordder-b-gray-400 pb-[3px]">
        <h3 className="text-black">Recently enrolled students</h3>
        <span className="text-green hover:underline cursor-pointer ">
          See all
        </span>
      </div>

      <ul className="h-[90%] flex flex-col divide-y-[1px] py-[2%] justify-between">
        {getStudents}
      </ul>
    </div>
  );
}

export default EnrolledStudents;
