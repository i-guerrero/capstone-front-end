import React from "react";
import Modal from "react-bootstrap/Modal";
import "./LogIn.css";

export default function LogIn({ children, openModal }) {
  if (!openModal) return null;

  return (
    <Modal show={openModal} centered>
      <Modal.Body className="p-4">{children}</Modal.Body>
    </Modal>
  );
}
