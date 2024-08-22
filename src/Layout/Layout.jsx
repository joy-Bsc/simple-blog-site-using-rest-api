import React, { useEffect, useState } from "react";
import { postCategories } from "../APIRequest/APIRequest";
import { Link, NavLink } from "react-router-dom";

const Layout = (props) => {

 const [categories, setCategories] = useState([]);

 useEffect(() => {
    (async () => {

        setCategories(await postCategories());
    })()
    }, []);

  return (
    <>
      <div className="navbar fixed z-50 top-0 shadow bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                 {
                    categories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={"/byCategory/"+item.id}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
                    categories.map((item, index) => {
                        return (
                            <li key={index}> <NavLink  to={"/byCategory/"+item.id}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
          </ul>
        </div>
      </div>
       {props.children}
    </>
  );
};

export default Layout;
