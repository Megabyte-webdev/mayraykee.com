import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import InviteFriends from '../pages/InviteFriends'


//Routes
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Courses = lazy(() => import('../layout/Courses'))
const Profile = lazy(() => import('../layout/ProfileDetails'))

//Activity
const Activity = lazy(() => import('../layout/Activity'))
const You = lazy(() => import('../pages/You'))
const Following = lazy(() => import('../pages/Following'))
const MyCourses = lazy(() => import('../pages/MyCourses'))
const MeetingHistory = lazy(() => import('../pages/MeetingHistory'))

//Live Classes
const LiveClasses = lazy(() => import('../layout/LiveClasses'))
const DisplayLiveClasses = lazy(() => import('../pages/DisplayLiveClasses'))
const ClassLiveVideo = lazy(() => import('../pages/ClassLiveVideo'))


const Cart = lazy(() => import('../pages/Cart'))
const AllCourses = lazy(() => import('../pages/AllCourses'))
const CoursePreview = lazy(() => import('../pages/CoursePreview'))
const CourseDisplay = lazy(() => import('../pages/CourseDisplay'))
const CourseCheckout = lazy(() => import('../pages/CourseCheckout'))
const CoursePayment = lazy(() => import('../pages/CoursePayment'))
const Schedule = lazy(() => import('../pages/Schedule'))

function useDashboardRoute() {
    return (
        <Route path='dashboard' element={<DashboardLayout/>}>
            <Route path='/dashboard/home' element={<Dashboard/>} />

            <Route path='/dashboard/invite_friends' element={<InviteFriends/>}/>

            <Route path='/dashboard/courses' element={<Courses/>}>
              <Route index element={<AllCourses/>}/>
              <Route path='/dashboard/courses/preview/:id' element={<CoursePreview/>}/>
              <Route path='/dashboard/courses/display/:id' element={<CourseDisplay/>}/>
              <Route path='/dashboard/courses/checkout_session/:id' element={<CourseCheckout/>}/>
              <Route path='/dashboard/courses/payment_session/:id' element={<CoursePayment/>}/>
            </Route>

            <Route path='/dashboard/account_profile' element={<Profile/>} />

            <Route path='/dashboard/activity' element={<Activity/>} >
                <Route index element={<You/>} />
                <Route path='/dashboard/activity/following' element={<Following/>}/>
                <Route path='/dashboard/activity/my_courses' element={<MyCourses/>}/>
                <Route path='/dashboard/activity/meeting_history' element={<MeetingHistory/>}/>
            </Route>

            <Route path='/dashboard/live_classes' element={<LiveClasses/>} >
                <Route index element={<DisplayLiveClasses/>} />
                <Route path='/dashboard/live_classes/:id' element={<ClassLiveVideo/>} />
            </Route>

            <Route path='/dashboard/cart' element={<Cart/>} />


            <Route path='/dashboard/schedule' element={<Schedule/>} />

        </Route>
    )
}

export default useDashboardRoute
