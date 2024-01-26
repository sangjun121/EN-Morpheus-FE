import React, { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/API";
import reducer from "../api/Reducer";
import "./ScenarioDraftPage.css";

const ScenarioDraftPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  //   const fetchScenarioDraft = async () => {
  //     dispatch({ type: "LOADING" });
  //     try {
  //       const response = await API.get("url");
  //       dispatch({ type: "SUCCESS", data: response.data });
  //     } catch (e) {
  //       dispatch({ type: "ERROR", error: e });
  //     }
  //   };

  //   useEffect(() => {
  //     fetchScenarioDraft();
  //   }, []);

  //   const changeScenarioDraft = () => {
  //     fetchScenarioDraft();
  //   };

  //   const { loading, data: scenarioDraft, error } = state;

  //   if (loading) return <div>loading...</div>;
  //   if (error) return <div>server error</div>;
  //   if (!scenarioDraft) return null;

  return (
    <div className="scenario-draft-page">
      <div className="scenario-draft-headline">
        How do you like this <br></br>fairy tale content?
      </div>
      <button
        className="change-scenario-draft" /*onClick={changeScenarioDraft}*/
      >
        retry
      </button>
      <div className="scenario-draft-main-text">{/*scenarioDraft.text*/}</div>
      <button
        className="decide-scenario-draft"
        onClick={() => navigate("/fairy-image-generate-page")}
      >
        Make Your FairyTale
      </button>
    </div>
  );
};

export default ScenarioDraftPage;
