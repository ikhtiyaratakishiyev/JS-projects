import React, { useState } from "react";

const arr = [
  ["BMW", "M3"],
  ["Audi", "A4"],
  ["Mercedes", "C63"],
];

const Home = () => {
  return (
    <div>
      <ul>
        {arr.map(([brand, model]) => (
          <li>
            Brand:{brand},Model:{model}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
