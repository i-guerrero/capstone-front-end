import { auth, googleProvider } from "../Firebase";
import { signInWithPopup } from "firebase/auth"; // Removed signInWithEmailAndPassword to fix ESLint errors
import { useState } from "react";

const Auth = ({ setFirebaseToken, closeModal }) => {
  const [email, setEmail] = useState(""); // Commented out to fix ESLint errors
  const [password, setPassword] = useState(""); // Commented out to fix ESLint errors

  const signIn = async () => {
    try {
      // const user = await signInWithEmailAndPassword(auth, email, password);
      // setFirebaseToken(user)  <== not needed for now
      window.location = "/profile";
    } catch (err) {
      console.error(err);
    }
  };

  const signInGoogle = async () => {
    try {
      const userGoogle = await signInWithPopup(auth, googleProvider);
      setFirebaseToken(userGoogle);
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
        <button className="redx" onClick={closeModal}>
          X
        </button>
        <br /> <br />
        <h4>Welcome Back!</h4>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />{" "}
        <br /> <br />
        <label htmlFor="pw">Password</label>
        <input
          id="pw"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br /> <br />
        <button className="btn-log-in" onClick={signIn}>
          {" "}
          Log In{" "}
        </button>
        <br /> <br />
        <button className="btn-log-in" onClick={signInGoogle}>
          Gmail Log In
        </button>
      </div>
    </div>
  );
};

export { Auth };
