import { useOutletContext } from "react-router-dom";
import LiveClassInfo from "../components/live-classes/LiveClassInfo";
import useEnrolledCourses from "../hooks/useEnrolledCourses";
import EnrolledCourse from "../components/live-classes/EnrolledCourse";

function DisplayLiveClasses() {

    const context = useOutletContext()
    const { courses, loading, getCourses, getCourseSchedule } = useEnrolledCourses()

    const mapEnrolledCourses = () => {
        if(!courses){
            return
        }
        return courses.map((currentCourse, index) => <EnrolledCourse key={index} getCourseSchedule={getCourseSchedule} data={currentCourse} context={context}/>)
    }

    return ( 
<<<<<<< HEAD
    <ul className="w-[90%] gap-[20px] divide-y-[1px] divide-gray-400 flex flex-col py-[10px]">
=======
    <ul className="w-[50%] gap-[20px] divide-y-[1px] divide-gray-400 flex flex-col py-[10px]">
>>>>>>> main
        {mapEnrolledCourses()}
    </ul> );
}

export default DisplayLiveClasses;