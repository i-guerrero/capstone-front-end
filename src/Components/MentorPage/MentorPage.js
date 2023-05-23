import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { getAllProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";
import "./MentorPage.css";

export default function MentorPage() {
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([]);


  useEffect(() => {
    getAllProposals().then((proposalsList) => {
      setProposals(proposalsList);
    });
  }, []);
  

  const columns = [
    {
      name: "Non-profit Organization",
      selector: (row) => row.non_profit_id,
      grow: 1,
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      grow: 1,
      center: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      grow: 2,
      wrap: true,
      center: true,
    },
    {
      name: "Impact",
      selector: (row) => row.impact,
      grow: 2,
      wrap: true,
      center: true,
    },
    {
      name: "Status",

      cell: () => <button className="button-link" onClick={() => {
        navigate("/mentor-accepted");
        console.log("Joined");
      }
}>  Join Now <span
className="fa-solid fa-up-right-from-square  fa-2xs"
style={{color: '#292e74;'}}
></span></button>,
      cell: () => (
        <button
          onClick={() => {
            navigate("/mentor-accepted");
            console.log("Joined");
          }}
        >
          Join
        </button>
      ),
      grow: 1,
      center: true,
    },
  ];

  return (
    <div className="home">
      <article>
        See all these Non-Profits Organization which you can collaborate with
        now!
      </article>
      <br />
      {proposals.length > 0 ? (
        <div className="data-table-container">
          <DataTable columns={columns} data={proposals} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
