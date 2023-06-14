import { Link } from "react-router-dom";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./LogoNoSlogan.png";
import SignUpForm from "../Components/SignUpForm.js";
import LogInSignUpBtns from "../Components/LogInSignUpBtns";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Image from "react-bootstrap/Image";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoUserModal from "../Components/NoUserModal";
import ConfirmationModal from "../Components/ConfirmationModal";

// import axios from "axios";

function NavBar({ setFirebaseToken, firebaseToken, profileUser }) {
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
      className="navbar px-4 d-flex justify-content-between shadow"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-container">
            <Image className="logo" src={logo} alt="Dev Impact Logo" />
            <span className="logo-name">Dev Impact</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center gap-3">
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
            <Nav.Link href="/for-nonprofits">For Non Profits</Nav.Link>
            <Nav.Link href="/how-it-works">How it Works</Nav.Link>
            <Nav.Link href="/our-impact">Our Impact</Nav.Link>
            <br />
            {firebaseToken ? (
              <div>
                <a href="/profile">
                  <h5>
                    {profileUser.first_name} {profileUser.last_name}
                  </h5>
                </a>
                <button onClick={logOut}>Logout</button>
              </div>
            ) : (
              <div>
                <LogInSignUpBtns
                  firebaseToken={firebaseToken}
                  setFirebaseToken={setFirebaseToken}
                  signUpModal={signUpModal}
                  setSignUpModal={setSignUpModal}
                  logInModal={logInModal}
                  setLogInModal={setLogInModal}
                  handleSignUp={handleSignUp}
                />
                <SignUpForm
                  open={signUpModal}
                  close={() => setSignUpModal(false)}
                />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
