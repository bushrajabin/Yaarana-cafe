import React, { Component } from "react";

const NavBar = () => {
  const links = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "ABOUT",
    },
    {
      id: 3,
      title: "MENU",
    },
    {
      id: 4,
      title: "BLOG",
    },

    {
      id: 5,
      title: "CONTACT",
    },
  ];
  return (
    <nav className=" xl:flex xl:flex-row xl:justify-evenly xl:p-5 xl:items-center">
      <h2 className=" xl:text-xl xl:text-slate-950 xl:font-bold xl:cursor-pointer">
        Yaarana Cafa&Restaurant.
      </h2>
      <div className=" xl:flex xl:flex-row ">
        {links.map((data, index, arr) => {
          const { id, title } = data;
          return (
            <div>

              <a
                href=""
                className=" m-4 font-extralight tracking-widest
               capitalize
                inline-block
                 text-xl
                  relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1.5
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-slate-500
                before:via-slate-100
                before:to-zinc-300
                hover:before:w-full
                hover:before:opacity-100
                "
              >
                {title}
              </a>
            </div>
          );
        })}
      </div>

      {/* <div className="cursor-pointer">
            <img src="./Images/menu.png" alt="" className="w-100 h-10" />
        </div> */}
    </nav>
  );
};

export default NavBar;
