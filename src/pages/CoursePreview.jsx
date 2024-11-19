import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeft from "../assets/pngs/arrow-left-gray.png";
import CourseOverview from "../components/courses/CourseOverview";
import CourseAction from "../components/courses/CourseAction";

function CoursePreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const courseData = location.state?.data;
  const pathname = location.state?.previousPath;

  const navigateToPreviousPage = () => navigate(-1)
  

  return (
    <section className="flex flex-col pt-[2%] pb-[10px] min-h-[90%] px-[2%] overflow-y-auto gap-[3%]">
      <button
        onClick={navigateToPreviousPage}
        className="flex gap-[10px] items-center hover:scale-[102%] duration-100 text-gray-400"
      >
        <img src={ArrowLeft} className="h-[15px]" />
        Back
      </button>

      <div className="w-full flex flex-col md:flex-row md:justify-between gap-2">
        <CourseOverview data={courseData} />
        <CourseAction data={courseData} />
      </div>
    </section>
  );
}

export default CoursePreview;
