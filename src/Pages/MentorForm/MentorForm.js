import "./MentorForm.css";
import survey from "./survey.svg";

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

    // console.log(newProjectForm, "newprojectForm mentorPage");

    // const acumulatedReview = {
    //   ...newProjectForm,
    //   newProjectForm,
    // };

    createNewProjects(newProjectForm).then((newProjectFormEnd) => {
      navigate("/projects");
    });
  }

  return (
    <div className="project-form">
      <header className="upsert-form-header">
        <h1>Welcome Mentors!</h1>
        <h4>Fill out our 5-minute project proposal form...</h4>
      </header>
      <div className="grid-container">
        <div className="form-container grid-item">
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
              <label htmlFor="description">
                Numbers of developers needed:{" "}
              </label>
              <textarea
                className="text-area"
                rows={1}
                type="text"
                id="description"
                value={newProjectForm.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="date_to_complete">Date to complete:</label>
              <input
                className="text-area"
                type="date"
                id="date_to_complete"
                value={newProjectForm.date_to_complete}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="trello">Trello link:</label>
              <textarea
                className="text-area"
                rows={1}
                type="text"
                id="trello"
                value={newProjectForm.trello}
                onChange={handleInputChange}
              />
            </div>
            <input className="submit-button" type="submit" />
          </form>
        </div>
        <div className="grid-item">
          <img src={survey} alt="surveyIcon" />
        </div>
      </div>
    </div>
  );
}
