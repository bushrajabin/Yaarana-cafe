import React from 'react'
import './Footer.css'


function Footer() {
    return (
        <div className='footer-main-container'>
            <div className="left-div">
                <h1>ADDRESS:</h1>
                <p> 7R5F+3J2, Kishanganj - Bahadurganj Rd,<br /> Bahadurganj, Bihar 855115</p>
            </div>
            <div className="middle-div">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3578.1276560400634!2d87.8211818!3d26.25752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e57300602558bd%3A0x438fc2ffbd40d9f9!2sYaarana%20Restaurant!5e0!3m2!1sen!2sin!4v1719819178079!5m2!1sen!2sin" ></iframe>
            </div>
            <div className="right-div">
                <h1> OPEN-HOURS:</h1>
                <p> Modnay-Friday: 10am-11pm</p>
            </div>

        </div>
    )
}

export default Footer