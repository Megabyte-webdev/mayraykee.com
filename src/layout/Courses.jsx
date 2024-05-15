import React from 'react'
import PopularCourses from '../components/courses/PopularCourses'
import { coursesContentDummy } from '../utils/dashboard/dummys'
import CourseContentCard from '../components/courses/CourseContentCard'

function Courses() {


    const getCourseContent = () => {
        return coursesContentDummy.map((curentContent, index) => <CourseContentCard  key={index} currentContent={curentContent}/>)
    }

    return (
        <section className='flex flex-col pt-[2%] px-[2%] overflow-y-auto gap-[10%] items-start'>
            <PopularCourses/>

            <ul className='w-full grid grid-cols-4 gap-y-[5%]'>
           {getCourseContent()}
            </ul>

            <div className='w-full flex flex-col'>
                <span className='text-sm text-gray-400'>Showing<span className='text-green'> 1-8</span> from <span className='text-green'>100 </span>data</span>
            </div>

        </section>
    )
}

export default Courses
