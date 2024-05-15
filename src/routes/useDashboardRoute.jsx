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

function useDashboardRoute() {
    return (
        <Route path='/' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='/invite_friends' element={<InviteFriends/>}/>
            <Route path='/courses' element={<Courses/>} />
            <Route path='/account_profile' element={<Profile/>} />

            <Route path='/activity' element={<Activity/>} >
                <Route index element={<You/>} />
                <Route path='/activity/following' element={<Following/>}/>
            </Route>
        </Route>
    )
}

export default useDashboardRoute
