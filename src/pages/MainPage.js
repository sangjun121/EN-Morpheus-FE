import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import MainLoading from "../animation/MainLoading";
import Headline from "../components/Main/Headline";
import "./MainPage.css";
import { useState } from "react";

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  return (
    <div className="main-page">
      {loading && <MainLoading onFinished={handleLoadingFinished} />}
      <Header />
      <Headline />
    </div>
  );
};

export default MainPage;
