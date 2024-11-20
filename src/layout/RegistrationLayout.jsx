import React, { useEffect, useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import RegistrationProgress from '../components/Auth/RegistrationProgress'
import { RegistrationReducer, intialProfileState } from '../reducers/RegistrationReducer';


function RegistrationLayout() {
    const [state, dispatch] = useReducer(RegistrationReducer, intialProfileState);

    const sharedData = {state: state, dispatch: dispatch}

    return (
<<<<<<< HEAD
        <main className='w-full h-screen flex flex-col sm:flex-row'>
            <div className='sticky top-0 z-100 w-full sm:w-[50%] h-screen'>
=======
        <main className='w-full h-screen flex'>
            <div className='w-[50%] h-screen'>
>>>>>>> main
            <RegistrationProgress
            state={state}
            dispatch={dispatch}
             />
            </div>

            <Outlet
            context={sharedData}
             />
        </main>
    )
}

export default RegistrationLayout
