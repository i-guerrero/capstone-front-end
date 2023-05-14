import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
// import ProposalList from "./ProposalList";
// import ShowOneProposal from "./ShowOneProposal";
// import EditProposal from "./EditProposal";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import OurImpact from "./OurImpact";
import ForNonProfits from "./ForNonProfits";
import MenteePage from "./MenteePage";
import MentorPage from "./MentorPage";
import ProposalForm from "./ProposalForm"; 

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
          <Route path="/experts" element={<MenteePage />} />
          <Route path="/non-experts" element={<MentorPage />} />
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
