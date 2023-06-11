import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../API/Project";
import ConfirmationModal from "../Components/ConfirmationModal.js";
import "./MenteePage.css";
// import axios from "axios";

export default function MenteePage() {
  // const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);


  useEffect(() => {
    getAllProjects().then((projectsList) => {
      setProjects(projectsList);
    });
  }, []);


  function handleConfirm() {
    setConfirmModal(true);
  }

  console.log(confirmModal);

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
        <>    <button className="join-btn" onClick={handleConfirm}>
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
        See all the Organizations you can colaborate with now!
      </article>
      <br />
      <div className="data-table-container">
       
        <DataTable columns={columns} data={projects} />
      </div>
    </div>
  );
}
