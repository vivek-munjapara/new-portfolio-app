"use client"

import React, { useState } from "react";
import pic from "../../public/pro-pic.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import DarkMode from "./DarkMode";

const Header = () => {
   const [menu, setMenu] = useState(false);
   const navItems = [
      {
         id: 1,
         text: "Home",
      },
      {
         id: 2,
         text: "About",
      },
      {
         id: 3,
         text: "Projects",
      },
      {
         id: 4,
         text: "Experience",
      },
      {
         id: 5,
         text: "Contact",
      },
   ];
   return (
      <>
         <div className="max-w-screen-2xl container mx-auto sm:px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black backdrop-blur-lg backdrop-saturate-150 bg-opacity-50 dark:bg-opacity-50">
            <div className="flex justify-between items-center h-16 px-4 sm:px-0">
               <div className=" flex space-x-2">
                  <Image src={pic} className="h-12 w-12 rounded-full" alt="Tej R" />
                  <h2 className="font-semibold text-xl cursor-pointer">
                     <Link href={'/'}>
                        <span className="PlayfairDisplay">&lt; Vivek's<span className="text-red-500 "> Portfolio </span>/&gt;</span>
                        <span className="text-sm tracking-wide block">Frontend Developer / React Developer</span>
                     </Link>
                  </h2>
               </div>
               {/* desktop navbar */}
               <div className="flex flex-wrap">
                  <ul className="hidden md:flex space-x-8">
                     {navItems.map(({ id, text }) => (
                        <li
                           className="hover:scale-105 duration-200 cursor-pointer"
                           key={id} >
                           <Link href={`#${text}`} className="active" >
                              {text}
                           </Link>
                        </li>
                     ))}
                  </ul>
                  <div onClick={() => setMenu(!menu)} className="md:hidden">
                     {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                  </div>
                  <div className="hidden lg:inline-block ml-4 -mt-1">
                     <button className="bg-red-500 px-6 py-1 rounded-md text-white hover:bg-red-600 duration-200">
                        <Link href={'#Contact'}>Hire Me</Link>
                     </button>
                  </div>
                  <div><DarkMode /></div>
               </div>
            </div>
            {/* mobile navbar */}
            {menu && (
               <div className="bg-white dark:bg-black">
                  <ul className="md:hidden flex flex-col h-[calc(100dvh-64px)] sm:h-screen items-center justify-center space-y-3 text-xl w-full">
                     {navItems.map(({ id, text }) => (
                        <li
                           className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                           key={id} >
                           <Link onClick={() => setMenu(!menu)}
                              href={`#${text}`} className="active" >
                              {text}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            )}
         </div>
      </>
   );
}


export default Header