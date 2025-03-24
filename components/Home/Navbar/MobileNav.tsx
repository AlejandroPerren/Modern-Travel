import { navLinks } from "@/constants/contants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type MobileNavProps = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: MobileNavProps) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-opacity duration-300 z-[1002] bg-black ${
          showNav ? "opacity-70" : "opacity-0 pointer-events-none"
        } w-full h-screen`}
      ></div>

      {/* NavLinks */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] sm:w-[60%] bg-rose-900 text-white flex flex-col justify-center space-y-6 z-[1050] transition-transform duration-500 ${navOpen} overflow-hidden`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MobileNav;
