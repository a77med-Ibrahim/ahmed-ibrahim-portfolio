import "./NavBar.css";
import React from "react";
import Icons from "./Icons/Icons";
import Avatar from "./Avatar/Avatar";
import DownlaodCv from "./DownloadCV/DownloadCV";

function NavBar() {
  const name = "Ahmed Ibrahim";
  const title = "Software Engineer";
  return (
    <div>
      <Avatar />
      <div className="nav-bar">
        <p className="name">{name}</p>
        <p className="title">{title}</p>

        <DownlaodCv />
        {/* <Icons /> */}
      </div>
    </div>
  );
}
export default NavBar;
