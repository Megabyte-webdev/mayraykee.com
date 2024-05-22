import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import InviteFriends from '../pages/InviteFriends'


//Routes
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Courses = lazy(() => import('../layout/Courses'))
const Profile = lazy(() => import('../layout/ProfileDetails'))
const Activity = lazy(() => import('../layout/Activity'))
const You = lazy(() => import('../pages/You'))
const Following = lazy(() => import('../pages/Following'))
const Cart = lazy(() => import('../pages/Cart'))
const AllCourses = lazy(() => import('../pages/AllCourses'))
const CoursePreview = lazy(() => import('../pages/CoursePreview'))
const CourseDisplay = lazy(() => import('../pages/CourseDisplay'))
const CourseCheckout = lazy(() => import('../pages/CourseCheckout'))
const CoursePayment = lazy(() => import('../pages/CoursePayment'))

function useDashboardRoute() {
    return (
        <Route path='/' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>} />

            <Route path='/invite_friends' element={<InviteFriends/>}/>

            <Route path='/courses' element={<Courses/>}>
              <Route index element={<AllCourses/>}/>
              <Route path='/courses/preview/:id' element={<CoursePreview/>}/>
              <Route path='/courses/display/:id' element={<CourseDisplay/>}/>
              <Route path='/courses/checkout_session/:id' element={<CourseCheckout/>}/>
              <Route path='/courses/payment_session/:id' element={<CoursePayment/>}/>
            </Route>

            <Route path='/account_profile' element={<Profile/>} />

            <Route path='/activity' element={<Activity/>} >
                <Route index element={<You/>} />
                <Route path='/activity/following' element={<Following/>}/>
            </Route>

            <Route path='/cart' element={<Cart/>} />

        </Route>
    )
}

export default useDashboardRoute
