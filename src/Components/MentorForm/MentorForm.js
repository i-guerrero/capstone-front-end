import "./MentorForm.css";

// import { createNewProposalForm } from "./fetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function New() {
  const navigate = useNavigate();
  const [newProposalForm, setNewProposalForm] = useState({
    id: "",
    technologies: "",
    num_developers: "",
    date_to_complete: "",
    trello: "",
    // status: "",
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

    // const acumulatedReview = {
    //   ...newProposalForm,
    //   newProposalForm,
    // };

    // createNewProposalForm(newProposalForm).then((newProposalFormEnd) => {
    //   navigate("/reviews");
    // });
  }

  return (
    <div className="proposal-form">
      <header className="upsert-form-header">
        <h1>New Form</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="technologies">Project technologies to use:</label>
          <input
            type="text"
            id="technologies"
            value={newProposalForm.technologies}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Numbers of developers needed: </label>
          <textarea
            rows={1}
            type="text"
            id="description"
            value={newProposalForm.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="date_to_complete">Date to complete:</label>
          <textarea
            rows={1}
            type="text"
            id="date_to_complete"
            value={newProposalForm.date_to_complete}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="trello">Trello link:</label>
          <textarea
            rows={1}
            type="text"
            id="trello"
            value={newProposalForm.trello}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="form-field">
          <label htmlFor="status">status:</label>
          <textarea
            rows={1}
            type="text"
            id="status"
            value={newProposalForm.status}
            onChange={handleInputChange}
          />
        </div> */}
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
