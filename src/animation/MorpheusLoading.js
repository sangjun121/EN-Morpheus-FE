import React, { useEffect, useState } from "react";
import "./Loading.css";

const MorpheusLoading = ({ onFinished }) => {
  useEffect(() => {
    // 마지막 직사각형의 애니메이션이 끝난 후 콜백 호출
    setTimeout(onFinished, 2800); // 총 시간 조정 가능
  }, [onFinished]);

  return (
    <div className="initial-loading">
      <h1 className="fade-in">Create your own story!</h1>
      <div
        className="loading-segment"
        style={{ animationDelay: "1000ms" }}
      ></div>
      <div
        className="loading-segment"
        style={{ animationDelay: "1200ms" }}
      ></div>
      <div
        className="loading-segment"
        style={{ animationDelay: "1400ms" }}
      ></div>
      <div
        className="loading-segment"
        style={{ animationDelay: "1600ms" }}
      ></div>
      <div
        className="loading-segment"
        style={{ animationDelay: "1800ms" }}
      ></div>
    </div>
  );
};

export default MorpheusLoading;
