import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div>
        <nav class="  navbar bg-body-tertiary fixed-top p-3 justify-around">
          <div class="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Yaarana Cafa&Restaurant.
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon w-6"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                  Yaarana Cafa&Restaurant
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <NavLink
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      HOME
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to="/reservation" className="nav-link">
                      RESERVATION
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/menu" className="nav-link">
                      MENU
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-link">
                      BLOG
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
