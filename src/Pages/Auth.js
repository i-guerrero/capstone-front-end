import { auth, googleProvider } from "../Firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"; // Removed signInWithEmailAndPassword to fix ESLint errors
import { useState, React } from "react";

const Auth = ({ setFirebaseToken, closeModal }) => {
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 
  const signIn = async () => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
  }
 }
  

  const submitSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signIn.email,
        signIn.password
      );
      if (user) {
        setFirebaseToken(user);
      }
      // window.location = "/profile";
    } catch (err) {
      console.error(err);
    }
  };

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  function handleSignIn(event) {
    setSignIn({
      ...signIn,
      [event?.target?.id]: event?.target?.value,
    });
  }

  const signInGoogle = async () => {
    try {
      const userGoogle = await signInWithPopup(auth, googleProvider);
      setFirebaseToken(userGoogle);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h4>Welcome back!</h4>

        <button className="btn btn-ghost" onClick={closeModal}>
          <span className="text-danger fw-bold">X</span>
        </button>
      </div>

      <form onSubmit={submitSignIn}>
        <label htmlFor="email">Email</label>
        <input
          className="form-control mb-3"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => handleSignIn(e)}
          value={signIn.email}
        />
        <label htmlFor="pw">Password</label>
        <input
          className="form-control mb-3"
          id="password"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => handleSignIn(e)}
          value={signIn.password}
        />
        <button type="submit" className="btn btn-success w-100 mb-3">
          Log In
        </button>
        {/* <button className="btn btn-primary w-100" onClick={signInGoogle}>
          Gmail Log In
        </button> */}
      </form>
    </>
  );
};

export { Auth };
