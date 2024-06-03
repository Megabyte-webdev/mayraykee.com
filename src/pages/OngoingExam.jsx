import ExamModule from "../components/exams/ExamModules";
import Questionier from "../components/exams/Questionier";

function OngoingExams() {
    return ( <div className="w-full h-full flex justify-between">
        <ExamModule/>
        <Questionier/>
    </div> );
}

export default OngoingExams;