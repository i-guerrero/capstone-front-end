import { Link } from "react-router-dom";
import "./NavBar.css";

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

        <nav>
          <ul>
            <li>
              <Link to="/for-non-profits">For non-profits</Link>
            </li>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/our-impact">Our Impact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
