import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reducer from "../api/Reducer";
import "./ScenarioDraftPage.css";
import UserRequestApi from "../api/UserRequestAPI";

const ScenarioDraftPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [subjectMatter, setSubjectMatter] = useState("");
  const [plot, setPlot] = useState("");
  const [characters, setCharacters] = useState("");
  const [linguisticExpression, setLinguisticExpression] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  // 서버에서 시나리오 초안 내용 불러오는 함수
  const fetchScenarioDraft = async (topic, characterId) => {
    console.log("시나리오 초안 api호출");
    dispatch({ type: "LOADING" });
    try {
      const response = await UserRequestApi.post("/fairy/prompt", {
        topic: topic,
        characterId: characterId,
      });
      const data = response.data.response.code;
      setTitle(data.title);
      setStory(data.story);
      setSubjectMatter(data.subjectMatter);
      setPlot(data.plot);
      setCharacters(data.characters);
      setLinguisticExpression(data.linguisticExpression);
      dispatch({ type: "SUCCESS", data: response.data });
      console.log(response);
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    const topic = location.state?.topic;
    const characterId = location.state?.characterId;
    console.log(topic);
    console.log(characterId);

    if (topic && characterId) {
      fetchScenarioDraft(topic, characterId);
    } else {
      console.log("topic, characterId정보 안담김");
    }
  }, [location.state]);

  return (
    <div className="scenario-draft-page">
      <div className="scenario-draft-wrapper">
        <div className="scenario-draft-headline">
          How do you like this <br></br>fairy tale content?
        </div>
        <div className="scenario-draft-main-text">{story}</div>
        <button
          className="change-scenario-draft-button" /*onClick={changeScenarioDraft}*/
        >
          retry
        </button>
      </div>
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
