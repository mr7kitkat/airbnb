import React from "react";
import HeroImage from "../assets/images/hero-section.jpg";

export default function () {
  return (
    <section className="hero-section">
      <img src={HeroImage} alt="" className="hero-image" />

      <div className="content">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
