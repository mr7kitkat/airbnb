import React from "react";
import Card from "./Card";

import data from "../assets/data";

export default function () {
  // {
  //   status, image, rating, topic, fee;
  // }

  return (
    <section className="cards">
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </section>
  );
}
