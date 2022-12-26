import React from "react";
import card1 from "../assets/images/card-1.jpg";
import thestar from "../assets/images/star.svg";

export default function () {
  return (
    <div className="card">
      <p className="status">SOLD OUT</p>
      <img src={card1} alt="" />
      <div className="details">
        <div className="rating">
          <img src={thestar} alt="" className="star" />
          <p>
            <span className="bold">5.0</span> (6) • USA
          </p>
        </div>

        <p className="topic">Life lessons with Katie Zaferes</p>
        <p className="charges">
          <span className="bold">From $136</span> / person
        </p>
      </div>
    </div>
  );
}
