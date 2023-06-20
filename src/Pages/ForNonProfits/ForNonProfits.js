import "./ForNonProfits.css";
// import teamworkImg from "./brooke-cagle--uHVRvDr7pg-unsplash.jpeg";
// import pairLogo from "./undraw_pair_programming_re_or4x.svg";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import pairLogo from "./undraw_pair_programming_re_or4x.svg";
import { useState } from "react";

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

export default function ForNonProfits({ profileUser }) {
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
          <button
            onClick={() => handleNavigateToAuthPage("/proposals-new")}
            className="get-started"
          >
            Get Started
          </button>
        </div>

        <ConfirmAuthModal
          open={authModal}
          handleClose={() => setAuthModal(false)}
        />
      </div>
    </div>
  );
}
