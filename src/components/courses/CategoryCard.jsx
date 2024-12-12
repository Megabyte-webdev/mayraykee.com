import { memo } from "react";
import ArrowRight from '../../assets/pngs/arrow-right.png'
import ColorPallete from "../../assets/pngs/color-palette.png";
import { useNavigate } from 'react-router-dom';

function CategoryCard({data}) {
    const navigate = useNavigate();
    
    return ( 
    <li onClick={()=>navigate(`/dashboard/courses/preview/${data.id} ${data?.title}`, {state: {data: data, previousPath: location.pathname}})} className="px-[10px] w-full sm:min-w-40 min-h-20 group cursor-pointer hover:scale-105 duration-100 hover:shadow-md py-[5px] justify-between bg-white items-center rounded-[10px] flex gap-[2px]">
        <img className="h-[80%]" src={data?.image || ColorPallete}/>
        <div className="flex-1 flex flex-col gap-[5px]">
            <span className="text-sm font-semibold text-gray-500">{data?.title}</span>
            <span className="text-[11px] text-gray-400">{data?.description}</span>
        </div>

        <img className="h-[10px] pr-[10px] duration-150 group-hover:pr-0" src={ArrowRight}/>

    </li> );
}

export default memo(CategoryCard);