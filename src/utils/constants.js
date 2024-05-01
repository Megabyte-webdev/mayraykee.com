import Person from '../assets/pngs/person.png'
import PersonActive from '../assets/pngs/person-active.png'
import Message from '../assets/pngs/message.png'
import MessageActive from '../assets/pngs/message-active.png'
import PersonCaptured from '../assets/pngs/person-captured.png'
import PersonWithBoard from '../assets/pngs/person-with-board.png'
import Camera from '../assets/pngs/camera.png'

export const registration_steps_keys = {
    create_account: { 
        title: 'User Registration', 
        desc: 'Enter your name, email and password.',
        activeIcon: PersonActive,
        inactiveIcon: Person
    },
    email_verification: {
        title : 'Email Verification',
        desc: 'Verify your email address',
        activeIcon: MessageActive,
        inactiveIcon: Message
    },
    person_details: {
        title : 'Profile Details',
        desc: 'Provide profile Pictures and job title',
        activeIcon: PersonCaptured,
        inactiveIcon: PersonCaptured
    },
    course_details: {
        title : 'Course Details',
        desc: 'Choose your course details and other info',
        activeIcon: PersonWithBoard,
        inactiveIcon: PersonWithBoard
    },
    welcome_video: {
        title : 'Welcome Video',
        desc: 'Start your journey with a Click',
        activeIcon: Camera,
        inactiveIcon: Camera
    },

}