import React, { memo } from 'react'
import { MdAddCircle } from "react-icons/md";
import ScheduleCard from './ScheduleCard';
import { scheduleDummy } from '../../utils/dashboard/dummys';

function Upcoming() {

    const getSchedule = () => {
        return scheduleDummy.map((current,index) => <ScheduleCard key={index} current={current} />)
    }

    return (
        <div className='w-full flex flex-col px-[5px] gap-[15px] pb-[5px]'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex flex-col text-gray-600 gap-[5px]'>
                 <h6 className='font-semibold text-lg '>Upcoming Schedule</h6>
                 <p className='text-small'>Thursday, 10th April , 2021</p>
                </div>

                <div className='p-[5px] shadow-sm bg-white cursor-pointer shadow-gray-300 rounded-[10px]'>
                <MdAddCircle className='text-green text-[25px]'/>
                </div>
            </div>

            <ul className='w-full flex flex-col gap-[10px]'>
                {getSchedule()}
            </ul>

            <button className='w-full hover:bg-white border rounded-full border-gray-600 py-[5px]'>
               More Schedules
            </button>
            
        </div>
    )
}

export default memo(Upcoming)
