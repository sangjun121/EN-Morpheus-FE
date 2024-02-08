import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MorpheusLoading from "../animation/MorpheusLoading";
import StoryLoadBox from "../components/StoryDataBox/StoryLoadBox";
import StoryCompletedBox from "../components/StoryDataBox/StoryCompletedBox";
import StoryCreateBox from "../components/StoryDataBox/StoryCreateBox";
import "./DataControlPage.css";

const DataControlPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isStoryLoadBoxExpanded, setIsStoryLoadBoxExpanded] = useState(false);

  const [isStoryCompletedBoxExpanded, setIsStoryCompletedBoxExpanded] =
    useState(false);
  const [isStoryCreateBoxExpanded, setIsStoryLoadCreateExpanded] =
    useState(false);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  const handleStoryLoadBoxClick = () => {
    setIsStoryLoadBoxExpanded(true);
    setIsStoryCompletedBoxExpanded(false);
    setIsStoryLoadCreateExpanded(false);
  };

  const handleStoryCreateBoxClick = () => {
    navigate("./morpheus-builder");
  };

  const handleStoryCompletedBoxClick = () => {
    setIsStoryLoadBoxExpanded(false);
    setIsStoryCompletedBoxExpanded(true);
    setIsStoryLoadCreateExpanded(false);
  };

  const handleCloseButtonClick = () => {
    setIsStoryLoadBoxExpanded(false);
    setIsStoryCompletedBoxExpanded(false);
    setIsStoryLoadCreateExpanded(false);
  };

  return (
    <div className="data-control-page">
      {loading && <MorpheusLoading onFinished={handleLoadingFinished} />}
      <div className="data-control-panel">
        {!isStoryLoadBoxExpanded && !isStoryCompletedBoxExpanded && (
          <div
            className="panel story-create"
            onClick={handleStoryCreateBoxClick}
          >
            <StoryCreateBox />
          </div>
        )}
      </div>
    </div>
  );
};

export default DataControlPage;
