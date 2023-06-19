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
      navigate("/proposals/mentees");
    });
  }

  return (
    <div className="project-form">
      <header className="upsert-form-header">
        <h1>Welcome Mentors!</h1>
        <h4>Fill out our 5-minute project proposal form...</h4>
      </header>
      <div className="grid-container-mentor">
        <div className="form-container grid-item-mentor">
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="technologies">Project technologies to use:</label>
              <input
                className="text-area"
                type="text"
                id="technologies"
                value={newProjectForm.technologies}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="num_developers">Numbers of developers needed: </label>
              <input
                min="3"
                step="1"
                max="7"
                className="text-area"
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

                className="text-area"
                type="date"
                id="date_to_complete"
                value={newProjectForm.date_to_complete}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="trello">Trello link:</label>
              <input
                className="text-area"
                rows={1}
                type="url"
                id="trello"
                value={newProjectForm.trello}
                onChange={handleInputChange}
              />
            </div>
            <br />
            <input className="submit-button" type="submit" />
          </form>
        </div>
        <div className="grid-item-mentor">
          <img src={survey} alt="surveyIcon" />
        </div>
      </div>
    </div>
  );
}
