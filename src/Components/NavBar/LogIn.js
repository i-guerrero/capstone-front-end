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

export default function LogIn({ children, openModal, closeModal }) {
  if (!openModal) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div className="Log-In">
          <button onClick={closeModal}>X</button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("log-in")
  );
}
