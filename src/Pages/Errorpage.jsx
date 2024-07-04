import React from 'react'
import { useNavigate } from 'react-router-dom'

function Errorpage() {
    const navigate=useNavigate();

    const backToHome=()=>{
        navigate('/')
    }
    return (
        <>
        <div className=' flex flex-col justify-center items-center pt-20 '>
       <img src="Images/error.png" alt="" />
       <button className='bg-slate-500 p-2  ' onClick={backToHome}>BACK TO HOME</button>
        </div>
        
        </>
      
    )
}

export default Errorpage