import CourseDescription from "../components/activity/CourseDescription";

function MyCourses() {
    return ( <ul className="w-full divide-y-[1px] divide-gray-500 gap-[10%] flex flex-col overflow-y-auto ">
        <CourseDescription/>
        <CourseDescription/>
    </ul> );
}

export default MyCourses;