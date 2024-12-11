import ArrowRight from '../../assets/pngs/arrow-right.png'
import { courses_two } from '../../utils/constants';
import CategoryCard from './CategoryCard';
import CourseCard from './CategoryCard';
import { memo } from 'react';

function PopularCourses({popular}) {

    const getCourses = () => {
        return popular?.map((currentCourse, index) => <CategoryCard key={index} data={currentCourse}/>)
    }

    return ( 
    <div className="w-full items-start flex flex-col gap-[10px] ">
        <div className="w-full justify-between flex items-center">
          <h1 className="font-bold text-gray-700 text-[20px]">Popular this week</h1>
          <button className="text-sm flex items-center gap-[5px] hover:scale-105 duration-105 text-green">View all<img className="h-[10px]" src={ArrowRight}/></button>
        </div>

        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-around gap-2'>
             {getCourses()}
        </ul>

    </div> );
}

export default memo(PopularCourses);