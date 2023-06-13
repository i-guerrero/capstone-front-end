import React from "react";
import ReactDom from "react-dom";
import "./LogIn.css";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function NoUserModal({ children, userModal, closeModal }) {
  if (!userModal) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div className="no-user">
            <h6 onClick={closeModal}>X</h6>
          <h2>Please Log Into your Account or make one.</h2>
        </div>
      </div>
    </>,
    document.getElementById("log-in")
  );
}
