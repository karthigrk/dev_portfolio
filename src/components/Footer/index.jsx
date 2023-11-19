import React from "react";
import NavMenus from "../Nav/NavMenus";

function Footer() {
  return (
    <div className="flex flex-row items-center h-16 mt-4 text-sm border-t-2 border-slate-300">
      <div className="basis-3/4 px-3">
        <NavMenus />
      </div>
      <div className="basis-1/4 px-3">
        <div className="text-right">
          <p>Developed & Maintained by Karthikeyan.GR</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
