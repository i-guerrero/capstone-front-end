import React from "react";
import LogIn from "./LogIn";
import { Auth } from "../Auth";
// import { useState } from "react";

export default function LogInSignUpBtns({
  logInModal,
  setLogInModal,
 setFirebaseToken,
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
      <button className="already-member" onClick={handleLogIn}>
        Already A Member?
      </button>
      {logInModal ? (
        <>
          <LogIn openModal={logInModal} setFirebaseToken={setFirebaseToken}>
            <Auth
              closeModal={() => setLogInModal(false)}
              setFirebaseToken={setFirebaseToken}
            />
          </LogIn>
        </>
      ) : null}
    </>
  );
}
