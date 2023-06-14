import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfilePage.css";
import ConfirmationModal from "./Components/ConfirmationModal";
import { getProposalByUserId } from "../API/Proposal";

export default function ProfilePage({ firebaseToken, profileUser }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    getProposalByUserId(profileUser.id).then((userProposals) =>
      setProposals(userProposals)
    );
  },[profileUser]);

  console.log(proposals, "log in profile Page for Props")

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
          {profileUser.user_type} {profileUser.first_name}{" "}
          {profileUser.last_name}
        </h1>
        <h4>
          Location : {profileUser.city}, {profileUser.country}
        </h4>
        <h4>Company : {profileUser.company}</h4>
        <h4>Contact : {profileUser.email}</h4>
        <a href={profileUser.linkedin}>
          <h4>Check Out My Linkedin!</h4>
        </a>
        <hr />
      </div>
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
            <h3>My Proposals</h3> <hr />
          </u>
        </>
      ) : null}

      {profileUser.user_type === "Mentee" ? (
        <>
          <u>
            <h3>Projects You Can Join!</h3> <hr />
          </u>
        </>
      ) : null}
    </>
  );
}
