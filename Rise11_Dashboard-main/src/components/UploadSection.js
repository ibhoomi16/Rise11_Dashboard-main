import React from "react";
import SectionCard from "./SectionCard";
import "./ClaimForm.css";

const ClaimForm = () => {
  return (
    <div className="claim-form">
      <h2>File your Claim. (Approx 5 Minutes)</h2>
      <div className="form-sections">
        <SectionCard
          title="Claim Value"
          fields={[
            { label: "Contract Value", placeholder: "Enter value", type: "text" },
            { label: "Claim Value", placeholder: "Enter value", type: "text" },
          ]}
        />
        <SectionCard
          title="Place"
          fields={[
            {
              label: "Select Place",
              placeholder: "Enter place",
              type: "text",
            },
          ]}
        />
        <SectionCard
          title="Language"
          fields={[
            {
              label: "Select Language",
              placeholder: "Enter language",
              type: "text",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ClaimForm;

