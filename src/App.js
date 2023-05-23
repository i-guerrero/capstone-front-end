import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
// import ProposalList from "./ProposalList";
// import ShowOneProposal from "./ShowOneProposal";
// import EditProposal from "./EditProposal";
import Footer from "./Components/Footer/Footer";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import OurImpact from "./Components/OurImpact/OurImpact";
import ForNonProfits from "./Components/ForNonProfits/ForNonProfits";
import MenteePage from "./Components/MenteePage/MenteePage";
import MentorPage from "./Components/MentorPage/MentorPage";
import ProposalForm from "./Components/ProposalForm/ProposalForm";
import MentorForm from "./Components/MentorForm/MentorForm";
import MentorAccepted from "./Components/MentorAccepted/MentorAccepted";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/for-non-profits" element={<ForNonProfits />} />
          <Route path="/proposals-new" element={<ProposalForm />} />
          <Route path="/mentors-new" element={<MentorForm />} />
          <Route path="/non-experts" element={<MenteePage />} />
          <Route path="/experts" element={<MentorPage />} />
          <Route path="/mentor-accepted" element={<MentorAccepted />} />
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
