import React, { useState, useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./ScenarioCreator.css";
import UserRequestApi from "../../api/UserRequestAPI";

const CharacterSelector = ({ expanded, onClose, onCharacterSelect }) => {
  const navigate = useNavigate();
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };
  const [characterInfo, setCharacterInfo] = useState([]);
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(null);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //캐릭터 정보 상위 컴포넌트로 넘기기
  const handleCharacterSelect = () => {
    if (selectedCharacterIndex != null) {
      const selectedCharacterId = characterInfo[selectedCharacterIndex].id;
      onCharacterSelect(selectedCharacterId);
    }
  };

  //캐릭터 정보 리스트 서버에서 요청하기
  const fetchCharacterInformation = async () => {
    console.log("api호출");
    dispatch({ type: "LOADING" });
    try {
      const response = await UserRequestApi.get("/character/list");
      setCharacterInfo(response.data.response.code);
      dispatch({ type: "SUCCESS", data: response.data });
      console.log(response.data.response.code);
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  //캐릭터 선택 이벤트
  const onCharacterClick = (index) => {
    setSelectedCharacterIndex(index);
  };

  useEffect(() => {
    fetchCharacterInformation();
  }, []);

  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="scenario-box-wrapper-headline">
        <span className="step">Step 1</span>
        <br></br>Select Your Character
      </div>
      {expanded && (
        <div className="character-list-parent">
          <div className="character-list">
            <div className="character-header">
              <div>Number</div>
              <div className="character-name">Character Name</div>
              <div>Character Image</div>
            </div>
            {characterInfo.map((character, index) => (
              <div
                className={`character-info ${
                  index === selectedCharacterIndex ? "selected" : ""
                }`}
                key={index}
                onClick={() => onCharacterClick(index)}
              >
                <div>{index + 1}</div>
                <div className="charcter-name">{character.name}</div>
                <div className="character-image">
                  <img src={character.image} alt={character.name}></img>
                </div>
              </div>
            ))}
          </div>
          <button
            className="character-selector-create-button"
            onClick={() => navigate("/character")}
          >
            Create new character
          </button>
          <button
            className="box-close-button"
            onClick={(event) => {
              handleCharacterSelect();
              handleButtonClick(event);
            }}
          >
            Select Character
          </button>
        </div>
      )}
    </div>
  );
};

export default CharacterSelector;
