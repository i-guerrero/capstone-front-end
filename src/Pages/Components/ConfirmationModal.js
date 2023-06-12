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

export default function ConfirmationModal({ children, confirmModal,  closeModal }) {
  if (!confirmModal) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        
          <button onClick={closeModal}>X</button>
          {children}
        
      </div>
    </>, document.getElementById('portal')
  );
}