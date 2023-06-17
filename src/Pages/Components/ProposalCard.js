import React from "react";
import "../ProfilePage.css";

export default function ProposalCard({ description, title, impact }) {
  return (
    <div className="prop-card">
      <h4>
        Title : <span>{title}</span>
      </h4>

      <h4>
        Description : <span>{description} </span>
      </h4>

      <h4>
        Impact : <span>{impact}</span>
      </h4>
    </div>
  );
}
