import React, { lazy } from 'react'
import { Route } from 'react-router-dom'
import InviteFriends from '../pages/InviteFriends'


//Routes
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Courses = lazy(() => import('../layout/Courses'))
const Profile = lazy(() => import('../layout/ProfileDetails'))
const InviteComponent = lazy(() => import('../components/dashboard/InviteComponent'))


function useDashboardRoute() {
    return (
        <Route path='/' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='/invite_friends' element={<InviteFriends/>}/>
            <Route path='/courses' element={<Courses/>} />
            <Route path='/account_profile' element={<Profile/>} />
        </Route>
    )
}

export default useDashboardRoute
