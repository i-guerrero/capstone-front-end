import "./ProposalForm.css";

import { useState } from "react";

// import { useNavigate } from "react-router-dom";

export default function New() {
  // const navigate = useNavigate();

import { createNewProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";

export default function New() {
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

    console.log(newProposalForm);


    createNewProposals(newProposalForm).then((newProposalFormEnd) => {
      navigate("/experts");
      console.log(newProposalFormEnd);
    });
  }

  return (
    <div className="proposal-form">
      <header className="upsert-form-header">
        <div className="form-text">
          {" "}
          <h1>Welcome NonProfits!</h1>
          <h3>Get Started</h3>
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
          className="submit-button"
          type="submit"
          value="Get Help Now!"
        />
      </form>
      </div>
    </div>
    // </div>
  );
}
