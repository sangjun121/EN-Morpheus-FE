import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import MainLoading from "../animation/MainLoading";
import "./MainPage.css";
import { useState } from "react";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && <MainLoading onFinished={handleLoadingFinished} />}
      <Header></Header>
      <div className="main-container"></div>
    </div>
  );
};

export default MainPage;
