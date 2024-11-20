import { useEffect, useState } from "react";
import LiveClassInfo from "./LiveClassInfo";
import { currentUser } from "../../utils/dashboard/dummys";

function EnrolledCourse({ context, data, getCourseSchedule }) {
  const [courseSchedule, setCourseSchedule] = useState([]);

  const getLiveClasses = async () => {
    const result = await getCourseSchedule(data?.courseId);

    console.log("Result:", result);

    setCourseSchedule(result);

    // return courseSchedule.map((currentSchedule, index) => <LiveClassInfo key={index} context={context} active={true} />)
  };

  useEffect(() => {
    getLiveClasses();
  }, [data]);

  return (
    courseSchedule.length !== 0 && (
      <div className="w-full flex flex-col gap-[5px] py-[5px]">
        <h1 className="font-bold">{data?.title}</h1>
<<<<<<< HEAD
        <ul className="flex flex-wrap gap-[10px]">
=======
        <ul className="flex flex-col gap-[10px]">
>>>>>>> main
          {courseSchedule.map((currentSchedule, index) => (
            <LiveClassInfo key={index} currentSchedule={currentSchedule} context={context} active={true} />
          ))}
        </ul>
      </div>
    )
  );
}

export default EnrolledCourse;
