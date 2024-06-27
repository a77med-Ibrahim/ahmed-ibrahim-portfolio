import "./Avatar.css";
import React from "react";
import img from "./MyPic.jpeg";

function Avatar() {
  return (
    <div className="avatar-container">
      <img src={img} alt="My Avatar" className="avatar" />
    </div>
  );
}

export default Avatar;
