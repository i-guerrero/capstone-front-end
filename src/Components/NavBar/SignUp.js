import React from "react";
import ReactDom from "react-dom";
import "./SignUp.css";

const SIGN_UP_STYLES = {
  height:"40%",
  position: "fixed",
  tranform: "translate(-50%, -50%)",
  backgroundColor: "#ebdc02",
  padding: "50px",
  zIndex: 1000,
  top: "20%",
  left: "10%",
  right: "10%",
  bottom: "10%",

};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function SignUp({ children, open, close }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div className="background">
          <button onClick={close}>X</button>
          {children}
        </div>
      </div>
    </>, document.getElementById('portal')
  );
}
