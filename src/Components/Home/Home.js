import "./Home.css";
// import welcomeF from "./welcomeF.png";
import devteam from "./undraw_engineering_team_a7n2.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="grid-container">
        <div className="grid-item">
          <span className="title">DEV IMPACT</span>
        </div>
        <div className="grid-item">
          <img src={devteam} alt="devteam" />
        </div>
      </div>
    </div>
  );
}
