import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./DevImpactLogo.png";
import SignUp from "../Components/SignUpForm.js";
import LogInSignUpBtns from "../Components/LogInSignUpBtns";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";

function NavBar({ setCurrentUser, currentUser }) {
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
      await signOut(auth).then(setCurrentUser({}), setLogInModal(false));
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image className="logo" src={logo} alt="Dev Impact Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="For Developers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/proposals">Mentors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects">Mentees</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/for-nonprofits">For Non Profits</Nav.Link>
            <Nav.Link href="/how-it-works">How it Works</Nav.Link>
            <Nav.Link href="/our-impact">Our Impact</Nav.Link>
            {currentUser ? (
              <div>
                <h4>hello {currentUser.displayName}</h4>
                <button onClick={logOut}>Logout</button>
              </div>
            ) : (
              <div>
                <LogInSignUpBtns
                  signUpModal={signUpModal}
                  setSignUpModal={setSignUpModal}
                  logInModal={logInModal}
                  setLogInModal={setLogInModal}
                  handleSignUp={handleSignUp}
                />
                <SignUp
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
