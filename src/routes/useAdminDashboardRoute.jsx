import React, { lazy } from 'react'
import { Route } from 'react-router-dom'


//Routes
const DashboardLayout = lazy(() => import('../admin/layout/DashboardLayout'))
const InviteFriends = lazy(() => import('../pages/InviteFriends')) 

//Dashboard
const Dashboard = lazy(() => import('../admin/pages/AdminDashboard'))

//Courses
const Courses = lazy(() => import('../admin/pages/AdminCoursesPage'))

//Schedules
const Schedule = lazy(() => import('../admin/pages/AdminSchedule'))


// //NavBar Routes
// const Cart = lazy(() => import('../pages/Cart'))
// const Chat = lazy(() => import('../pages/InstantChat'))

// //Live Classes
// const LiveClasses = lazy(() => import('../layout/LiveClasses'))
// const DisplayLiveClasses = lazy(() => import('../pages/DisplayLiveClasses'))
// const ClassLiveVideo = lazy(() => import('../pages/ClassLiveVideo'))




// //Profile
// const Profile = lazy(() => import('../layout/ProfileDetails'))

// //Activity
// const Activity = lazy(() => import('../layout/Activity'))
// const You = lazy(() => import('../pages/You'))
// const Following = lazy(() => import('../pages/Following'))
// const MyCourses = lazy(() => import('../pages/MyCourses'))
// const MeetingHistory = lazy(() => import('../pages/MeetingHistory'))
// const ForumsAndGroups = lazy(() => import('../pages/ForumsAndGroups'))

// //Exams
// const Exams = lazy(() => import('../layout/Exams'))
// const ExamsList = lazy(() => import('../pages/ExamsList'))
// const OngoingExam = lazy(() => import('../pages/OngoingExam'))


function useAdminDashboardRoute() {
    return (
        <Route path='admin/dashboard' element={<DashboardLayout/>}>
            <Route path='/admin/dashboard/home' element={<Dashboard/>} />
            <Route path='/admin/dashboard/courses' element={<Courses/>} />
            <Route path='/admin/dashboard/schedule' element={<Schedule/>} />
        </Route>
    )
}

export default useAdminDashboardRoute
