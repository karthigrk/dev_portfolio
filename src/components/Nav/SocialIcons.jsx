import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function SocialIcons() {
  return (
    <ul className="flex flex-row space-x-4">
      <li>
        <a href="#">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="#">
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;
