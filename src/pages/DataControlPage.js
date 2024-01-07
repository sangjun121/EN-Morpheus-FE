import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MorpheusLoading from "../animation/MorpheusLoading";
import "./DataControlPage.css";

const DataControlPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };

  let navigate = useNavigate();
  return (
    <div>
      {loading && <MorpheusLoading onFinished={handleLoadingFinished} />}
      <div className="data-control-panel">
        <button>load data</button>
        <button onClick={() => navigate("/topic-setup")}>create story</button>
        <button>completed story</button>
      </div>
    </div>
  );
};

export default DataControlPage;
