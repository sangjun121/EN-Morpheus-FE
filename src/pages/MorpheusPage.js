import React, { useState } from "react";
import MorpheusLoading from "../animation/MorpheusLoading";

const MorpheusPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinished = () => {
    setLoading(false);
  };
  return (
    <div>
      {loading && <MorpheusLoading onFinished={handleLoadingFinished} />}
      <div></div>
    </div>
  );
};

export default MorpheusPage;
