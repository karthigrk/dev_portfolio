import React from "react";
import { FaAngleLeft, FaAngleRight, FaDiamond } from "react-icons/fa6";
import NavMenus from "./NavMenus";

function NavBar() {
  return (
    <div className="py-8">
      <div className="flex flex-row items-center h-10">
        <div className="basis-2/4">
          <div className="w-fit flex flex-row p-1">
            <FaAngleLeft />
            <FaDiamond />
            <FaAngleRight />
          </div>
        </div>
        <div className="basis-2/4">
          <div className="flex justify-center">
            <NavMenus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
