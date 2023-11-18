import React from "react";
import { Link } from "react-router-dom";

function NavMenus() {
  return (
    <ul className="flex flex-row space-x-8">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/techstack">Tech Stack</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavMenus;
