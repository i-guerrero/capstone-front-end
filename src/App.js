import { BrowserRouter, Routes, Route} from "react-router-dom" 
import NavBar from "./NavBar/NavBar"
import Home from "./Home/Home"
import HowItWorks from "./HowItWorks/HowItWorks"
import OurImpact from "./OurImpact/OurImpact"

function App () {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/our-impact" element={<OurImpact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 


export default App