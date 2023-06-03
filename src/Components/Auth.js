import { auth, googleProvider } from "./Firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = ({ setDisplayName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setDisplayName(user.user.email);
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      const userGoogle = await signInWithPopup(auth, googleProvider);
      setDisplayName(userGoogle.user.displayName);
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
        <input
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}> Sign In </button>
      </div>
      <button onClick={signInGoogle}> Sign In With Google</button>
      <button onClick={logOut}>Logout</button>
    </div>
  );
};
