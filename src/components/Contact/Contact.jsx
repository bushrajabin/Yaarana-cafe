import React from "react";
import ReactDOM from "react-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className=" mt-32 xl:m-40 ">
      <div className=" bg-slate-300 m-2 w-auto text-center xl:bg-slate-200 xl:fle xl:flex-col xl:text-center  xl:p-10 rounded-xl ">
        <div className="xl:p-10 p-4 ">
          <h1 className=" underline xl:underline font-serif xl:text-2xl">
            {" "}
            CONTACT-US
          </h1>
          <h2 className=" text-xl p-1 font-mono xl:text-xl xl:p-3">
            Yaarana Rooftop | Cafe & Restaurant
          </h2>
        </div>

        <div className=" xl:p-3">
          <h3 className="xl:text-2xl font-mono justify-center flex flex-row items-center">
            <FaPhone className="text-sm" />  9100000000000
          </h3>
          <p className="font-sans :xl:text-xl xl:font-mono p-2 flex flex-row justify-center items-center">
            <FaLocationDot /> 7R5F+3J2, Kishanganj - Bahadurganj Rd,
            Bahadurganj, Bihar 855115
          </p>
        </div>

        <div>
          <h2 className="xl:text-2xl font-bold p-2 underline">
            Tuesday-Friday: 10am-11pm
          </h2>
        </div>

        <div className=" flex flex-row justify-center p-3 xl:m-3">
          <a href="https://www.instagram.com/yaarana.cafe/" target="_blank">
            {" "}
            <FaInstagram className="text-2xl m-2" />
          </a>
          <a href="https://www.instagram.com/yaarana.cafe/" target="_blank">
            <FaFacebook className="text-2xl m-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
