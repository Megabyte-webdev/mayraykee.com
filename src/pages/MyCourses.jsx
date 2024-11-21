import MyCoursesOverview from "../components/activity/MyCourseOverview";

function MyCourses() {
    return ( <ul className="w-full divide-y-[1px] divide-gray-500 gap-[10%] flex flex-col min-h-full">
        <MyCoursesOverview/>
        <MyCoursesOverview/>
    </ul> );
}

export default MyCourses;