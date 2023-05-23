import "./ForNonProfits.css";
import { Link } from "react-router-dom";
import MakeChange from "./makeChangePNG.png";
import pairLogo from "./undraw_pair_programming_re_or4x.svg";
export default function ForNonProfits() {
  return (
    <div className="home">
      <div className="profit-container">
        <div className="profit-item">
          <h1> Accelerate your cause!</h1>
          <img className="pair-logo" src={pairLogo} alt="pair-prog-logo" />
          <h3>
            We take vetted volunteers and build a team to cater your specific
            needs.
          </h3>
          <h5>
            "Keep your eyes on the mission... <br />
            we handle the rest with precision."
          </h5>
        </div>
        <div className="profit-item">
          <img className="mke-chge" src={MakeChange} alt="makeChange" />
        </div>
      </div>
      <div className="contact-container">
        <p className="contact">Be contacted by one of our mentors</p>
        <Link to="/proposals-new">
          <span className="button-link">Get Started</span>
        </Link>
      </div>
    </div>
  );
}
