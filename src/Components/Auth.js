import { auth, googleProvider } from "./Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setDisplayName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);
      setDisplayName(user.user.email);
      navigate("/profile");
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      const userGoogle = await signInWithPopup(auth, googleProvider);
      setDisplayName(userGoogle.user.displayName);
      navigate("/profile");
      console.log(userGoogle);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="email">
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="pw">Password</label>
        <input
          id="pw"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <button onClick={signIn}> Sign In </button>
      </div>
      <button onClick={signInGoogle}> Sign In With Google</button>
    </div>
  );
};

export { Auth };
