import React, { lazy } from 'react'
import { Route } from 'react-router-dom'


//Routes
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const InviteFriends = lazy(() => import('../pages/InviteFriends')) 

//Dashboard
const Dashboard = lazy(() => import('../pages/Dashboard'))

//NavBar Routes
const Cart = lazy(() => import('../pages/Cart'))
const Chat = lazy(() => import('../pages/InstantChat'))

//Live Classes
const LiveClasses = lazy(() => import('../layout/LiveClasses'))
const DisplayLiveClasses = lazy(() => import('../pages/DisplayLiveClasses'))
const ClassLiveVideo = lazy(() => import('../pages/ClassLiveVideo'))

//Courses
const Courses = lazy(() => import('../layout/Courses'))
const AllCourses = lazy(() => import('../pages/AllCourses'))
const CoursePreview = lazy(() => import('../pages/CoursePreview'))
const CourseDisplay = lazy(() => import('../pages/CourseDisplay'))
const CourseCheckout = lazy(() => import('../pages/CourseCheckout'))
const CoursePayment = lazy(() => import('../pages/CoursePayment'))

//Schedules
const Schedule = lazy(() => import('../pages/Schedule'))

//Profile
const Profile = lazy(() => import('../layout/ProfileDetails'))

//Activity
const Activity = lazy(() => import('../layout/Activity'))
const You = lazy(() => import('../pages/You'))
const Following = lazy(() => import('../pages/Following'))
const MyCourses = lazy(() => import('../pages/MyCourses'))
const MeetingHistory = lazy(() => import('../pages/MeetingHistory'))
const ForumsAndGroups = lazy(() => import('../pages/ForumsAndGroups'))

//Exams
const Exams = lazy(() => import('../layout/Exams'))
const ExamsList = lazy(() => import('../pages/ExamsList'))
const OngoingExam = lazy(() => import('../pages/OngoingExam'))







function useDashboardRoute() {
    return (
        <Route path='dashboard' element={<DashboardLayout/>}>
            <Route path='/dashboard/home' element={<Dashboard/>} />

            <Route path='/dashboard/invite_friends' element={<InviteFriends/>}/>

            {/* NavBar Route */}
            <Route path='/dashboard/cart' element={<Cart/>} />
            <Route path='/dashboard/instant_chat' element={<Chat/>}/>

            {/* Schedule */}
            <Route path='/dashboard/schedule' element={<Schedule/>} />

            {/* Courses */}
            <Route path='/dashboard/courses' element={<Courses/>}>
              <Route index element={<AllCourses/>}/>
              <Route path='/dashboard/courses/preview/:id' element={<CoursePreview/>}/>
              <Route path='/dashboard/courses/display/:id' element={<CourseDisplay/>}/>
              <Route path='/dashboard/courses/checkout_session/:id' element={<CourseCheckout/>}/>
              <Route path='/dashboard/courses/payment_session/:id' element={<CoursePayment/>}/>
            </Route>

            {/* Profile */}
            <Route path='/dashboard/account_profile' element={<Profile/>} />

            {/* Activity */}
            <Route path='/dashboard/activity' element={<Activity/>} >
                <Route index element={<You/>} />
                <Route path='/dashboard/activity/following' element={<Following/>}/>
                <Route path='/dashboard/activity/my_courses' element={<MyCourses/>}/>
                <Route path='/dashboard/activity/meeting_history' element={<MeetingHistory/>}/>
                <Route path='/dashboard/activity/forums_groups' element={<ForumsAndGroups/>}/>
            </Route>

            {/* Live Classes */}
            <Route path='/dashboard/live_classes' element={<LiveClasses/>} >
                <Route index element={<DisplayLiveClasses/>} />
                <Route path='/dashboard/live_classes/:id' element={<ClassLiveVideo/>} />
            </Route>

            {/* Exams */}
            <Route path='/dashboard/exams' element={<Exams/>}>
                <Route index element={<ExamsList/>} />
                <Route path='/dashboard/exams/:id' element={<OngoingExam/>} />
            </Route>


        </Route>
    )
}

export default useDashboardRoute
