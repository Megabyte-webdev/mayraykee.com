import Person from "../assets/pngs/person.png";
import PersonActive from "../assets/pngs/person-active.png";
import Message from "../assets/pngs/message.png";
import MessageActive from "../assets/pngs/message-active.png";
import PersonCaptured from "../assets/pngs/person-captured.png";
import PersonWithBoard from "../assets/pngs/person-with-board.png";
import Camera from "../assets/pngs/camera.png";
import Dashboard from "../assets/svgs/dashboard.svg";
import DashboardInactive from "../assets/svgs/dashboard-inactive.svg";
import Courses from "../assets/svgs/courses.svg";
import CoursesInactive from "../assets/svgs/courses-inactive.svg";
import Schedule from "../assets/svgs/schedule.svg";
import ScheduleInactive from "../assets/svgs/schedule-inactive.svg";
// import Instructors from '../assets/svgs/instructors.svg'
import InstructorsInactive from "../assets/svgs/instructors-inactive.svg";
import Activity from "../assets/svgs/activity.svg";
import ActivityInactive from "../assets/svgs/activity-inactive.svg";
import ColorPallete from "../assets/pngs/color-palette.png";
import WebPage from "../assets/pngs/web-page.png";
import MindAnatomy from "../assets/pngs/mind-anatomy.png";
import Microscope from "../assets/pngs/microscope.png";
import CameraWhite from "../assets/pngs/camera-white.png";


export const landingNavOptions = ['Home', 'About Us', 'Services', 'Contact Us', 'Landing Two']
export const landingNavOptionsTwo = ['Home', 'About Us', 'Services', 'Contact Us', 'Landing One']

export const registration_steps_keys = {
  create_account: {
    title: "User Registration",
    desc: "Enter your name, email and password.",
    activeIcon: PersonActive,
    inactiveIcon: Person,
  },
  email_verification: {
    title: "Email Verification",
    desc: "Verify your email address",
    activeIcon: MessageActive,
    inactiveIcon: Message,
  },
  person_details: {
    title: "Profile Details",
    desc: "Provide profile Pictures and job title",
    activeIcon: PersonCaptured,
    inactiveIcon: PersonCaptured,
  },
  course_details: {
    title: "Course Details",
    desc: "Choose your course details and other info",
    activeIcon: PersonWithBoard,
    inactiveIcon: PersonWithBoard,
  },
  welcome_video: {
    title: "Welcome Video",
    desc: "Start your journey with a Click",
    activeIcon: Camera,
    inactiveIcon: Camera,
  },
};

export const sidebar_keys = {
  dashboard: {
    title: "Dashboard",
    activeIcon: Dashboard,
    inactiveIcon: DashboardInactive,
    route: "/dashboard/home",
  },
  courses: {
    title: "Courses",
    activeIcon: Courses,
    inactiveIcon: CoursesInactive,
    route: "/dashboard/courses",
  },
  schedules: {
    title: "Schedule",
    activeIcon: Schedule,
    inactiveIcon: ScheduleInactive,
    route: "/dashboard/schedule",
  },
  instructor: {
    title: "Instructors",
    activeIcon: PersonWithBoard,
    inactiveIcon: InstructorsInactive,
  },
  profile: {
    title: "Profile",
    activeIcon: PersonActive,
    inactiveIcon: Person,
    route: "/dashboard/account_profile",
  },
  activity: {
    title: "Activity",
    activeIcon: Activity,
    inactiveIcon: ActivityInactive,
    route: "/dashboard/activity",
  },
  live_classes: {
    title: "Live Classes",
    activeIcon: CameraWhite,
    inactiveIcon: ActivityInactive,
    route: "/dashboard/live_classes",
  },
};

export const courses_two = [
  {
    name: "Graphics Design",
    color: "text-[#fec64f]",
    icon: ColorPallete,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Programming",
    color: "text-[#4cbc9a]",
    icon: WebPage,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Soft Skills",
    color: "text-[#fc6b57]",
    icon: MindAnatomy,
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "Science",
    color: "text-[#ffbabf]",
    icon: Microscope,
    desc: "Lorem ipsum dolor sit amet",
  },
];

export const categories = [
  {
    name: "Graphics Design",
    color: "text-[#fec64f]",
    icon: ColorPallete,
  },
  {
    name: "Fullstack Development",
    color: "text-[#4cbc9a]",
  },
  { name: "UI Design", color: "text-[#fc6b57]" },
  { name: "UX Researcher", color: "text-[#ffbabf]" },
];

export const activityNavStates = {
  following: "Following",
  you: "You",
  myCourses: 'My Courses'
};

export const courseOverviewOptions = {
    about: 'About',
    curriculum: 'Curriculum',
    objective: 'Objectives',
    outline: 'Outline'
}

export const courseDisplayOptions = {
    about: 'About',
    review: 'Reviews',
    discussion: 'Discussion'
}

export const paymentOptions = {
  card: 'Credit/Debit Card',
  paypal: 'Paypal'
}