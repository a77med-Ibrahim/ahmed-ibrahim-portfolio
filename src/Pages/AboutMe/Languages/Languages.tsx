import "./Languages.css";
import "../ProgressBar/ProgressBar.css";
import React, { useEffect, useState } from "react";

function Languages() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div>
      <h1 className="languages-title">Languages</h1>
      <div className="languages-details">
        <div className="language-item">
          <h3>Arabic</h3>
          <div className="progress-bar-container">
            <div className="progress-bar-background"></div>
            <div className="progress-bar-fill-100"></div>
          </div>
        </div>
        <div className="language-item">
          <h3>English</h3>
          <div className="progress-bar-container">
            <div className="progress-bar-background"></div>
            <div className="progress-bar-fill-95"></div>
          </div>
        </div>
        <div className="language-item">
          <h3>Turkish</h3>
          <div className="progress-bar-container">
            <div className="progress-bar-background"></div>
            <div className="progress-bar-fill-60"></div>
          </div>
        </div>
        <div className="language-item">
          <h3>Spanish</h3>
          <div className="progress-bar-container">
            <div className="progress-bar-background"></div>
            <div className="progress-bar-fill-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
