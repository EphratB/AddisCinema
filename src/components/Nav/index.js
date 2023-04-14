import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navbar">
      <h1 className="nav_logo">Addis Cinema</h1>
      {/* <img className="nav_logo" src={addis} alt="logo" /> */}
      <nav className="nav_link">
        <Link to="/">Home</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/mylist">My list</Link>
      </nav>
      <div className="nav_avatar">
        <img className="nav_avatar" src="../assets/Addis.png" alt="avatar" />
      </div>
    </div>
  );
}
