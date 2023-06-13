import React from "react";
import "./Footer.css";


import { FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { AiFillTwitterSquare } from "react-icons/ai";



export default function Footer() {
  return (
    <div className="footer py-3">
      <div className="social-media">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} fill="white" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterSquare size={24} fill="white" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiYoutubeLine size={28} fill="white" />
        </a>
      </div>
    </div>
  );
}
