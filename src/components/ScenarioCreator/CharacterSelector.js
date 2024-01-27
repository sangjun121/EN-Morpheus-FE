import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./ScenarioCreator.css";
import UserRequestApi from "../../api/UserRequestAPI";

const CharacterSelector = ({ expanded, onClose }) => {
  const navigate = useNavigate();
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  const [characterInfo, setCharacterInfo] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchCharacterInformation = async () => {
    console.log("api호출");
    dispatch({ type: "LOADING" });
    try {
      const response = await UserRequestApi.get("/character/list");
      setCharacterInfo(response.data.response.code);
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="scenario-box-wrapper-headline">
        <span className="step">Step 1</span>
        <br></br>Select Your Character
      </div>
      {expanded && (
        <div>
          <div className="character-list">
            <div className="character-header">
              <div>Number</div>
              <div className="character-name">Character Name</div>
              <div>Character Image</div>
            </div>
          </div>
          <button
            className="character-selector-create-button"
            onClick={() => navigate("/character")}
          >
            Create new character
          </button>
          <button className="box-close-button" onClick={handleButtonClick}>
            Select Character
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelector;
