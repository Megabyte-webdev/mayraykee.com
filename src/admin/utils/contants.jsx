import { BsCalendarRangeFill } from "react-icons/bs";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaCalendarXmark } from "react-icons/fa6";

export const meetingSummary = [
    {
        id: 1,
        name: 'No. of meetings',
        number: 30,
        icon: <BsCalendarRangeFill className="text-[20px] text-gray-400" />
    },
    {
        id: 2,
        name: 'Rescheduled meetings',
        number: 15,
        icon: <RiCalendarScheduleFill className="text-[20px] text-gray-400"/>
    },
    {
        id: 3,
        name: 'Cancelled meetings',
        number: 15,
        icon: <FaCalendarXmark className="text-[20px] text-gray-400"/>
    },
]


export const classProgressDummy = [
    {
        id: 1,
        name: 'Class A',
        number: 78,
        percentage: 32
    },
    {
        id: 2,
        name: 'Class B',
        number: 60,
        percentage: 43
    },
    {
        id: 3,
        name: 'Class C',
        number: 80,
        percentage: 67
    },
    {
        id: 4,
        name: 'Class D',
        number: 104,
        percentage: 56
    },
]
export const upcomingActivitesDummy = [
    {
        id: 1,
        date: '31',
        time: '10Am - 11Am',
        name: 'Meeting with the VC',
        link: 'Meeting link mayrahkeeafrica.com/live',
        status: 1,
    },
    {
        id: 2,
        date: '04',
        time: '10Am - 11Am',
        name: 'Meeting with the J..',
        link: 'Meeting link mayrahkeeafrica.com/live',
        status: 2,
    },
    {
        id: 3,
        date: '12',
        time: '10Am - 11Am',
        name: 'Class B middle sess..',
        link: 'Meeting link mayrahkeeafrica.com/live',
        status: 2,
    },
    {
        id: 4,
        date: '16',
        time: '10Am - 11Am',
        name: 'Send Mr Ayo class..',
        link: 'Meeting link mayrahkeeafrica.com/live',
        status: 2,
    },
]