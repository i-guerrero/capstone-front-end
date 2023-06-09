import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./DevImpactLogo.png";
import SignUp from "./SignUp.js";
import { Auth } from "../Auth";
import LogIn from "./LogIn";
import { auth } from "../Firebase"; // googleProvider
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import Image from "react-bootstrap/Image";
import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BASE_URL;

function NavBar() {
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
      await signOut(auth);
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
    await axios.post(`${API}/users`, newUser).then(() => navigate("/"));
  }

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.getAttribute("name")]: e.target.value });
  }

  // function handleToggleClick() {
  //   setToggleOpen(!toggleOpen);
  // }

  // function handleButton() {
  //   setToggleOpen(false);
  // }
  function handleSignUp() {
    setSignUpModal(true);
  }

  function handleLogIn() {
    setLogInModal(true);
  }

  return (
    <Navbar
      className="navbar px-4 d-flex justify-content-between shadow"
      variant="dark"
      expand="lg"
    >
      <Link to="/">
        <Image className="logo" src={logo} alt="Dev Impact Logo" />
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className="flex-grow-0" id="basic-navbar-nav">
        <Nav className="me-auto align-items-center gap-3">
          <NavDropdown
            className="navbar-link"
            title="For Developers"
            id="basic-nav-dropdown"
          >
            <Link
              to="/experts"
              className="px-3 text-decoration-none text-dark fw-normal"
            >
              Mentors
            </Link>

            <NavDropdown.Divider />

            <Link
              to="/non-experts"
              className="px-3 text-decoration-none text-dark fw-normal"
            >
              Mentees
            </Link>
          </NavDropdown>

          <Link className="navbar-link" to="/for-non-profits">
            For Non Profits
          </Link>

          <Link className="navbar-link" to="/how-it-works">
            How it Works
          </Link>

          <Link className="navbar-link" to="/our-impact">
            Our Impact
          </Link>



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
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
