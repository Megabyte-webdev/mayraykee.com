import Vector from "../../assets/pngs/vector.png";

function MyCourseDescription() {
<<<<<<< HEAD
    return ( <div className="w-full border-r-[15px] h-fit p-[3%] justify-between flex items-start border-green bg-gray-300">
=======
    return ( <div className="w-[100vh] border-r-[15px] h-fit p-[3%] justify-between flex items-start border-green bg-gray-300">
>>>>>>> main
        <img src={Vector} className="h-[20px]" />
        <div className="w-[95%] flex flex-col gap-[15px]">
          <h3 className="font-semibold text-[15px]">
            Understanding and Managing Global Business
          </h3>
          <p className="text-small truncate">
            The course aims to equip participants with a broad understanding of
            the breadth and scope of international business and a solid
            foundation upon which to advance their careers and interests. This
            course prepares founders with the skills necessary to launch new
            ventures, critical to raising capital and funding start-ups.The
            course aims to equip participants with a broad understanding of the
            breadth and scope of Furthermore, it would address the crucial
            questions along the path towards a financially sustainable venture.
            Participants who successfully complete the course would be well
            positioned for entrepreneurship competencies now and real capital
            acquisition in the future
          </p>
        </div>
      </div>
 );
}

export default MyCourseDescription;