import React from "react";

export const Vehicles = ({ vehicle }) => {
  return (
    <div
      style={{
        height: 50,
        width: 100,
        backgroundColor: "grey",
        margin: 10,
      }}
    >
      {vehicle}
    </div>
  );
};
