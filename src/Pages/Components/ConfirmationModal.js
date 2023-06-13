import React from "react";
import ReactDom from "react-dom";

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

export default function ConfirmationModal({
  children,
  confirmed,
  closeModal,
  profileUser,
}) {
  if (!confirmed) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div className="confirm-modal">
          <button onClick={closeModal}>X</button>
          <h4> Your Request has been processed! </h4>
          <h6>
            Thank You {profileUser.first_name} For Contributing To Dev Impact!{" "}
          </h6>
        </div>
      </div>
    </>,
    document.getElementById("log-in")
  );
}
