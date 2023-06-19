import {
  setPersistence,
  getAuth,
  browserLocalPersistence,
} from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";
import { useEffect, useState } from "react";
import Footer from "./Pages/Footer/Footer";
import HowItWorks from "./Pages/HowItWorks/HowItWorks";
import OurImpact from "./Pages/OurImpact/OurImpact";
import ForNonProfits from "./Pages/ForNonProfits/ForNonProfits";
import MenteePage from "./Pages/MenteePage/MenteePage";
import MentorPage from "./Pages/MentorPage/MentorPage";
import ProposalForm from "./Pages/ProposalForm/ProposalForm";
import MentorForm from "./Pages/MentorForm/MentorForm";
import MentorAccepted from "./Pages/MentorAccepted/MentorAccepted";
import ProfilePage from "./Pages/ProfilePage";
import ProposalAccepted from "./Pages/ProposalAccepted/ProposalAccepted";
import { getUserByFirebaseId } from "./API/Users";
import { ToastContainer } from "react-toastify";
import { getAllUsers } from "./API/Users";

import "react-toastify/dist/ReactToastify.css";

import AddMentorToProposal from "./Pages/Components/AddMentorToProposal";
import AddMenteesProject from "./Pages/Components/AddMenteesProject";

function App() {
  const [firebaseToken, setFirebaseToken] = useState(null);
  const [profile_user, setProfileUser] = useState({});
  const [userModal, setUserModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);


  useEffect(() => {
    getAllUsers().then((mentees) => setMentees(filterUsersByMentee(mentees)));
    getAllUsers().then((mentors) => setMentors(filterUsersByMentor(mentors)));
  }, []);


  function filterUsersByMentor(AllUsers) {
    const mentors = AllUsers.filter((users) => {
      return users.user_type === "Mentor";
    });
    return mentors;
  }

  function filterUsersByMentee(AllUsers) {
    const mentees = AllUsers.filter((users) => {
      return users.user_type === "Mentee";
    });
    return mentees;
  }

  useEffect(() => {
    const auth = getAuth();
    console.log(auth.currentUser, auth, "auth inside setPersistence/useEffect and auth.currrentUser");
    setPersistence(auth, browserLocalPersistence);
    auth.onAuthStateChanged((user) => {
      setFirebaseToken(user);
    });
  }, []);

  useEffect(() => {
    if (firebaseToken) {
      console.log(firebaseToken, "inside useEffect for getUserByFirebaseID/setProfileUser")
      const { uid } = firebaseToken;
      getUserByFirebaseId(uid).then((user) => {
        setProfileUser(user);
      });
    } else {
      console.log(firebaseToken, "useEffect Error issue missing firebaseToken");
    }
  }, [firebaseToken]);

  return (
    <div>
      <BrowserRouter>
        <NavBar
          setProfileUser={setProfileUser}
          setFirebaseToken={setFirebaseToken}
          firebaseToken={firebaseToken}
          profileUser={profile_user}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route
            path="/proposals/mentors"
            element={<AddMentorToProposal mentors={mentors} />}
          />
          <Route
            path="/proposals/mentees"
            element={<AddMenteesProject mentees={mentees} />}
          />
          <Route
            path="/for-nonprofits"
            element={
              <ForNonProfits
                userModal={userModal}
                setUserModal={setUserModal}
                profileUser={profile_user}
              />
            }
          />
          <Route
            path="/proposals-new"
            element={
              <ProposalForm
                confirmModal={confirmModal}
                setConfirmModal={setConfirmModal}
                profileUser={profile_user}
              />
            }
          />
          <Route
            path="/mentors-new"
            element={
              <MentorForm userModal={userModal} setUserModal={setUserModal} />
            }
          />

          <Route
            path="/projects"
            element={
              <MenteePage userModal={userModal} setUserModal={setUserModal} />
            }
          />
          <Route
            path="/proposals"
            element={
              <MentorPage userModal={userModal} setUserModal={setUserModal} />
            }
          />
          <Route path="/mentor-accepted" element={<MentorAccepted />} />
          <Route
            path="/profile"
            element={
              <ProfilePage
                firebaseToken={firebaseToken}
                profileUser={profile_user}
                setProfileUser={setProfileUser}
              />
            }
          />
          <Route path="/proposal-accepted" element={<ProposalAccepted />} />

          {/* <Route path="/proposals" element={<ProposalList />} />
          <Route path="/proposals/:id" element={<ShowOneProposal />} />
          <Route path="/proposals/:id/edit" element={<EditProposal />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
