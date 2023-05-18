import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./logoAppDev.png";

export default function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);

  function handleToggleClick() {
    setToggleOpen(!toggleOpen);
  }

  function handleButton() {
    setToggleOpen(false);
  }
  return (
    <div>
      <header className="navbar">
        <article className="navbar-logo">
          <Link onclick={handleButton} to="/">
            <img src={logo} alt="logo" />
          </Link>
        </article>

        <nav>
          <ul>
            <li>
              <Link className="toggle-button" onClick={handleToggleClick}>
                <span>For developers</span>
              </Link>
              {toggleOpen && (
                <ul className="submenu">
                  <li>
                    <Link onclick={handleButton} to="/experts">
                      Experts
                    </Link>
                  </li>
                  <li>
                    <Link onclick={handleButton} to="/non-experts">
                      Non-experts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link onclick={handleButton} to="/for-non-profits">
                For non-profits
              </Link>
            </li>
            <li>
              <Link onclick={handleButton} to="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link onclick={handleButton} to="/our-impact">
                Our Impact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
