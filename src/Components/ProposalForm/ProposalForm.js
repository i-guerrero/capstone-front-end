import "./ProposalForm.css";

import { useState } from "react";
import { createNewProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";

export default function New() {
  const navigate = useNavigate();

  const [newProposalForm, setNewProposalForm] = useState({

    title: "",
    description: "",
    impact: "",
    non_profit_id: "",
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
        <h1>New Form</h1>
      </header>
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
            rows={5}
            type="text"
            id="impact"
            value={newProposalForm.impact}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
