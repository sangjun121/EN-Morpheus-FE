import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./ScenarioCreator.css";

const CharacterSelector = ({ expanded, onClose }) => {
  const navigate = useNavigate();
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  // const fetchCharacterList = async () => {
  //   dispatch({ type: "LOADING" });
  //   try {
  //     const response = await API.get("url");
  //     dispatch({ type: "SUCCESS", data: response.data });
  //   } catch (e) {
  //     dispatch({ type: "ERROR", error: e });
  //   }
  // };

  // useEffect(() => {
  //   fetchCharacterList();
  // }, []);

  // const { loading, data: userCharacter, error } = state;

  // if (loading) return <div>loading...</div>;
  // if (error) return <div>server error</div>;
  // if (!userCharacter) return null;

  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="scenario-box-wrapper-headline">
        <span className="step">Step 2</span>
        <br></br>Select Your Character
      </div>
      {expanded && (
        <div>
          <div className="character-list">
            <div className="character-header">
              <div>Character Image</div>
              <div>Character Name</div>
              <div>Character Creation Time</div>
            </div>
            {/* {userCharacter.map(character=>(
            <div key={character.id} className="character-item">
              <img src={character.imageUrl} alt={character.name}/>
              <span>{character.name}</span>
              <span>{character.creationTime}</span>
            </div>
          ))} */}
          </div>
          <button onClick={() => navigate("/character")}>
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
