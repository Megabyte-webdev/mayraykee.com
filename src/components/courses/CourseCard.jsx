import { memo } from 'react';
import RedClock from '../../assets/pngs/red-clock.png'
import Location from '../../assets/pngs/location.png'
import Clipboard from '../../assets/pngs/clipboard.png'
import { FormatPrice } from '../../utils/UtilMethods';
import { useLocation, useNavigate } from 'react-router-dom';
import Laptop from "../../assets/jpgs/lappy.jpg";


function CourseCard({data}) {
    const navigate = useNavigate();
    const location = useLocation()

    const navigateToCoursePage = () => navigate(`/dashboard/courses/preview/${data.id} ${data?.title}`, {state: {data: data, previousPath: location.pathname}})


    return ( 
    <li onClick={navigateToCoursePage} className="w-[220px] cursor-pointer hover:shadow-md hover:scale-105 duration-100 min-h-[220px] flex  flex-col rounded-[10px] p-[1%] gap-[10px] bg-white">
        <img src={Laptop} className="w-full object-cover rounded-[10px] h-[60%]"/>
        <div className="flex flex-col text-small gap-[5px]  justify-between h-[40%] items-start px-[10px]">
            <h5 className="text-small font-bold text-black text-center break-all">{data?.title}</h5>
            <span className="text-[11px] text-black line-clamp-2">{data?.description}</span>

            <div className="flex w-full text-black justify-between py-2">
                <span className='text-[10px] gap-[3px] flex'><img src={RedClock} className='h-[15px]'/>{data?.duration}</span>
                <span className='text-[10px] gap-[3px] flex'><img src={Location} className='h-[15px]'/>{data?.course_type}</span>
                <span className='text-[10px] gap-[3px] flex'><img src={Clipboard} className='h-[15px]'/>{FormatPrice(Number(data?.price))}</span>
            </div>
        </div>
     
    </li> );
}

export default memo(CourseCard);