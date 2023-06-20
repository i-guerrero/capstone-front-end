import "./Home.css";
// import { useState } from "react";
// import welcomeF from "./welcomeF.png";
import devteam from "./undraw_engineering_team_a7n2 (1).svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/modal";

function ConfirmAuthModal({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <div className="w-100 d-flex flex-column justify-content-between align-items-center">
          <h2 className="text-center mb-3">You must be authenticated</h2>

          <button className="btn btn-success w-50" onClick={handleClose}>
            Go to sign in
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function Home({ profileUser }) {
  const [authModal, setAuthModal] = useState(false);
  const navigate = useNavigate();
  const isAuth = Boolean(profileUser?.id);

  function handleNavigateToAuthPage(route) {
    if (isAuth) {
      navigate(route);
      return;
    }

    setAuthModal(true);
  }

  return (
    <div className="home container d-flex flex-column justify-content-center align-items-center">
      <div className="grid-container">
        <div className="grid-item">
          <span id="title"></span>
          <h1>"The greatest impact we have is when we come together."</h1>
          <h4>
            We are a community of developers of all stages and nonprofits
            collaborating together to create web applications with purpose.
          </h4>
        </div>
        <div className="grid-item">
          <img src={devteam} alt="devteam" />
        </div>
      </div>
      <div className="buttons-container">
        <div
          onClick={() => handleNavigateToAuthPage("/mentor-accepted")}
          className="home-button"
        >
          Join Mentors{" "}
          {/* <span
            className="fa-solid fa-up-right-from-square fa-2xs"
            style={{ color: "#292e74" }}
          ></span> */}
        </div>
        <div
          onClick={() => handleNavigateToAuthPage("/projects")}
          className="home-button"
        >
          Join Mentees{" "}
          {/* <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{ color: "#292e74" }}
          ></span> */}
        </div>
        <div
          onClick={() => handleNavigateToAuthPage("/proposals-new")}
          className="home-button"
        >
          Join Non-profits{" "}
          {/* <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{ color: "#292e74" }}
          ></span> */}
        </div>
      </div>

      <ConfirmAuthModal
        open={authModal}
        handleClose={() => setAuthModal(false)}
      />
    </div>
  );
}
