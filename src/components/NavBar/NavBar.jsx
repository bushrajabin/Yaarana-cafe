import React from "react";
import { Link, NavLink } from "react-router-dom";

// const NavBar = () => {
//   // const navigate = useNavigate();
//   const links = [
//     { id: 1, title: "HOME", route: "/" },
//     { id: 2, title: "RESERVATION", route: "/table" },
//     { id: 3, title: "MENU", route: "/*" },
//     { id: 4, title: "BLOG", route: "/*" },
//     { id: 5, title: "CONTACT", route: "/*", },
//   ];
//   return (
//     <div className="xl:flex xl:flex-row xl:justify-evenly xl:p-5 xl:items-center xl:bg-slate-100 xl:fixed xl:w-full xl:z-10">
//       <h2
//         className="xl:text-xl xl:text-slate-950 xl:font-bold xl:cursor-pointer"
//       >
//         Yaarana Cafa&Restaurant.
//       </h2>
//       <nav className="xl:flex xl:flex-row">
//         {links.map((data) => {
//           const { id, title, route } = data;
//           return (
//             <div onClick=
//             {() => onLinkNavigate(route)}>
//               <a
//                 className="m-4 font-extralight tracking-widest capitalize inline-block text-xl relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-slate-500 before:via-slate-100 before:to-zinc-300 hover:before:w-full hover:before:opacity-100"
//               >
//                 {title}
//               </a>
//             </div>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };



const NavBar = () => {
  return (
    <>

      <div>
        <nav class="  navbar bg-body-tertiary fixed-top p-3 justify-around">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Yaarana Cafa&Restaurant.</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon w-6"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Yaarana Cafa&Restaurant</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">RESERVATION</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">MENU</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">BLOG</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">CONTACT</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar