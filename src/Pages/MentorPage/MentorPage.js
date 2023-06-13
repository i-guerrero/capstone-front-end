import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { getAllProposals } from "../../API/Proposal";
import { useNavigate } from "react-router-dom";
import { getAuth } from  "firebase/auth";
import "./MentorPage.css";
import NoUserModal from "../Components/NoUserModal";
import ConfirmationModal from "../Components/ConfirmationModal"; 
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function MentorPage() {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    getAllProposals().then((proposalsList) => {
      setProposals(proposalsList);
    });
  }, []);

  function handleReject(e) {
    // console.log(e.target.dataset, "log reject e.target.dataset");
    axios
      .delete(`${BASE_URL}/proposals/${e.target.dataset.proposalId}`)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => console.log(error));
  }

  const columns = [
    {
      name: "Nonprofit Organization",
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
      cell: (row) => (
        <>
          <button
            className="join-btn"
            onClick={() => {
           const auth = getAuth();
           const currentUser = auth.currentUser;
          if(currentUser) {
            axios.post()
            // make axios.post request to /proposals/id/mentor route and make sure the object you are posting with has the key value pair of "firebaseId" === currentUser.user.firebase_uid
            // console.log(currentUser);
          }
            }}
          >
            Approve
          </button>

          <button
            className="reject"
            data-proposal-id={row.id}
            onClick={handleReject}
          >
            Reject
          </button>
        </>
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

      {proposals.length > 0 ? (
        <div className="data-table-container">
          <DataTable columns={columns} data={proposals} />
        </div>
      ) : (
        <div> We are Loading...</div>
      )}
    </div>
  );
}
