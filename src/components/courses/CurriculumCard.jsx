import { useState } from 'react';
import ArrowDown from '../../assets/pngs/arrow-down-red.png'

function CurriculumCard({ data, number }) {
   
    const [isDescOpen, setIsDescOpen] = useState(false)

  return (
    <li className="w-full min-h-[50px] flex flex-col justify-start rounded-[10px] pt-[5px] bg-gray-300">
      <div className="w-full px-[10px] flex justify-between ">
        <h3 className="font-bold pl-[10px]">{`${number}. ${data.title}`}</h3>
        <button onClick={() => setIsDescOpen(!isDescOpen)} className="flex text-small  items-center gap-[5px] text-red-700">Preview<img className="h-[5px] " src={ArrowDown} /></button>
      </div>
      <p className={`${isDescOpen ? 'block' : 'hidden'} py-[10px] pl-[25px] text-small `}>{data.desc}</p>
    </li>
  );
}

export default CurriculumCard;
