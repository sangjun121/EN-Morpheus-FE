import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./StoryDataBox.css";

const StoryLoadBox = ({ expanded, onClose }) => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="box-wrapper-headline">Load Data</div>
      {expanded && (
        <button className="box-close-button" onClick={handleButtonClick}>
          Close
        </button>
      )}
    </div>
  );
};

export default StoryLoadBox;
