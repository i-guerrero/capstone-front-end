import DataTable from "react-data-table-component";
import { mockProposalsList } from "../../mocks/proposals";
import { useNavigate } from "react-router-dom";

import "./MentorPage.css";

export default function MentorPage() {
  const navigate = useNavigate();
  const columns = [
    {
      name: "Non-profit Organization",
      selector: (row) => row.non_profit_organization,
      grow: 1,
      center: true
    },
    {
      name: "Title",
      selector: (row) => row.title,
      grow: 1,
      center: true
    },
    {
      name: "Description",
      selector: (row) => row.description,
      grow: 2,
      wrap: true,
      center: true
    },
    {
      name: "Impact",
      selector: (row) => row.impact,
      grow: 2,
      wrap: true,
      center: true
    },
    {
      name: "Status",
      cell: () => <button onClick={() => {
        navigate("/mentor-accepted");
        console.log("Joined");
      }
}>Join</button>,
      grow: 1,
      center: true
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
        <DataTable columns={columns} data={mockProposalsList} />
      </div>
    </div>
  );
}
