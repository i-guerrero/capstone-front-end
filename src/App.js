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
import ProfilePage from "./ProfilePage";
import ProposalAccepted from "./Pages/ProposalAccepted/ProposalAccepted";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  console.log(currentUser);

  // const navigate = useNavigate();

  // const signIn = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //     setCurrentUser(user);

  //     navigate("/profile");
  //     console.log(user);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const signInGoogle = async () => {
  //   try {
  //     const userGoogle = await signInWithPopup(auth, googleProvider);
  //     setCurrentUser(userGoogle);
  //     // navigate("/profile");
  //     console.log(userGoogle);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const [confirmModal, setConfirmModal] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/for-nonprofits" element={<ForNonProfits />} />
          <Route path="/proposals-new" element={<ProposalForm />} />
          <Route path="/mentors-new" element={<MentorForm />} />
          <Route path="/projects" element={<MenteePage />} />
          <Route path="/proposals" element={<MentorPage />} />
          <Route path="/mentor-accepted" element={<MentorAccepted />} />
          <Route
            path="/profile"
            element={<ProfilePage currentUser={currentUser} />}
          />
          <Route path="/proposal-accepted" element={<ProposalAccepted />} />

          {/* <Route path="/proposals" element={<ProposalList />} />
          <Route path="/proposals/:id" element={<ShowOneProposal />} />
          <Route path="/proposals/:id/edit" element={<EditProposal />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
