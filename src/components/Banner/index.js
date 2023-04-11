import React from "react";
import PageLoader from "../PageLoader";

function Banner() {
  return (
    <PageLoader title="Ginny &amp; Georgia">
      <h1 className="banner_description">
        Angsty and awkward fifteen year old Ginny Miller often feels more mature
        than her thirty year old mother, the irresistible and dynamic Georgia
        Miller...
      </h1>
      <div className="banner_buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
    </PageLoader>
  );
}

export default Banner;
