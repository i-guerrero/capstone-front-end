import React from "react";
// import axios from "axios";
import { useEffect, useState } from "react";
import "./ProfilePage.css";
// import ConfirmationModal from "./Components/ConfirmationModal";
import { getProposalByUserId } from "../API/Proposal";
import ProposalCard from "./Components/ProposalCard";
import { CiLocationOn } from "react-icons/ci";
import { BsBuildingGear } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

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

  console.log(profileUser);

  if (!firebaseToken) return null;

  return (
    <>
      <div className="profile">
        <div className="profile-card">
          <div className="profile-card-img-container">
            <img
              src={profileUser.profile_img}
              alt="profile_pic"
              className="profile-pic"
            />
          </div>

          <header className="mb-3 text-center">
            <h1 className="mb-0">
              {profileUser.first_name} {profileUser.last_name}
            </h1>

            <h4>{profileUser.user_type}</h4>
          </header>

          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-2">
              <CiLocationOn size={32} />
              <span className="h5 mb-0">
                {profileUser.city} | {profileUser.country}
              </span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <BsBuildingGear size={32} />
              <span className="h5 mb-0">{profileUser.company}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <AiOutlineMail size={32} />
              <span className="h5 mb-0">{profileUser.email}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <AiOutlineLinkedin size={32} />
              <span className="h5 mb-0">{profileUser.linkedin}</span>
            </div>

            {profileUser.user_type === "Mentor" ? (
              <>
                <u>
                  <h3>Proposals You Can Join!</h3>
                </u>
              </>
            ) : null}

            {profileUser.user_type === "Nonprofit" ? (
              <>
                <u>
                  <h3>My Proposal</h3>
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
                  <h3>Projects You Can Join!</h3>
                </u>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
