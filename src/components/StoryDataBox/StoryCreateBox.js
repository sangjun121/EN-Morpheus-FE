import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../../api/Reducer";
import "./StoryDataBox.css";

const StoryCreateBox = ({ expanded, onClose }) => {
  let navigate = useNavigate();
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="box-wrapper-headline">Create Story</div>
      {expanded && (
        <div>
          <button
            className="box-create-button"
            onClick={() => navigate("./morpheus-builder")}
          >
            create story
          </button>
          <button className="box-close-button" onClick={handleButtonClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default StoryCreateBox;
