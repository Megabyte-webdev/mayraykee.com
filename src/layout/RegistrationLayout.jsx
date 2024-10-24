import React, { useEffect, useReducer } from 'react'
import { Outlet } from 'react-router-dom'
import RegistrationProgress from '../components/Auth/RegistrationProgress'
import { RegistrationReducer, intialProfileState } from '../reducers/RegistrationReducer';


function RegistrationLayout() {
    const [state, dispatch] = useReducer(RegistrationReducer, intialProfileState);

    const sharedData = {state: state, dispatch: dispatch}

    return (
        <main className='w-full h-screen flex flex-col sm:flex-row'>
            <div className='w-full h-60 sm:w-[50%] sm:h-screen'>
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
