"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div>
        <div className={`${openNav ? 'opacity-20 right-0' : 'opacity-0 right-[-100%]'} fixed bg-black top-0 w-full h-screen`}/>
        <div className={`${openNav ? 'right-0' : 'right-[-100%]'} fixed bg-white top-0 w-[90vw] h-screen transition-all shadow-slate-400 lg:hidden pt-[35px] duration-500`}>
            <span onClick={() => setOpenNav(false)} className="absolute right-[30px] top-[35px]">
                <Image 
                    src="/close.png"
                    width={15}
                    height={15}
                    alt="close"
                />
            </span>
            <div>
                <div className="pl-[30px]">
                    <Image 
                        src="/logo.svg"
                        width={128}
                        height={25}
                        alt="logo"
                    />
                </div>
                <div className="flex flex-col mt-11">
                    {NavLinks.map((link) => (
                        <Link className="px-[30px] bg-white hover:text-darkGreen h-11 flex items-center hover:bg-red" key={link.key} href={link.href}>{link.text}</Link>
                    ))}
                </div>
            </div>
        </div>
      <span className="block lg:hidden cursor-pointer" onClick={() => setOpenNav(true)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="26px"
          width="26px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
        </svg>
      </span>
    </div>
  );
};

export default MobileNav;
