import React from "react";
import thestar from "../assets/images/star.svg";

export default function (props) {
  const image = new URL(`../assets/images/${props.image}`, import.meta.url)
    .href;

  return (
    <div className="card">
      {props.status ? <p className="status">{props.status}</p> : ""}
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="rating">
          <img src={thestar} alt="" className="star" />
          <p>
            <span className="bold">{props.rating || 0}</span> (
            {props.review || 0}) • USA
          </p>
        </div>

        <p className="topic">{props.topic || "Dummy Topic"}</p>
        <p className="charges">
          <span className="bold">From ${props.fee || "00"}</span> / person
        </p>
      </div>
    </div>
  );
}
