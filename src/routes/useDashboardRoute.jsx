import React, { lazy } from 'react'
import { Route } from 'react-router-dom'


//Routes
const DashboardLayout = lazy(() => import('../layout/DashboardLayout'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Courses = lazy(() => import('../layout/Courses'))
const Profile = lazy(() => import('../layout/ProfileDetails'))


function useDashboardRoute() {
    return (
        <Route path='/' element={<DashboardLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/account_profile' element={<Profile/>} />
        </Route>
    )
}

export default useDashboardRoute
