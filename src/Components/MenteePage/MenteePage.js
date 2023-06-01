import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProjects } from "../../API/Project";

import "./MenteePage.css";




export default function MenteePage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
    useEffect(() => {
      getAllProjects().then((projectsList) => {
        setProjects(projectsList);
      });
    }, []);
  
  const columns = [
    {
      name: "Non-profit Organization",
      selector: (row) => row.non_profit_organization,
      grow: 1,
      center: true,
    },
    {
      name: "Project Proposal",
      selector: (row) => row.description,
      grow: 1,
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
        <button className="join-btn"
          onClick={() => {
            navigate("/mentor-accepted");
            console.log("Joined");
          }}
        >
          Join Now <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{color: '#292e74;'}}
          ></span>
        </button>
      ),
      grow: 1,
      center: true,
    },
  ];
  // <Link to="/projects-new" className="button-link">
  //   Proposal Form
  // </Link>;
  return (
    <div className="home">
      <article>
        See all these Non-Profits Organization which you can colaborate now!
      </article>
      <br />
      <div className="data-table-container">
        <DataTable columns={columns} data={projects} />
      </div>
    </div>
  );
}
