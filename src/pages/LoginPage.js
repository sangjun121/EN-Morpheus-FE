import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginLoading from "../animation/LoginLoading";
import LoginBox from "../components/LoginBox/LoginBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookQuran } from "@fortawesome/free-solid-svg-icons";
import "./LoginPage.css";

const LoginPage = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };
  return (
    <div className="login-page">
      {loading && <LoginLoading onFinished={handleLoadingFinished} />}
      <div>
        <div className="login-header" onClick={() => navigate("/")}>
          <FontAwesomeIcon className="login-logo" icon={faBookQuran} />
          <span className="login-brand">MORPHEUS</span>
        </div>
        <LoginBox />
      </div>
    </div>
  );
};

export default LoginPage;
