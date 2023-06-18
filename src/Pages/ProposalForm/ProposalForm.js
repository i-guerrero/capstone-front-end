import "./ProposalForm.css";

import { useState } from "react";
import ConfirmationModal from "../Components/ConfirmationModal";
import { Carousel } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

import { createNewProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";

export default function ProposalForm({
  profileUser,
  confirmModal,
  setConfirmModal,
  allUsers,
}) {
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
    navigate("/profile");
    setConfirmModal(false);
  }

  function filterUsersByMentor(AllUsers) {
    const mentors = AllUsers.filter((users) => {
      return users.user_type === "Mentor";
    });
    return mentors;
  }

  const reduceMentors = (acc, cur, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(cur);
    console.log(acc);
    return acc;
  };

  console.log(filterUsersByMentor(allUsers), "nonProfits Mentors only");

  return (
    <div className="proposal-form">
      <header className="upsert-form-header">
        <div className="form-text">
          {" "}
          <h1>Welcome NonProfits!</h1>
          <h4>Please fill out our 5-minute project proposal form...</h4>
        </div>
      </header>
      <ConfirmationModal
        confirmed={confirmModal}
        closeModal={handleCloseModal}
        profileUser={profileUser}
      />
      <div className="form-container">
        <form className="upsert-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="title">Proposal Name<span id="asterisk">*</span><br/>
            <span className="guide">Give your proposal a title we can use when referring to it.</span></label>
            <input
              className="text-area"
              type="text"
              id="title"
              value={newProposalForm.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="description">
            Project summary & Impact<span id="asterisk">*</span> <br/> <span className="guide">Please give us a 2-5 sentence overview of what your project is and how it will further the mission of your nonprofit.</span>
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
              Potential Project Impact in the community<span id="asterisk">*</span>
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
    </div>
  );
}
