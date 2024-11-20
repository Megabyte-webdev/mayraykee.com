import React, {memo} from 'react'
import { useNavigate } from 'react-router-dom'

function SideBarOptionCard({option, state, dispatch}) {

    const navigate = useNavigate()

    const handleOnClick = () => {
        dispatch({type: option.title, payload: option})
        navigate(option.route)
    }

    return (
<<<<<<< HEAD
        <li onClick={handleOnClick} className={`flex w-[80%] cursor-pointer duration-100 h-[8%] justify-start gap-[10%] pl-[10px] p-[5px] items-center ${state?.title === option?.title ? 'bg-green text-white shadow-lg font-semibold rounded-[15px]' : 'hover:scale-105 text-gray-800'}`}>
            <img className='h-[25px]' src={state.title === option.title ? option.activeIcon : option.inactiveIcon}/>
            <span>{option.title}</span>
=======
        <li onClick={handleOnClick} className={`flex w-[80%] cursor-pointer   duration-100 h-[8%] justify-start gap-[10%] pl-[10px] p-[5px] items-center ${state.title === option.title ? 'bg-green text-white shadow-lg font-semibold rounded-[15px]' : 'hover:scale-105'}`}>
            <img className='h-[25px]' src={state.title === option.title ? option.activeIcon : option.inactiveIcon}/>
            {option.title}
>>>>>>> main
        </li>
    )
}

export default memo(SideBarOptionCard)
