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


export const formErrorMessages = {
  passwordMismatch: 'Password mismatch',
  selectTitle: 'Please select a title',
  accountType: 'Please select an account type'
}

export const landingNavOptions = [
  "Home",
  "About Us",
  "Services",
  "Contact Us",
  "Landing Two",
];
export const landingNavOptionsTwo = [
  "Home",
  "About Us",
  "Services",
  "Contact Us",
];

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
    route: "/dashboard/instructors",
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
  exams: {
    title: "Exams",
    activeIcon: CameraWhite,
    inactiveIcon: ActivityInactive,
    route: "/dashboard/exams",
  },
};
export const admin_sidebar_keys = {
  dashboard: {
    title: "Dashboard",
    activeIcon: Dashboard,
    inactiveIcon: DashboardInactive,
    route: "/admin/dashboard/home",
  },
  courses: {
    title: "Courses",
    activeIcon: Courses,
    inactiveIcon: CoursesInactive,
    route: "/admin/dashboard/courses",
  },
  schedules: {
    title: "Schedule",
    activeIcon: Schedule,
    inactiveIcon: ScheduleInactive,
    route: "/admin/dashboard/schedule",
  },
  instructor: {
    title: "Students",
    activeIcon: PersonWithBoard,
    inactiveIcon: InstructorsInactive,
    route: "/admin/dashboard/students",
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
    route: "/admin/dashboard/activity",
  },
  live_classes: {
    title: "Live Classes",
    activeIcon: CameraWhite,
    inactiveIcon: ActivityInactive,
    route: "/dashboard/live_classes",
  },
  exams: {
    title: "Exams",
    activeIcon: CameraWhite,
    inactiveIcon: ActivityInactive,
    route: "/dashboard/exams",
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
  myCourses: "My Courses",
  meetingHistory: "Meeting History",
  forumGroups: "Forums/Groups",
};

export const courseOverviewOptions = {
  about: "About",
  curriculum: "Curriculum",
  objective: "Objectives",
  outline: "Outline",
};

export const courseDisplayOptions = {
  about: "About",
  review: "Reviews",
  discussion: "Discussion",
};

export const paymentOptions = {
  card: "Credit/Debit Card",
  paypal: "Paypal",
};

export const titlesOption = [
  { id: 2000, name: "--select title--" },
  { id: 1, name: "Mr" },
  { id: 2, name: "Mrs" },
  { id: 3, name: "Ms" },
  { id: 4, name: "Miss" },
  { id: 6, name: "Engr" },
  { id: 7, name: "Dr" },
  { id: 8, name: "Prof" },
];

export const professionsOption = [
  { id: 2000, name: "--select profession--" },
  { id: 1, name: "Professor" },
  { id: 2, name: "Doctor" },
  { id: 3, name: "Engineer" },
  { id: 4, name: "Teacher" },
  { id: 5, name: "Lawyer" },
  { id: 6, name: "Accountant" },
  { id: 7, name: "Architect" },
  { id: 8, name: "Pharmacist" },
  { id: 9, name: "Dentist" },
  { id: 10, name: "Scientist" },
  { id: 11, name: "Psychologist" },
  { id: 12, name: "Economist" },
  { id: 13, name: "Sociologist" },
  { id: 14, name: "Historian" },
  { id: 15, name: "Anthropologist" },
  { id: 16, name: "Biologist" },
  { id: 17, name: "Chemist" },
  { id: 18, name: "Physicist" },
  { id: 19, name: "Mathematician" },
  { id: 20, name: "Political Scientist" },
  { id: 21, name: "Linguist" },
  { id: 22, name: "Geologist" },
  { id: 23, name: "Veterinarian" },
  { id: 24, name: "Environmental Scientist" },
  { id: 25, name: "Clinical Researcher" },
];



export const responseKeys = {
  allCourses: 'All Courses',
  Faculty: 'Single Faculty'
}