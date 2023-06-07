import "./Home.css";
import { useState } from "react";
// import welcomeF from "./welcomeF.png";
import devteam from "./undraw_engineering_team_a7n2.svg";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();


  return (
    <div className="home">
      <div className="grid-container">
        <div className="grid-item">
          <span id="title">DEV IMPACT</span>
          <h1>"The greatest impact we have is when we come together."</h1>
          <h4>
            We are a community of developers of all stages and nonprofits
            collaborating together to create web applications with purpose.
          </h4>
        </div>
        <div className="grid-item">
          <img src={devteam} alt="devteam" />
        </div>
      </div>
      <div className="buttons-container">
        <div
          onClick={() => {
            navigate("/mentor-accepted");
            console.log("Joined");
          }}
          className="home-button"
        >
          Join Mentors{" "}
          <span
            className="fa-solid fa-up-right-from-square fa-2xs"
            style={{ color: "#292e74" }}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/mentor-accepted");
            console.log("Joined");
          }}
          className="home-button"
        >
          Join Mentees{" "}
          <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{ color: "#292e74" }}
          ></span>
        </div>
        <div
          onClick={() => {
            navigate("/proposals-new");
            console.log("Joined nonprofits");
          }}
          className="home-button"
        >
          Join Non-profits{" "}
          <span
            className="fa-solid fa-up-right-from-square  fa-2xs"
            style={{ color: "#292e74" }}
          ></span>
        </div>
      </div>
     
    </div>
  );
}
