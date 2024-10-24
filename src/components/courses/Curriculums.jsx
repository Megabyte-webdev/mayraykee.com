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
    <ul className="w-full items-start justify-center flex flex-col">
      <h2 className="font-bold text-lg text-gray-700">Coure Curriculum</h2>
       {data?.curriculum &&  <div className='text-gray-600 flex text-sm flex-col gap-[5px]' dangerouslySetInnerHTML={{ __html: data?.curriculum }} />}
       {!data?.curriculum && <p className="text-sm text-gray-400">Opps.. nothing to display</p>}
    </ul>
  );
}

export default Curriculums;
