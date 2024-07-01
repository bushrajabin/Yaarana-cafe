import React from 'react'
import './Footer.css'


function Footer() {
    return (

        <React.Fragment>
            <div className=' bg-gray-800 text-white xl:flex xl:flex-row xl:justify-around xl:items-center'>
                <div className=' flex flex-row items-center text-center text-sm font-mono p-3 xl:flex xl:flex-row xl:items-center xl:text-center xl:font-mono xl:gap-60'>

                    <div className="">
                        <h1> OPEN-HOURS:</h1>
                        <p> Modnay-Friday: 10am-11pm</p>
                    </div>
                    <div className="">
                        <h1>ADDRESS:</h1>
                        <p> 7R5F+3J2, Kishanganj - Bahadurganj Rd,<br /> Bahadurganj, Bihar 855115</p>
                    </div>

                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3578.1276560400634!2d87.8211818!3d26.25752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e57300602558bd%3A0x438fc2ffbd40d9f9!2sYaarana%20Restaurant!5e0!3m2!1sen!2sin!4v1719819178079!5m2!1sen!2sin" className=' w-96 p-4 xl:w-96 h-48' ></iframe>
                </div>
            </div>

            <div className=" bg-gray-800 text-white font-serif text-center p-3">
                <h3>Design By: @Bushra jabin</h3>
            </div>
        </React.Fragment>
    )
}

export default Footer