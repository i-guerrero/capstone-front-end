import { Link } from "react-router-dom";
import "./NavBar.css";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "./LogoNoSlogan.png";
import SignUpForm from "../Components/SignUpForm.js";
import LogInSignUpBtns from "../Components/LogInSignUpBtns";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Image from "react-bootstrap/Image";
import { useState } from "react"; // removing useEffect since it was defined but never used to fix ESLint Deploy Errors
import { useNavigate } from "react-router-dom";
// import NoUserModal from "../Components/NoUserModal";
// import ConfirmationModal from "../Components/ConfirmationModal";

// import axios from "axios";

function NavBar({ setFirebaseToken, firebaseToken, profileUser, setProfileUser }) {
  const [logInModal, setLogInModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const navigate = useNavigate();

  function handleSignUp() {
    setSignUpModal(true);
  }

  //   const [newUser, setNewUser] = useState({
  //     first_name: "",
  //     last_name: "",
  //     email: "",
  //     company: "",
  //     city: "",
  //     country: "",
  //     user_name: "",
  //     user_pw: "",
  //     user_type: "",
  //     linkedin: "",
  //   });
  // async function handleSubmit(e) {
  //     e.preventDefault();
  //     const firebaseUser = await createUserWithEmailAndPassword(
  //       auth,
  //       newUser.email,
  //       newUser.user_pw
  //     );
  //     console.log(firebaseUser);
  //     await axios.post(`${API}/users`, newUser).then(() => navigate("/profile"));
  //   }

  //   function handleChange(e) {
  //     setNewUser({ ...newUser, [e.target.getAttribute("name")]: e.target.value });
  //   }
  const logOut = async () => {
    try {
      await signOut(auth).then(setFirebaseToken({}), setLogInModal(false));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar
      className="navbar px-5 d-flex justify-content-between shadow"
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="/">
        <div className="logo-container">
          <Image className="logo" src={logo} alt="Dev Impact Logo" />
          <span className="logo-name">Dev Impact</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-between align-items-center gap-3">
          <div className="d-flex gap-4 align-items-center ms-auto">
            <NavDropdown
              className="navbar-link"
              title="For Developers"
              id="basic-nav-dropdown"
            >
              <Link
                to="/proposals"
                className="px-3 text-decoration-none text-dark fw-normal"
              >
                Mentors
              </Link>

              <NavDropdown.Divider />

              <Link
                to="/projects"
                className="px-3 text-decoration-none text-dark fw-normal"
              >
                Mentees
              </Link>
            </NavDropdown>

            <Link className="navbar-link" to="/for-nonprofits">
              For Non Profits
            </Link>
            <Link className="navbar-link" to="/how-it-works">
              How it Works
            </Link>
            <Link className="navbar-link" to="/our-impact">
              Our Impact
            </Link>
          </div>
          <br />
          {firebaseToken ? (
            <Dropdown>
              <Dropdown.Toggle
                style={{ background: "#BBBF95", color: "#292e74" }}
                className="py-2 px-4"
                
                id="profile-dropdown"
              >
                User menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/profile">Profile</Link>
                </Dropdown.Item>

                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <div>
              <LogInSignUpBtns
                setProfileUser={setProfileUser}
                firebaseToken={firebaseToken}
                setFirebaseToken={setFirebaseToken}
                signUpModal={signUpModal}
                setSignUpModal={setSignUpModal}
                logInModal={logInModal}
                setLogInModal={setLogInModal}
                handleSignUp={handleSignUp}
              />
              <SignUpForm
                setProfileUser={setProfileUser}
                open={signUpModal}
                close={() => setSignUpModal(false)}
              />
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
