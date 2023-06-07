import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../API/Project";
import "./MenteePage.css";

export default function MenteePage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

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
        <button className="join-btn"
          onClick={() => {
            navigate("/mentee-accepted");
            console.log("Joined");
          }}
        >
          Join Now{" "}
          <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{ color: "#292e74;" }}
          ></span>
        </button>
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
