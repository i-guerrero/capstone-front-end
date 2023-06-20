import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component";
// import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../API/Project";
// import NoUserModal from "../Components/NoUserModal";
import "./MenteePage.css";
// import axios from "axios";

function SuccessJoinModal({ open, handleClose }) {
  return (
    <Modal show={open} onHide={handleClose} centered>
      <Modal.Body className="p-4">
        <div className="w-100 d-flex flex-column justify-content-between align-items-center">
          <h2 className="text-center mb-3">
            You have been joined to this project!
          </h2>

          <button className="btn btn-success w-75" onClick={handleClose}>
            Wait to be contacted by our mentors
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function MenteePage() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    getAllProjects().then((projectsList) => {
      setProjects(projectsList);
      setFilteredProjects(projectsList);
    });
  }, []);

  const handleFilterChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredData = projects.filter((project) =>
      project.technologies.toLowerCase().includes(searchValue)
    );
    setFilteredProjects(filteredData);
  };

  function handleConfirm() {
    setSuccessModal(true);
  }

  // console.log(confirmModal, "confirmModal in Mentee page");

  const columns = [
    {
      name: "Project Impact",
      selector: (row) => row.impact,
      grow: 2,
      wrap: true,
      center: true,
    },
    {
      name: "Requirements / Technologies",
      selector: (row) => row.technologies,
      grow: 3,
      wrap: true,
      center: true,
      cell: (row) => <span>{row.technologies}</span>,
    },
    {
      name: "Team Size",
      selector: (row) => row.num_developers,
      grow: 1,
      // wrap: true,
      center: true,
    },
    {
      name: "Deadline",
      selector: (row) => row.date_to_complete,
      cell: (row) => {
        const parsedDate = new Date(row.date_to_complete);

        const formatter = new Intl.DateTimeFormat("en-EN", {
          dateStyle: "medium",
        });

        return <span>{formatter.format(parsedDate)}</span>;
      },
      grow: 1,
      wrap: true,
      center: true,
    },
    {
      name: "Status",
      cell: () => (
        <>
          {" "}
          <button className="join-btn" onClick={handleConfirm}>
            Join This Project{" "}
            <span className="fa-solid fa-up-right-from-square  fa-2xs"></span>
          </button>
        </>
      ),
      grow: 1,
      center: true,
    },
  ];

  return (
    <div className="home">
      <article className="container mb-5">
        <h1>See all these projects which you can collaborate with now!</h1>
      </article>
      <br />
      <div className="data-table-container">
        <input
          type="text"
          placeholder="Filter Requirements / Technologies"
          onChange={handleFilterChange}
        />
        <DataTable columns={columns} data={filteredProjects} />
      </div>

      <SuccessJoinModal
        open={successModal}
        handleClose={() => setSuccessModal(false)}
      />
    </div>
  );
}
