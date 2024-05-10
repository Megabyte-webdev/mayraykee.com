import React, { useState } from 'react'
import LoginForm from '../components/Auth/LoginForm'
import { toast } from 'react-toastify'
import { onSuccess } from '../utils/notifications/OnSuccess'
import { onFailure } from '../utils/notifications/OnFailure'


const getLoginVersion = (version) => {
    switch(version){
      case 1: return {
          bgImage: 'bg-login-background',
          bgSize: 'bg-[length:100%_120%]',
          position: 'left-[20%] top-[20%]',
      }
      case 2: return {
          bgImage: 'bg-login-background',
          bgSize: 'bg-[length:100%_120%]',
          position: 'right-[20%] top-[20%]',
      }
      case 3: return {
          bgImage: 'bg-login-background2',
          bgSize: 'bg-contain',
          position: 'left-[20%] top-[20%]',
      }
    }
 }

function Login() {
   const [rememberMe, setRememberMe] = useState(false)
   const [loginDetails, setLoginDetails] = useState({
    email_phone: '',
    password: ''
   })

   const [version, setVersion] = useState(getLoginVersion(1))

   const toogleRememberMe = () => setRememberMe(!rememberMe)

   const handleOnSubmit = (e) => {
    e.preventDefault()
     console.log(loginDetails)
   }


  


    return (
        <main id='login-Wrapper' className={`h-screen w-screen flex bg-center items-start justify-center relative ${version.bgSize} ${version.bgImage}`}>
            <div className='flex gap-[15px] pt-[10px] text-white text-sm font-semibold'>
                <button onClick={() => setVersion(getLoginVersion(1))} className='py-[5px] bg-green rounded-[10px] px-[5px]'>
                    Version One
                </button>
                <button onClick={() => setVersion(getLoginVersion(2))} className='py-[5px] bg-green rounded-[10px] px-[5px]'>
                    Version Two
                </button>
                <button onClick={() => setVersion(getLoginVersion(3))} className='py-[5px] bg-green rounded-[10px] px-[5px]'>
                    Version Three
                </button>
            </div>
            <LoginForm
            version={version}
            rememberMe={rememberMe}
            toogleRememberMe={toogleRememberMe}
            handleOnSubmit={handleOnSubmit}
            setLoginDetails={setLoginDetails}
            />
        </main>
    )
}

export default Login
