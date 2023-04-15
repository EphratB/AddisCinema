import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function TvShows() {
  return (
    <>
      <article>
        <Outlet />
      </article>
      <aside className="side-menu">
        <NavLink to="/popular">Popular TV Shows</NavLink>
        <NavLink to="/tvshows/toprated">Top Rated</NavLink>
        <NavLink to="/tvshows/airingtoday">Airing Today</NavLink>
      </aside>
    </>
  );
}

export default TvShows;
