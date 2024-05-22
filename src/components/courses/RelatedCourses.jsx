import { relatedCoursesDummy } from "../../utils/dashboard/dummys";
import CourseCard from "./CourseCard";

function RelatedCourses() {

    const getRelatedCourses = () => {
        return relatedCoursesDummy.map((currentCourse => <CourseCard data={currentCourse} />))
    }

    return ( 
    <div className="w-full flex flex-col gap-[20px]">
        <h3 className="font-bold text-lg">Related Courses</h3>

        <ul className="w-full grid grid-cols-4">
            {getRelatedCourses()}
        </ul>

    </div> );
}

export default RelatedCourses;