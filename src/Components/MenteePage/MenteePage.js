import DataTable from "react-data-table-component";
import { mockProjectList } from "../../mocks/projects";
import { useNavigate } from "react-router-dom";

import "./MenteePage.css";

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
        <button className="button-link"
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
