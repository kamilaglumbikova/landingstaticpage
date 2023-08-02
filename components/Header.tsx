import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed left-0 right-0 bg-white z-10">
      <div className="containerWrapper flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            width={195}
            height={37}
            alt="Logo"
            className="w-[128px] lg:w-[195px]"
          />
          <div className="ml-[100px] h-11 items-center hidden lg:flex">
            {NavLinks.map((link) => (
              <Link
                className="mx-5 hover:text-darkGreen"
                key={link.key}
                href={link.href}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="h-11 flex items-center gap-7 lg:gap-[35px]">
          <span className="hidden lg:block">Login</span>
          <span className="font-bold text-darkGreen relative text-sm lg:text-base">
            Get Started
            <Image
              src="/undericon.svg"
              width={92}
              height={6}
              alt="underline"
              className="absolute left-0"
            />
          </span>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
