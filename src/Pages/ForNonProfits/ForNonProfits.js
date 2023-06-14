import "./ForNonProfits.css";
// import teamworkImg from "./brooke-cagle--uHVRvDr7pg-unsplash.jpeg";
// import pairLogo from "./undraw_pair_programming_re_or4x.svg";
import NoUserModal from "../Components/NoUserModal";
import { useNavigate } from "react-router-dom";
import pairLogo from "./undraw_pair_programming_re_or4x.svg";

export default function ForNonProfits({
  profileUser,
  setUserModal,
  userModal,
}) {
  const navigate = useNavigate();

  function handleGetStarted() {
    if (!profileUser.user_type) {
      setUserModal(true);
    } else if (profileUser.user_type === "Nonprofit") {
      navigate("/proposals-new");
    }
  }

  return (
    <div className="home bg-light">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center">
        <div className="grid-container">
          <div className="d-flex flex-column gap-3 justify-content-center align-items-center ">
            <span id="title"></span>
            <h1>
              {" "}
              "Keep your eyes on the mission. We handle the rest with
              precision."
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
        <div className="contact-container">
          <button onClick={handleGetStarted} className="get-started">
            Get Started
          </button>
          <NoUserModal
            userModal={userModal}
            closeModal={() => setUserModal(false)}
          />
        </div>
      </div>
    </div>
  );
}
