import React from 'react'

const Btn = ({ title="Login", styl, func }) => {
  return (
    <button onClick={func} className={`cursor-pointer font-medium py-1 px-4 rounded-full capitalize ${styl} transition-all ease-in-out duration-300`}> {title} </button>
  )
}

export default Btn
