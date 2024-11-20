<<<<<<< HEAD
import React, { useReducer, useState } from 'react'
=======
import React, { useReducer } from 'react'
>>>>>>> main
import NavBar from '../components/dashboard/NavBar'
import SideBar from '../components/dashboard/SideBar'
import { DasboardReducer, intialDashboardState } from '../reducers/DasboardReducer'
import { sidebar_keys } from '../utils/constants'
import SideBarOptionCard from '../components/dashboard/SideBarOptionCard'
import { Outlet, useLocation } from 'react-router-dom'
import { getInitialDashboardState,} from '../utils/DashboardUtilMethods'


function DashboardLayout() {

    const location = useLocation()
    const [state,dispatch] = useReducer(DasboardReducer, getInitialDashboardState(location.pathname, intialDashboardState))
<<<<<<< HEAD
    const [menu, setMenu] = useState(false);
=======

>>>>>>> main
    const getSideBarOptions = () => {
        return Object.keys(sidebar_keys).map((currentKey) => {
          const currentOption = sidebar_keys[currentKey];
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
<<<<<<< HEAD
        <main className='w-[100vw] h-screen flex overflow-hidden'>
            <SideBar menu={menu} setMenu={setMenu}>
            {getSideBarOptions(state, dispatch)}
            </SideBar>

            <section className='flex-1 w-full min-h-full overflow-y-auto bg-gray-100 flex flex-col'>
            <NavBar title={state.title} menu={menu} setMenu={setMenu} />
            <Outlet/>
            </section>

=======
        <main className='w-full h-screen flex'>
       
            <SideBar>
            {getSideBarOptions(state, dispatch)}
            </SideBar>

            <section className='w-[85%] h-full bg-gray-100 flex flex-col'>
            <NavBar title={state.title}/>
            <Outlet/>
            </section>
            
>>>>>>> main
        </main>
    )
}

<<<<<<< HEAD
export default DashboardLayout
=======
export default DashboardLayout
>>>>>>> main
