import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfilePage.css";
// import ConfirmationModal from "./Components/ConfirmationModal";
import { getProposalByUserId } from "../API/Proposal";
import ProposalCard from "./Components/ProposalCard";
export default function ProfilePage({ firebaseToken, profileUser }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    console.log(profileUser);
    if (profileUser) {
      getProposalByUserId(profileUser.id).then((userProposals) =>
        setProposals(userProposals)
      );
    }
  }, [profileUser]);

  console.log(proposals);

  if (!firebaseToken) return null;

  return (
    <>
      <div className="profile">
        <img
          src={profileUser.profile_img}
          alt="profile_pic"
          className="profile-pic"
        />
        <h1>
          {profileUser.first_name} {profileUser.last_name}
        </h1>
        <br />
        <h4>
          {" "}
          I am a {profileUser.user_type} Located In {profileUser.city},{" "}
          {profileUser.country}
        </h4>

        <br />
        <h4>My organization is {profileUser.company}</h4>
        <br />
        <h4>
          Email Me at <a href={profileUser.email}>{profileUser.email}</a>
        </h4>
        <br />
        <a href={profileUser.linkedin}>
          <h4>Check Out My Linkedin!</h4>
        </a>
        <hr />
        {profileUser.user_type === "Mentor" ? (
          <>
            <u>
              <h3>Proposals You Can Join!</h3> <hr />
            </u>
          </>
        ) : null}

        {profileUser.user_type === "Nonprofit" ? (
          <>
            <u>
              <h3>My Proposal</h3> <hr />
            </u>
            {proposals[0] ? (
              <ProposalCard
                description={proposals[0].description}
                title={proposals[0].title}
                impact={proposals[0].impact}
              />
            ) : null}
          </>
        ) : null}

        {profileUser.user_type === "Mentee" ? (
          <>
            <u>
              <h3>Projects You Can Join!</h3> <hr />
            </u>
          </>
        ) : null}
      </div>
    </>
  );
}
