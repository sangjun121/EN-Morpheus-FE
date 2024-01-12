import React, { useState } from "react";
import MorpheusLoading from "../animation/MorpheusLoading";
import "./MorpheusBuilderPage.css";
import ThemeSelector from "../components/ScenarioCreator/ThemeSelector";
import CharactorSelector from "../components/ScenarioCreator/CharacterSelector";
import DraftSelector from "../components/ScenarioCreator/DraftSelector";
import ImageSelector from "../components/ScenarioCreator/ImageSelector";

const MorpheusBuilderPage = () => {
  const [loading, setLoading] = useState(true);
  const [isThemeBoxExpanded, setIsThemeBoxExpanded] = useState(false);
  const [isCharacterBoxExpanded, setIsCharacterBoxExpanded] = useState(false);
  const [isDraftBoxExpanded, setIsDraftBoxExpanded] = useState(false);
  const [isScenarioBoxExpanded, setIsScenarioBoxExpanded] = useState(false);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  const handleThemeBoxClick = () => {
    setIsThemeBoxExpanded(true);
    setIsCharacterBoxExpanded(false);
    setIsDraftBoxExpanded(false);
    setIsScenarioBoxExpanded(false);
  };

  const handleCharacterBoxClick = () => {
    setIsThemeBoxExpanded(false);
    setIsCharacterBoxExpanded(true);
    setIsDraftBoxExpanded(false);
    setIsScenarioBoxExpanded(false);
  };

  const handleDraftBoxClick = () => {
    setIsThemeBoxExpanded(false);
    setIsCharacterBoxExpanded(false);
    setIsDraftBoxExpanded(true);
    setIsScenarioBoxExpanded(false);
  };

  const handleScenarioBoxClick = () => {
    setIsThemeBoxExpanded(false);
    setIsCharacterBoxExpanded(false);
    setIsDraftBoxExpanded(false);
    setIsScenarioBoxExpanded(true);
  };

  const handleCloseButtonClick = () => {
    setIsThemeBoxExpanded(false);
    setIsCharacterBoxExpanded(false);
    setIsDraftBoxExpanded(false);
    setIsScenarioBoxExpanded(false);
  };

  return (
    <div className="scenario-making-page">
      {loading && <MorpheusLoading onFinished={handleLoadingFinished} />}
      <div className="scenario-making-panel">
        {!isCharacterBoxExpanded &&
          !isDraftBoxExpanded &&
          !isScenarioBoxExpanded && (
            <div className="theme-panel" onClick={handleThemeBoxClick}>
              <ThemeSelector
                expanded={isThemeBoxExpanded}
                onClose={handleCloseButtonClick}
              ></ThemeSelector>
            </div>
          )}
        {!isThemeBoxExpanded &&
          !isDraftBoxExpanded &&
          !isScenarioBoxExpanded && (
            <div className="character-panel" onClick={handleCharacterBoxClick}>
              <CharactorSelector
                expanded={isCharacterBoxExpanded}
                onClose={handleCloseButtonClick}
              ></CharactorSelector>
            </div>
          )}
        {!isThemeBoxExpanded &&
          !isCharacterBoxExpanded &&
          !isScenarioBoxExpanded && (
            <div className="draft-panel" onClick={handleDraftBoxClick}>
              <DraftSelector
                expanded={isDraftBoxExpanded}
                onClose={handleCloseButtonClick}
              ></DraftSelector>
            </div>
          )}
        {!isThemeBoxExpanded &&
          !isCharacterBoxExpanded &&
          !isDraftBoxExpanded && (
            <div className="scenario-panel" onClick={handleScenarioBoxClick}>
              <ImageSelector
                expanded={isScenarioBoxExpanded}
                onClose={handleCloseButtonClick}
              ></ImageSelector>
            </div>
          )}
      </div>
    </div>
  );
};

export default MorpheusBuilderPage;
