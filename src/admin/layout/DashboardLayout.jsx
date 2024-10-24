import React, { useReducer } from 'react'
import NavBar from '../../components/dashboard/NavBar'
import SideBar from '../../components/dashboard/SideBar'
import SideBarOptionCard from '../../components/dashboard/SideBarOptionCard'
import { Outlet, useLocation } from 'react-router-dom'
import { getInitialDashboardState,} from '../../utils/DashboardUtilMethods'
import { admin_sidebar_keys } from '../../utils/constants'
import { AdminDasboardReducer, intialAdminDashboardState } from '../../reducers/AdminDasboardReducer'


function DashboardLayout() {

    const location = useLocation()
    const [state,dispatch] = useReducer(AdminDasboardReducer, getInitialDashboardState(location.pathname, intialAdminDashboardState))

    const getSideBarOptions = () => {
        return Object.keys(admin_sidebar_keys).map((currentKey) => {
          const currentOption = admin_sidebar_keys[currentKey];
          return (
            <SideBarOptionCard
              state={state}
              dispatch={dispatch}
              option={currentOption}
              key={currentOption.title}
            />
          );
        });
      };
    return (
        <main className='w-full h-screen flex'>
       
            <SideBar>
            {getSideBarOptions(state, dispatch)}
            </SideBar>

            <section className='w-[85%] h-full bg-gray-100 flex flex-col'>
            <NavBar title={state.title}/>
            <Outlet/>
            </section>
            
        </main>
    )
}

export default DashboardLayout
