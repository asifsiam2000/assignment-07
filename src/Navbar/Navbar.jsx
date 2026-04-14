'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    const pathName = usePathname();
    const link = <>
        <li>
            <Link href='/' className={pathName === '/' ? "bg-[#244D3F] text-white px-4 rounded py-2 flex items-center" : "btn flex items-center"}>
               <IoMdHome ></IoMdHome> Home</Link>
        </li>
        <li className="flex justify-between items-center">
            <Link href='/timeline' className={pathName === '/timeline' ? "bg-[#244D3F] text-white flex items-center px-4 rounded py-2" : "btn flex items-center"}>
               <span><MdOutlineAccessTime></MdOutlineAccessTime></span> <span>Timeline</span></Link>
        </li>
        <li>
            <Link href='/stats' className={pathName === '/stats' ? "bg-[#244D3F] text-white flex gap-1 items-center px-4 rounded py-2" : "btn gap-1 flex items-center"}>
          
            <TfiStatsUp></TfiStatsUp>
            Stats</Link>
        </li>
    </>
  return (
    <div className=" shadow">
      <div className="navbar bg-base-100 container mx-auto">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            
          </div>
          <h3 className="text-xl font-bold">keen<span className="font-light">Keeper</span></h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="navbar-end gap-4">
        <ul className="flex gap-5 items-center">
                {link}      
          </ul >
        </div>
      </div>
    </div>
  );
};

export default Navbar;
