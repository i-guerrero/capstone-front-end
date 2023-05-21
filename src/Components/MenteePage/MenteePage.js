import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { mockProjectList } from "../../mocks/projects";
import { useNavigate } from "react-router-dom";

import "./MenteePage.css";

import { getAllProjects } from "../../API/Project";



  // {
  //   id: 4,
  //   non_profit_organization: "BLM ORG",
  //   description:
  //     "This is my foundation description, This is my foundation description, This is my foundation description",
  //   technologies: "Js",
  //   num_developers: 2,
  //   date_to_complete: "this is a date in data",
  //   keywords: "js",
  // },

export default function MenteePage() {
  const navigate = useNavigate();

  
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
      fetch(`${process.env.REACT_APP_BASE_URL}/projects`).then((response) =>
        response.json()
      );
      // .then((Allproposals) => Allproposals)
      // .then((proposalsList) => {
      //   setProposals(proposalsList);
      // });
      // getAllProposals()
      // console.log(proposalsList);
      // });
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
        <button
          onClick={() => {
            navigate("/mentor-accepted");
            console.log("Joined");
          }}
        >
          Join this project
        </button>
      ),
      grow: 1,
      center: true,
    },
  ];
  // <Link to="/proposals-new" className="button-link">
  //   Proposal Form
  // </Link>;
  return (
    <div className="home">
      <article>
        See all these Non-Profits Organization which you can colaborate now!
      </article>
      <br />
      <div className="data-table-container">
        <DataTable columns={columns} data={mockProjectList} />
      </div>
    </div>
  );
}
