import "./ForNonProfits.css";
import { Link } from "react-router-dom";

import pairLogo from "./undraw_pair_programming_re_or4x.svg";
export default function ForNonProfits() {
  return (
    <div className="home bg-light">
      <div className="container">
        <div className="grid-container">
          <div className="grid-item d-flex flex-column gap-3">
            <span id="title"></span>
            <h1>
              {" "}
              "Keep your eyes on the mission. 
              We handle the rest with precision."
            </h1>
            <h4 className="fw-normal">
              We take vetted volunteers and build a team to cater your specific
              needs.
            </h4>
          </div>

          <div className="grid-item">
            <img src={pairLogo} alt="pair-prog-logo" />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <Link to="/proposals-new">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
