import { memo } from "react";
import ArrowRight from '../../assets/pngs/arrow-right.png'
function CategoryCard({data}) {
    return ( 
    <li className="w-[23%] px-[10px] group cursor-pointer hover:scale-105 duration-100 hover:shadow-md py-[5px] justify-between bg-white items-center rounded-[10px] flex">
        <img className="h-[80%]" src={data.icon}/>
        <div className="flex flex-col gap-[5px]">
            <span className="text-sm font-semibold text-gray-500">{data.name}</span>
            <span className="text-[11px] text-gray-400">{data.desc}</span>
        </div>

        <img className="h-[10px] pr-[10px] duration-150 group-hover:pr-0" src={ArrowRight}/>

    </li> );
}

export default memo(CategoryCard);