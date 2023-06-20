import { useState, React } from "react";
import { auth } from "../../Firebase";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Modal from "react-bootstrap/Modal";
// import { toast } from "react-toastify";

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

// const OVERLAY_STYLES = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: "rgba(0, 0, 0, .7)",
//   zIndex: 1000,
// };

const API = process.env.REACT_APP_BASE_URL;

export default function SignUp({ open, close, setProfileUser }) {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    city: "",
    country: "",
    profile_img: "",
    firebase_uid: "",
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
    const data = { ...newUser, firebase_uid: firebaseUser.user.uid };
    const response = await axios.post(`${API}/users`, data);

    setProfileUser(response.data);

    navigate("/profile");
    close();
  }

  function handleChange(e) {
    setNewUser({ ...newUser, [e.target.getAttribute("name")]: e.target.value });
  }

  return (
    <Modal show={open} onHide={close} centered>
      <Modal.Body className="p-4">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <h4>Create account</h4>

          <button className="btn btn-ghost" onClick={close}>
            <span className="text-danger fw-bold">X</span>
          </button>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="first_name">First Name &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.first_name}
            name="first_name"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="last_name">Last Name &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.last_name}
            name="last_name"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="email">Email &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.email}
            name="email"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="company">Company &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.company}
            name="company"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="company">City</label>
          <input
            type="text"
            required
            value={newUser.city}
            name="city"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="country">Country &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.country}
            name="country"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="profile_img">Add Profile Image&nbsp;</label>
          <input
            type="text"
            required
            value={newUser.profile_img}
            name="profile_img"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="user_pw">Password&nbsp;</label>
          <input
            type="password"
            required
            value={newUser.user_pw}
            name="user_pw"
            className="input form-control"
            onChange={(e) => handleChange(e)}
          />

          <div className="my-3">
            <h5>Choose your role</h5>

            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <input
                  type="radio"
                  value="Mentor"
                  name="user_type"
                  onChange={(e) => handleChange(e)}
                />
                <label>Mentor&nbsp;</label>
              </div>

              <div className="d-flex gap-2">
                <input
                  type="radio"
                  value="Mentee"
                  name="user_type"
                  onChange={(e) => handleChange(e)}
                />
                <label>Mentee&nbsp;</label>
              </div>

              <div className="d-flex gap-2">
                <input
                  type="radio"
                  value="Nonprofit"
                  name="user_type"
                  onChange={(e) => handleChange(e)}
                />
                <label>Nonprofit&nbsp;</label>
              </div>
            </div>
          </div>

          <label htmlFor="linkedin"> Add Linkedin &nbsp;</label>
          <input
            type="text"
            required
            value={newUser.linkedin}
            name="linkedin"
            className="input form-control mb-3"
            onChange={(e) => handleChange(e)}
          />

          <button className="btn btn-success w-100" type="submit">
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
