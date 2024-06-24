import TotalStudents from "../components/students/TotalStudents";

function Students() {
    return ( <main className="h-[90%] w-full py-[1%] px-[2%]">
        <div className="w-full h-[25%] flex justify-between">
           <TotalStudents/>
        </div>
    </main> );
}

export default Students;