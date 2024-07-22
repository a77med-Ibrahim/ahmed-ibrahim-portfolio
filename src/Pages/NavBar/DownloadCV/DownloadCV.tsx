import React from "react";
import "./DownloadCV.css";
import cv from "./AhmedIbrahim_CV.pdf";
function DownlaodCv() {
  return (
    <div>
      <h2>
        <a href={cv} download="AhmedIbrahim_CV.pdf">
          DOWNLOAD CV
        </a>
      </h2>
    </div>
  );
}

export default DownlaodCv;
