import { auth, googleProvider } from "../Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ setCurrentUser,closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(user);
      navigate("/profile");
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      const userGoogle = await signInWithPopup(auth, googleProvider);
      setCurrentUser(userGoogle);
  
      navigate("/profile");
      console.log(userGoogle);
    } catch (err) {
      console.error(err);
    }
  };

  // const logOut = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="Log-In">
            
      <div className="email">
      <button className="redx" onClick={closeModal}>X</button>
        <br /> <br />
       <h4>Welcome Back!</h4>
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
        <button className="btn-log-in" onClick={signIn}> Log In </button>
        <br /> <br />
        <button className="btn-log-in" onClick={signInGoogle}>Gmail Log In</button>
      </div>
     
    </div>
  );
};

export { Auth };
