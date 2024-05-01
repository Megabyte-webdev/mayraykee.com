import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { registration_steps_keys } from '../utils/constants'

function ProfileDetails() {

    const {state, dispatch} = useOutletContext()

    useEffect(() => {
      dispatch({type: registration_steps_keys.person_details.title, payload: registration_steps_keys.person_details})
    }, [])


    return (
        <div>
            Profile details
        </div>
    )
}

export default ProfileDetails
