import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./DevImpactLogo.png";

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
          <Link onClick={handleButton} to="/">
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
                    <Link onClick={handleButton} to="/experts">
                    Mentors
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleButton} to="/non-experts">
                      Mentees
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link onClick={handleButton} to="/for-non-profits">
                For non-profits
              </Link>
            </li>
            <li>
              <Link onClick={handleButton} to="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link onClick={handleButton} to="/our-impact">
                Our Impact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
