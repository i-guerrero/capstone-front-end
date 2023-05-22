import { Link } from "react-router-dom";
import "./MentorAccepted.css";

export default function MentorAccepted() {
  return (
    <div className="home">
      <article>
        Thank you for joining our community and impacting this proposal with
        your experience! Please contact [name of the organization] through one
        of their channels [put channels here]...... After that please fill out
        the form below to publish the technical project and join new developers
        in this adventure.
      </article>
      <Link to="/mentors-new" className="button-link">
        Project Form
      </Link>
    </div>
  );
}
