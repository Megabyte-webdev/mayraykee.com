import ArrowRight from '../../assets/pngs/arrow-right.png'
import { courses_two } from '../../utils/constants';
import CourseCard from './CourseCard';
import { memo } from 'react';

function PopularCourses() {

    const getCourses = () => {
        return courses_two.map((currentCourse, index) => <CourseCard key={index} currentCourse={currentCourse}/>)
    }

    return ( 
    <div className="w-full items-start flex flex-col gap-[10px] ">
        <div className="w-full justify-between flex items-center">
          <h1 className="font-bold text-gray-700 text-[20px]">Popular this week</h1>
          <button className="text-sm flex items-center gap-[5px] hover:scale-105 duration-105 text-green">View all<img className="h-[10px]" src={ArrowRight}/></button>
        </div>

        <ul className='flex w-full justify-between'>
             {getCourses()}
        </ul>

    </div> );
}

export default memo(PopularCourses);