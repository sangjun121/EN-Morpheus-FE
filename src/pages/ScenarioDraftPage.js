import React, { useEffect, useState, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import reducer from "../api/Reducer";
import "./ScenarioDraftPage.css";
import UserRequestApi from "../api/UserRequestApi.js";
import Loading from "../components/CharacterResult/imageGenerationProcess/Loading.js";
import Error from "../components/CharacterResult/imageGenerationProcess/Error.js";

const ScenarioDraftPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [topic, setTopic] = useState("");
  const [characterId, setCharacterId] = useState(null);
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

  //동화책 이미지 생성 페이지로 정보 보내는 함수
  const navigateToImageGenerator = () => {
    navigate("/fairy-image-generate-page", {
      state: {
        title,
        story,
        subjectMatter,
        plot,
        characters,
        linguisticExpression,
        characterId,
      },
    });
  };

  const regenerateDraft = () => {
    fetchScenarioDraft(topic, characterId);
  };

  const { loading, data: responseStory, error } = state;
  const draftComponentAfterRequest = () => {
    if (loading) return <Loading />;
    if (error) return <Error regenerateImage={regenerateDraft} />;
    if (!responseStory) return null;
    return <div>{story}</div>;
  };

  useEffect(() => {
    const topic = location.state?.formattingTopic;
    const characterId = location.state?.characterId;
    console.log(topic);
    console.log(characterId);
    setTopic(topic);
    setCharacterId(characterId);

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
        <div className="scenario-draft-main-text">
          {draftComponentAfterRequest()}
        </div>
        <button
          className="change-scenario-draft-button" /*onClick={changeScenarioDraft}*/
        >
          retry
        </button>
      </div>
      <button
        className="decide-scenario-draft"
        onClick={navigateToImageGenerator}
      >
        Make Your FairyTale
      </button>
    </div>
  );
};

export default ScenarioDraftPage;
