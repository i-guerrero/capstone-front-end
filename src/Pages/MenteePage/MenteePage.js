import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../API/Project";
// import NoUserModal from "../Components/NoUserModal";
import ConfirmationModal from "../Components/ConfirmationModal";
import "./MenteePage.css";
// import axios from "axios";

export default function MenteePage() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);

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
    setConfirmModal(true);
  }

  // console.log(confirmModal, "confirmModal in Mentee page");

  const columns = [
    {
      name: "Project Impact",
      selector: (row) => row.impact,
      grow: 1,
      wrap: true,
      center: true,
    },
    {
      name: "Requirements / Technologies",
      selector: (row) => row.technologies,
      grow: 1,
      wrap: true,
      center: true,
      cell: (row) => <span>{row.technologies}</span>,
    },
    {
      name: "number of developers",
      selector: (row) => row.num_developers,
      grow: 1,
      // wrap: true,
      center: true,
    },
    {
      name: "date_to_complete",
      selector: (row) => row.date_to_complete,
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
          {confirmModal ? (
            <ConfirmationModal
              confirmModal={confirmModal}
              closeModal={() => {
                setConfirmModal(false);
              }}
            >
              <div>Modal is open</div>
            </ConfirmationModal>
          ) : null}
        </>
      ),
      grow: 1,
      center: true,
    },
  ];

  return (
    <div className="home">
      <article>
        See all these Non-Profits Organizations with which you can collaborate
        now!
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
    </div>
  );
}