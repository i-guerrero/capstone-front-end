import { useState, React } from "react";
import { auth } from "../../Firebase";
import ReactDom from "react-dom";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";

// const SIGN_UP_STYLES = {
//   height:"40%",
//   position: "fixed",
//   tranform: "translate(-50%, -50%)",
//   backgroundColor: "#ebdc02",
//   padding: "50px",
//   zIndex: 1000,
//   top: "20%",
//   left: "10%",
//   right: "10%",
//   bottom: "10%",

// };

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const API = process.env.REACT_APP_BASE_URL;

export default function SignUp({ open, close }) {
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

  const navigate = useNavigate();

  if (!open) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    const firebaseUser = await createUserWithEmailAndPassword(
      auth,
      newUser.email,
      newUser.user_pw
    );
    console.log(firebaseUser);
    
    await axios.post(`${API}/users`, newUser).then(() => navigate("/profile"));
    close();
  }

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.getAttribute("name")]: e.target.value });
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div id="background">
          <button onClick={close}>X</button>
          <form onSubmit={(e) => handleSubmit(e)}>
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
            <u>
              <h4>Choose your role!</h4>
            </u>
            <input
              type="radio"
              value="Mentor"
              name="user_type"
              onChange={(e) => handleChange(e)}
            />
            <label>Volunteer Mentor&nbsp;</label> <br />
            <input
              type="radio"
              value="Mentee"
              name="user_type"
              onChange={(e) => handleChange(e)}
            />
            <label>Volunteer Mentee&nbsp;</label>
            <br />
            <input
              type="radio"
              value="Nonprofit"
              name="user_type"
              onChange={(e) => handleChange(e)}
            />
            <label>Nonprofit&nbsp;</label> <br />
            <label htmlFor="linkedin"> Add Linkedin &nbsp;</label>
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
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
