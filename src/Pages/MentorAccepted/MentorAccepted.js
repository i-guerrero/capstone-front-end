import { Link } from "react-router-dom";
import "./MentorAccepted.css";

export default function MentorAccepted() {
  return (
    <div className="home">
      <article class="container mb-5">
        <h1>
          See all these Non-Profits Organization which you can collaborate with
          now!
        </h1>
      </article>
      <div className="d-flex justify-content center">
        <Link to="/mentors-new" className="home-button mx-auto">
          Project Form
        </Link>
      </div>
    </div>
  );
}



