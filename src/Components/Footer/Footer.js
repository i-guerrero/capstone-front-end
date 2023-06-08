import React from "react";
import "./Footer.css";

import instagramLogo from "./icons-instagram.jpeg";
import twitterLogo from "./twitter-icon-design.jpeg";
import youtubeLogo from "./youtube-icon.jpeg";

export default function Footer() {
  return (
    <div className="footer py-3">
      <div className="social-media">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramLogo} alt="Instagram" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtubeLogo} alt="YouTube" />
        </a>
      </div>
    </div>
  );
}
