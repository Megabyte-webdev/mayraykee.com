import RedClock from '../../assets/pngs/red-clock.png'
import Location from '../../assets/pngs/location.png'
import Clipboard from '../../assets/pngs/clipboard.png'
import { FormatPrice } from '../../utils/UtilMethods';

function CourseContentCard({currentContent}) {
    return ( 
    <li className="w-[220px] cursor-pointer hover:shadow-md hover:scale-105 duration-100 h-[250px] flex  flex-col rounded-[10px] p-[1%] gap-[10px] bg-white">
        <img src={currentContent.thumbnail} className="w-full object-cover rounded-[10px] h-[55%]"/>
        <div className="flex flex-col text-small gap-[5px]  justify-between h-[40%] items-center px-[10px]">
            <h5 className="text-small font-semibold  text-blacktext-center truncate">{currentContent.name}</h5>
            <span className="text-[11px] text-black line-clamp-2">{currentContent.shortDesc}</span>

            <div className="flex w-full text-black justify-between ">
                <span className='text-[10px] gap-[3px] flex'><img src={RedClock} className='h-[15px]'/>{currentContent.duration}</span>
                <span className='text-[10px] gap-[3px] flex'><img src={Location} className='h-[15px]'/>{currentContent.location}</span>
                <span className='text-[10px] gap-[3px] flex'><img src={Clipboard} className='h-[15px]'/>{FormatPrice(Number(currentContent.price))}</span>

            </div>
        </div>
     
    </li> );
}

export default CourseContentCard;