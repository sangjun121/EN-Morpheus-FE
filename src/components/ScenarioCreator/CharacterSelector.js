import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./ScenarioCreator.css";

const CharacterSelector = ({ expanded, onClose }) => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="scenario-box-wrapper-headline">
        <span className="step">Step 2</span>
        <br></br>Select Your Character
      </div>
      {expanded && (
        <button className="box-close-button" onClick={handleButtonClick}>
          Close
        </button>
      )}
    </div>
  );
};

export default CharacterSelector;
