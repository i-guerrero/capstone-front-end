import "./Home.css";
// import welcomeF from "./welcomeF.png";
import devteam from "./undraw_engineering_team_a7n2.svg";

export default function Home() {
  return (
    <div className="home">
      <div className="grid-container">
        <div className="grid-item">
          <span className="title">DEV IMPACT</span>
          <h4>"The greatest impact we have is when we come together."</h4>
          <p>
            We are a community of developers of all stages and nonprofits
            collaborating together to create web applications with purpose.
          </p>
        </div>
        <div className="grid-item">
          <img src={devteam} alt="devteam" />
        </div>
      </div>
      <div className="buttons-container">
        <div className="home-button">
          Join Mentors{" "}
          <span
            class="fa-solid fa-up-right-from-square fa-2xs"
            style={{color: '#292e74;'}}
          ></span>
        </div>
        <div className="home-button">
          Join Mentees{" "}
          <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{color: '#292e74;'}}
          ></span>
        </div>
        <div className="home-button">
          Join Nonprofits{" "}
          <span
            class="fa-solid fa-up-right-from-square  fa-2xs"
            style={{color: '#292e74;'}}
          ></span>
        </div>
      </div>
    </div>
  );
}
