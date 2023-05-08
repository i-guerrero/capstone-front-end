import { BrowserRouter, Routes, Route} from "react-router-dom" 
import NavBar from "./NavBar"
import Home from "./Home/Home"
import HowItWorks from "./HowItWorks"
import OurImpact from "./OurImpact"

function App () {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-impact" element={<OurImpact/>} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
} 


export default App