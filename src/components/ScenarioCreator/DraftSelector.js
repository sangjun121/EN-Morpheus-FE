import React, { useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "../../api/API";
import reducer from "../../api/Reducer";
import "./ScenarioCreator.css";

const DraftSelector = ({ expanded, onClose }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  // 서버에서 시나리오 초안 내용 불러오는 함수
  // const fetchScenarioDraft = async () => {
  //   dispatch({ type: "LOADING" });
  //   try {
  //     const response = await .post("url");
  //     dispatch({ type: "SUCCESS", data: response.data });
  //   } catch (e) {
  //     dispatch({ type: "ERROR", error: e });
  //   }
  // };

  // useEffect(() => {
  //   fetchScenarioDraft();
  // }, []);

  return (
    <div className={`box-wrapper ${expanded ? "expanded" : ""}`}>
      <div className="scenario-box-wrapper-headline">
        <span className="step">Step 3</span>
        <br></br>Select Your Draft
      </div>
      {expanded && (
        <div>
          <div className="scenario-draft-headline">Scenario Draft</div>
          <button /*onClick={changeScenarioDraft}*/>retry</button>
          <div className="scenario-draft-main-text">
            {/*scenarioDraft.text*/}
          </div>
          <button>Make Your FairyTale</button>
          <button className="box-close-button" onClick={handleButtonClick}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DraftSelector;
