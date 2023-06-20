import "./MentorForm.css";
import survey from "./survey.svg";

// import { createNewProjectForm } from "./fetch";

import { useState } from "react";
import { createNewProjects } from "../../API/Project";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function ConfirmModal({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <div className="w-100 d-flex flex-column justify-content-between align-items-center">
          <h2 className="text-center mb-3">
            Project was created successfully!
          </h2>

          <button className="btn btn-success w-50" onClick={handleClose}>
            Go projects list
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function New({ profileUser }) {
  const navigate = useNavigate();
  const [confirmModal, setConfirmModal] = useState(false);
  const [newProjectForm, setNewProjectForm] = useState({
    id: profileUser.id,
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
      setConfirmModal(true);
    });
  }

  function handleCloseModal() {
    setConfirmModal(false);
    navigate("/projects");
  }

  return (
    <div className="project-form">
      <header className="upsert-form-header">
        <h1>Welcome Mentors!</h1>
        <h4>Fill out our 5-minute project proposal form...</h4>
      </header>
      <div className="grid-container-mentor">
        <div className="form-container grid-item-mentor">
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
                Description
              </label>
              <textarea

                className="text-area"
                rows={3}
                type="text"
                id="description"
                value={newProjectForm.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="num_developers">
                Numbers of developers needed:{" "}
              </label>
              <input
                className="text-area"
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
        <div className="grid-item-mentor">
          <img src={survey} alt="surveyIcon" />
        </div>
      </div>

      <ConfirmModal open={confirmModal} handleClose={handleCloseModal} />
    </div>
  );
}
