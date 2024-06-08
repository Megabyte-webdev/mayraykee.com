import CourseActivity from "../components/courses/CourseActivity";
import CoursesOverview from "../components/courses/CoursesOverview";
import PopularCourses from "../components/courses/PopularCourses";
import TopCourses from "../components/courses/TopCourses";
import UserReviews from "../components/courses/UserReview";

function AdminCourses() {
  return (
    <main className="w-full justify-between h-[90%] py-[1%] px-[2%] flex">
      <div className="w-[70%] h-full gap-[3%] flex flex-col">
        <CoursesOverview/>
        <CourseActivity/>
        <UserReviews/>
      </div>

      <div className="w-[25%] h-full flex flex-col gap-[3%]">
          <PopularCourses/>
          <TopCourses/>
      </div>
    </main>
  );
}

export default AdminCourses;
