import React, { useState } from 'react'
import LoginForm from '../components/Auth/LoginForm'
import { toast } from 'react-toastify'
import { onSuccess } from '../utils/notifications/OnSuccess'
import { onFailure } from '../utils/notifications/OnFailure'

function Login() {
   const [rememberMe, setRememberMe] = useState(false)
   const [loginDetails, setLoginDetails] = useState({
    email_phone: '',
    password: ''
   })

   const toogleRememberMe = () => setRememberMe(!rememberMe)

   const handleOnSubmit = (e) => {
    e.preventDefault()
     console.log(loginDetails)
   }

    return (
        <main id='login-Wrapper' className='h-screen w-screen flex bg-center relative bg-[length:100%_118%] bg-login-background'>
            <LoginForm
            rememberMe={rememberMe}
            toogleRememberMe={toogleRememberMe}
            handleOnSubmit={handleOnSubmit}
            setLoginDetails={setLoginDetails}
            />
        </main>
    )
}

export default Login
