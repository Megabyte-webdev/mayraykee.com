import CurriculumCard from "./CurriculumCard";

function Curriculums({ data }) {
  console.log(data);

  const getCurriculums = () => {
    if(data.length === 0){
        return 'Nothing to show'
    }
    return data.map((currentCurriculum, index) => <CurriculumCard key={index} number={index + 1} data={currentCurriculum} />)
  }
 
  return (
    <ul className="w-full items-center flex-col gap-[10px] justify-center flex ">
       {getCurriculums()}
    </ul>
  );
}

export default Curriculums;
