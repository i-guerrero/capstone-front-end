import { Link } from "react-router-dom";
import "./ForNonProfits.css";

export default function ForNonProfits() {
  return (
    <div className="home">
      <article>
        Fill out the form below and be contacted by one of our mentors to
        determine with you the technology needs of your organization:
      </article>
      <Link to="/proposals-new" className="button-link">
        Proposal Form
      </Link>
    </div>
  );
}
