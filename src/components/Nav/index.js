import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { CgGirl } from "react-icons/cg";

export default function Nav() {
  return (
    <div className="navbar">
      <h1 className="nav_logo">Addis Cinema</h1>
      {/* <img className="nav_logo" src={addis} alt="logo" /> */}
      <nav className="nav_link">
        <Link to="/movies/:id">Home</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/mylist">My list</Link>
      </nav>
      <div className="nav_avatar">
        <CgGirl
          style={{
            color: "#017562",
            width: "60px",
            height: "60px",
            backgroundColor: "#111",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        {/* Todo: do user authentication*/}
        {/* <img
          className="nav_avatar"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt="cartoon avatar"
        /> */}
      </div>
    </div>
  );
}
