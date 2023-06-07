import { Link } from "react-router-dom";
import "./ProposalAccepted.css";

export default function ProposalAccepted() {
  return (
    <div className="home">
      <article>
        <p>
          Thank you for allowing us to help you with your project! We have
          provided all your information to one of our mentors who will contact
          you soon.
        </p>
        <p>
          In the meantime check out how we are impacting the community with our
          cause:
        </p>
      </article>
      <Link to="/our-impact" className="button-link">
        Our Impact
      </Link>
    </div>
  );
}
