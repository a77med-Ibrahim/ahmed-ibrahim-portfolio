import "./NavBar.css";
import React from "react";
import Icons from "./Icons/Icons";
import Avatar from "./Avatar/Avatar";
function NavBar() {
  const name = "Ahmed Ibrahim";
  const title = "Software Engineer";
  return (
    <div className="nav-bar">
      <p className="name">{name}</p>
      <p className="title">{title}</p>
      <Avatar />
      <Icons />
    </div>
  );
}
export default NavBar;
