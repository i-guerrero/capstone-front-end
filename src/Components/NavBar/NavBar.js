import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import logo from "./DevImpactLogo.png";
import SignUp from "./SignUp.js";
import { Auth } from "../Auth";
import LogIn from "./LogIn";
import { auth, googleProvider } from "../Firebase";
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";

const API = process.env.REACT_APP_BASE_URL;

export default function NavBar() {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [logInModal, setLogInModal] = useState(false);
  const [displayName, setDisplayName] = useState("");

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

  const logOut = async () => {
    try {
      await signOut(auth).then(setDisplayName(""), setLogInModal(false));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.user_pw
    );
    console.log(firebaseUser);
    await axios.post(`${API}/users`, newUser).then(() => navigate("/profile"));
  }

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.getAttribute("name")]: e.target.value });
  }

  function handleToggleClick() {
    setToggleOpen(!toggleOpen);
  }

  function handleButton() {
    setToggleOpen(false);
  }
  function handleSignUp() {
    setSignUpModal(true);
  }

  function handleLogIn() {
    setLogInModal(true);
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
            <br />
            {displayName ? (
              <div>
                <h4>hello {displayName}</h4>
                <button onClick={logOut}>Logout</button>
              </div>
            ) : (
              <div>
                <button onClick={handleLogIn}>Already A Member?</button>
                {logInModal ? (
                  <LogIn
                    openModal={logInModal}
                    closeModal={() => setLogInModal(false)}
                  >
                    <Auth setDisplayName={setDisplayName} />
                  </LogIn>
                ) : null}
              </div>
            )}
          </ul>

          <SignUp open={signUpModal} close={() => setSignUpModal(false)}>
            <form className="" onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="first_name">First Name &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.first_name}
                name="first_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="last_name">Last Name &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.last_name}
                name="last_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="email">Email &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.email}
                name="email"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="company">Company &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.company}
                name="company"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="company">City</label>
              <input
                type="text"
                required
                value={newUser.city}
                name="city"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="country">Country &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.country}
                name="country"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_name">User Name&nbsp;</label>
              <input
                type="text"
                required
                value={newUser.user_name}
                name="user_name"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_pw">Password&nbsp;</label>
              <input
                type="password"
                required
                value={newUser.user_pw}
                name="user_pw"
                className="input"
                onChange={(e) => handleChange(e)}
              />
              <h4>Please choose your role&nbsp;</h4>
               
              <input
                type="radio"
                value="Mentor"
                name="user_type"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type1">Volunteer Mentor&nbsp;</label>
              <input
                type="radio"
                value="Mentee"
                name="user_type"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type">Volunteer Mentee&nbsp;</label>
              <input
                type="radio"
                value="Non-profit"
                name="user_type"
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="user_type3">Non-profit&nbsp;</label> <br />
              <label htmlFor="linkedin">Linkedin &nbsp;</label>
              <input
                type="text"
                required
                value={newUser.linkedin}
                name="linkedin"
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
