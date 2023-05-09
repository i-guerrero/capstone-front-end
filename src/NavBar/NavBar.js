import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <div>
        <header className="navbar">
          <article>
            <h1>
              <Link to="/">
                <span>Dev-Impact App</span>
              </Link>
            </h1>
          </article>
        </header>
        <nav>
          <ul>
            <Link to="how-it-works">
              <li>How it works</li>
            </Link>
            <Link to="our-impact">
              <li>Our Impact</li>
            </Link>
          </ul>
        </nav>
      </div>
    );

}
