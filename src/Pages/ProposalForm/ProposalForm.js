import "./ProposalForm.css";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

import { createNewProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";

function ConfirmModal({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <div className="w-100 d-flex flex-column justify-content-between align-items-center">
          <h2 className="text-center mb-3">
            Proposal was registered successfully!
          </h2>

          <button className="btn btn-success w-50" onClick={handleClose}>
            Go to proposals list
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function ProposalForm({ profileUser }) {
  const [confirmModal, setConfirmModal] = useState(false);
  const navigate = useNavigate();

  const [newProposalForm, setNewProposalForm] = useState({
    title: "",
    description: "",
    impact: "",
  });

  function handleInputChange(event) {
    setNewProposalForm({
      ...newProposalForm,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createNewProposals({
      ...newProposalForm,
      non_profit_id: profileUser.id,
    }).then(setConfirmModal(true));
    // console.log(newProposalForm, "log newProposalForm in proposalFOrm.js");
    // .then((newProposalFormEnd) => {
    //   navigate("/proposal-accepted");
    //   console.log(newProposalFormEnd, "log newProposalFormEnd in ProposalForm");
    // });
  }
  function handleCloseModal() {
    navigate("/proposals");
    setConfirmModal(false);
  }

  return (
    <div className="proposal-form">
      <header className="upsert-form-header">
        <div className="form-text">
          {" "}
          <h1>Welcome NonProfits!</h1>
          <h4>Please fill out our 5-minute project proposal form...</h4>
        </div>
      </header>

      <div className="form-container">
        <form className="upsert-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Project Title:</label>
            <input
              type="text"
              id="title"
              value={newProposalForm.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">
              Description of web application needed:{" "}
            </label>
            <textarea
              className="text-area"
              rows={5}
              type="text"
              id="description"
              value={newProposalForm.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="impact">
              Potential Project Impact in the community:
            </label>
            <textarea
              className="text-area"
              rows={5}
              type="text"
              id="impact"
              value={newProposalForm.impact}
              onChange={handleInputChange}
            />
          </div>
          <input
            className="submit-button-proposal-form"
            type="submit"
            value="Get Help Now!"
          />
        </form>
      </div>

      <ConfirmModal open={confirmModal} handleClose={handleCloseModal} />
    </div>
  );
}
