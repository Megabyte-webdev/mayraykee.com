import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/pngs/arrow-left-gray.png";
import CoursePreview from "../components/courses/CoursePreview";
import CourseOverview from "../components/courses/CourseOverview";
import CourseAction from "../components/courses/CourseAction";

function CoursePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const courseData = location.state?.data;
  const pathname = location.state?.previousPath;

  const navigateToPreviousPage = () => {
    if (pathname) {
      navigate(pathname);
    } else {
      navigate("/courses");
    }
  };

  return (
    <section className="flex flex-col pt-[2%] pb-[10px] min-h-[90%] px-[2%] overflow-y-auto gap-[3%]">
      <button
        onClick={navigateToPreviousPage}
        className="flex gap-[10px] items-center hover:scale-[102%] duration-100 text-gray-400"
      >
        <img src={ArrowLeft} className="h-[15px]" />
        Back
      </button>

      <CoursePreview>
        <CourseOverview data={courseData}/>
        <CourseAction data={courseData}/>
      </CoursePreview>
    </section>
  );
}

export default CoursePage;
