import { useOutletContext } from "react-router-dom";
import CourseExamCard from "../components/exams/CourseExamCard";

function ExamsList() {

    const context = useOutletContext()

    return ( 
    <ul className="w-[50%]">
        <CourseExamCard active={true} context={context} />
    </ul> );
}

export default ExamsList;