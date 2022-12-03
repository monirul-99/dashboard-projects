import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiOutlineHome,
  HiLightBulb,
  HiRss,
  HiOutlineClock,
  HiOutlineColorSwatch,
  HiOutlineLocationMarker,
  HiMap,
} from "react-icons/hi";
import { MdVilla } from "react-icons/md";
import { IconContext } from "react-icons";

const Drawer = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu  w-44 lg:w-64 bg-[#1E1F24] text-base-content py-16 space-y-5">
          <Link className="bg-[#307AF3] w-4/5 mx-auto rounded-md text-white ">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiOutlineHome />
              </IconContext.Provider>

              <span>Dashboard</span>
            </p>
          </Link>

          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiLightBulb />
              </IconContext.Provider>

              <span>Intensity</span>
            </p>
          </Link>

          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiRss />
              </IconContext.Provider>

              <span>Relevance</span>
            </p>
          </Link>

          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiOutlineClock />
              </IconContext.Provider>

              <span>Year</span>
            </p>
          </Link>

          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiOutlineColorSwatch />
              </IconContext.Provider>

              <span>Topics</span>
            </p>
          </Link>
          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiOutlineLocationMarker />
              </IconContext.Provider>

              <span>Country</span>
            </p>
          </Link>
          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <HiMap />
              </IconContext.Provider>

              <span>Region</span>
            </p>
          </Link>
          <Link className="w-4/5 mx-auto rounded-md text-white">
            <p className="flex items-center justify-start ml-5 space-x-4 py-3">
              <IconContext.Provider value={{ size: 23, color: "white" }}>
                <MdVilla />
              </IconContext.Provider>

              <span>City</span>
            </p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
