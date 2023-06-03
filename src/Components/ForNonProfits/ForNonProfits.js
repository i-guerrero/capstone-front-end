import "./ForNonProfits.css";
import { Link } from "react-router-dom";
import teamworkImg from "./brooke-cagle--uHVRvDr7pg-unsplash.jpeg";
import pairLogo from "./undraw_pair_programming_re_or4x.svg";
export default function ForNonProfits() {
  return (
    <div className="home">
      <div className="profit-container">
        <div className="profit-item">
          <h2>
            "Keep your eyes on the mission. <br />
            We handle the rest with precision."
          </h2>
          <img className="mke-chge" src={teamworkImg} alt="teamworkImg" />
        </div>
        <div className="profit-item">
          <img className="pair-logo" src={pairLogo} alt="pair-prog-logo" />
          <h3>
            We take vetted volunteers and build a team to cater your specific
            needs.
          </h3>
        </div>
      </div>
      <div className="contact-container">
        <p className="contact">Be contacted by one of our mentors...</p>

        <Link to="/proposals-new">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}
