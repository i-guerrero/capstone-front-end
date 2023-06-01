import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "./DevImpactLogo.png";
import SignUp from "./SignUp.js";

const API = process.env.REACT_APP_BASE_URL;

export default function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    user_name: "",
    user_pw: "",
    user_type: "",
    linkedin: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`${API}/users`, newUser).then(() => navigate("/"));
  }

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  }

  function handleToggleClick() {
    setToggleOpen(!toggleOpen);
  }

  function handleButton() {
    setToggleOpen(false);
  }
  function handleSignUp() {
    // $(this).toggleClass()
    setSignUpModal(true);
  }

  return (
    <div>
      <header className="navbar">
        <div className="navbar-logo">
          <Link onClick={handleButton} to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link className="toggle-button" onClick={handleToggleClick}>
                <span>For Developers</span>
              </Link>
              {toggleOpen && (
                <ul className="submenu">
                  <li>
                    <Link onClick={handleButton} to="/experts">
                      Mentors
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleButton} to="/non-experts">
                      Mentees
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link onClick={handleButton} to="/for-non-profits">
                Non-profits
              </Link>
            </li>
            <li>
              <Link onClick={handleButton} to="/how-it-works">
                How it works
              </Link>
            </li>
            <li>
              <Link onClick={handleButton} to="/our-impact">
                Our Impact
              </Link>
            </li>
            <button className="sign-up" onClick={handleSignUp}>
              Join Dev Impact
            </button>
          </ul>

          <SignUp open={signUpModal} close={() => setSignUpModal(false)}>
            <form className="" onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="first_name">First Name &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.first_name}
                id="first_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="last_name">Last Name &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.last_name}
                id="last_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="email">Email &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.email}
                id="email"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="company">Company &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.company}
                id="company"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="company">City</label>
              <input
                type="text"
                required
                value={newUser.city}
                id="city"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="country">Country &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.country}
                id="country"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_name">User Name&nbsp;</label>
              <input
                type="text"
                required
                value={newUser.user_name}
                id="user_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_pw">Password&nbsp;</label>
              <input
                type="text"
                required
                value={newUser.user_pw}
                id="user_pw"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <h4>Please choose your role&nbsp;</h4>
               
              <input
                type="radio"
                value="Mentor"
                id="user_type1"
                name="radio"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type1">Volunteer Mentor&nbsp;</label>
              <input
                type="radio"
                value="Mentee"
                id="user_type2"
                name="radio"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type2">Volunteer Mentee&nbsp;</label>
              <input
                type="radio"
                value="Non-profit"
                id="user_type3"
                name="radio"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type3">Non-profit&nbsp;</label> <br />
              <label htmlFor="linkedin">Linkedin &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.linkedin}
                id="linkedin"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <br />
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </SignUp>
        </nav>
      </header>
    </div>
  );
}
