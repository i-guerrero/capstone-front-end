import "./MentorForm.css";

// import { createNewProjectForm } from "./fetch";

import { useState } from "react";
import { createNewProjects } from "../../API/Project";
import { useNavigate } from "react-router-dom";

export default function New() {
  const navigate = useNavigate();
  const [newProjectForm, setNewProjectForm] = useState({
    id: "",
    technologies: "",
    num_developers: "",
    date_to_complete: "",
    trello: "",
    // status: "",
  });

  function handleInputChange(event) {
    setNewProjectForm({
      ...newProjectForm,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(newProjectForm);

    // const acumulatedReview = {
    //   ...newProjectForm,
    //   newProjectForm,
    // };

    createNewProjects(newProjectForm).then((newProjectFormEnd) => {
      navigate("/non-experts");
    });
  }

  return (
    <div className="project-form">
      <header className="upsert-form-header">
        <h1>New Form</h1>
      </header>
      <form className="upsert-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="technologies">Project technologies to use:</label>
          <input
            type="text"
            id="technologies"
            value={newProjectForm.technologies}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="description">Numbers of developers needed: </label>
          <textarea
            rows={1}
            type="number"
            id="num_developers"
            value={newProjectForm.num_developers}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="date_to_complete">Date to complete:</label>
          <input
            type="date"
            id="date_to_complete"
            value={newProjectForm.date_to_complete}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="trello">Trello link:</label>
          <textarea
            rows={1}
            type="text"
            id="trello"
            value={newProjectForm.trello}
            onChange={handleInputChange}
          />
        </div>
        {/* <div className="form-field">
          <label htmlFor="status">status:</label>
          <textarea
            rows={1}
            type="text"
            id="status"
            value={newProjectForm.status}
            onChange={handleInputChange}
          />
        </div> */}
        <br />
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}
