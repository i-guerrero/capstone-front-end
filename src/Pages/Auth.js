import { auth, googleProvider } from "../Firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth"; // Removed signInWithEmailAndPassword to fix ESLint errors
import { useState } from "react";

const Auth = ({ setFirebaseToken, closeModal }) => {
  const [email, setEmail] = useState(""); // Commented out to fix ESLint errors
  const [password, setPassword] = useState(""); // Commented out to fix ESLint errors
  const [signInUser, setSignInUser] = useState()

  const handleSignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      window.location = "/profile";
      setFirebaseToken(user);
    } catch (err) {
      console.error(err);
    }
  };

  function handleChange(e) {

  }

    // const firebaseUser = await createUserWithEmailAndPassword(
    //   auth,
    //   newUser.email,
    //   newUser.user_pw
    // );
    // const data = { ...newUser, firebase_uid: firebaseUser.user.uid };
    // const response = await axios.post(`${API}/users`, data);

    // setProfileUser(response.data);

    // navigate("/profile");
    // close();



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
    <>
      <div className="w-100 d-flex justify-content-between align-items-center">
        <h4>Welcome back!</h4>

        <button className="btn btn-ghost" onClick={closeModal}>
          <span className="text-danger fw-bold">X</span>
        </button>
      </div>

      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email</label>
        <input
          className="form-control mb-3"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="pw">Password</label>
        <input
          className="form-control mb-3"
          id="pw"
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="btn btn-success w-100 mb-3">
          Log In
        </button>
        <button className="btn btn-primary w-100" onClick={signInGoogle}>
          Gmail Log In
        </button>
      </form>
    </>
  );
};

export { Auth };
