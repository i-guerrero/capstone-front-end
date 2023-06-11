import React from "react";
import LogIn from "./LogIn";
import { Auth } from "../Auth";
// import { useState } from "react";

export default function LogInSignUpBtns({
  logInModal,
  setLogInModal,
  setCurrentUser,
  handleSignUp,
}) {
  function handleLogIn() {
    setLogInModal(true);
  }

  return (
    <>
      <button className="sign-up" onClick={handleSignUp}>
        Join Dev Impact
      </button>
      <button className="sign-up" onClick={handleLogIn}>
        Already A Member?
      </button>
      {logInModal ? (
        <>
          <LogIn openModal={logInModal} setCurrentUser={setCurrentUser}>
            <Auth
              closeModal={() => setLogInModal(false)}
              setCurrentUser={setCurrentUser}
            />
          </LogIn>
        </>
      ) : null}
    </>
  );
}
