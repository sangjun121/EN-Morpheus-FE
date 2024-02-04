import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../../api/Reducer";
import "./StoryDataBox.css";

const StoryCompletedBox = ({ expanded, onClose }) => {
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="box-wrapper-headline">Completed Story</div>
      {expanded && (
        <button className="box-close-button" onClick={handleButtonClick}>
          Close
        </button>
      )}
    </div>
  );
};

export default StoryCompletedBox;
