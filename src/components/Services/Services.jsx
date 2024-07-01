import React from 'react'
import { services } from '../../CommonData/Common';
const Services = () => {

    return (
        <div className=' flex flex-col text-center xl:flex xl:flex-row xl:justify-evenly xl:p-20'>
            {
                services.map((data, index, arr)=>{
                    const { image, title1, title2 } = data;
                    return (
                        <div className=' flex flex-col items-center shadow-inner m-3 p-2 text-center xl:m-6 xl:text-center  xl:items-center xl:flex xl:flex-col xl:w-80 '>
                            <img src={image} alt="" className=' bg-zinc-900 p-2 w-16 h-16 object-cover rounded-full xl:w-24 xl:h-24 xl:object-contain xl:bg-zinc-900 xl:p-4 xl:rounded-full xl:m-2 ' />
                            <h2 className=' font-serif xl:text-lg xl:font-serif xl:p-2'>{title1}</h2>
                            <h3 className=' font-mono xl:font-semibold xl:text-sm xl:p-2'>{title2}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Services