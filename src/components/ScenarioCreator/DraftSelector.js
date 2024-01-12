import React, { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
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
  // const fetchScenarioDraft = async () => {
  //   dispatch({ type: "LOADING" });
  //   try {
  //     const response = await API.get("url");
  //     dispatch({ type: "SUCCESS", data: response.data });
  //   } catch (e) {
  //     dispatch({ type: "ERROR", error: e });
  //   }
  // };

  // useEffect(() => {
  //   fetchScenarioDraft();
  // }, []);

  // const changeScenarioDraft = () => {
  //   fetchScenarioDraft();
  // };

  // const { loading, data: scenarioDraft, error } = state;

  // if (loading) return <div>loading...</div>;
  // if (error) return <div>server error</div>;
  // if (!scenarioDraft) return null;
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
