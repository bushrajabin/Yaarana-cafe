import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const links = [
    { id: 1, title: "HOME", route: "/" },
    { id: 2, title: "RESERVATION", route: "/reservation" },
    { id: 3, title: "MENU", route: "/menu" },
    { id: 4, title: "BLOG", route: "/blog" },
    { id: 5, title: "CONTACT", route: "/contact" },
  ];

  const onLinkNavigate = (route) => {
    navigate(route);
  };

  const backHome = () => {
    navigate("/");
  };

  return (
    <nav className="xl:flex xl:flex-row xl:justify-evenly xl:p-5 xl:items-center xl:bg-slate-100 xl:fixed xl:w-full xl:z-10">
      <h2
        className="xl:text-xl xl:text-slate-950 xl:font-bold xl:cursor-pointer"
        onClick={backHome}
      >
        Yaarana Cafa&Restaurant.
      </h2>
      <div className="xl:flex xl:flex-row">
        {links.map((data) => {
          const { id, title, route } = data;
          return (
            <div key={id} onClick={() => onLinkNavigate(route)}>
              <a
                href={route}
                className="m-4 font-extralight tracking-widest capitalize inline-block text-xl relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-slate-500 before:via-slate-100 before:to-zinc-300 hover:before:w-full hover:before:opacity-100"
              >
                {title}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
