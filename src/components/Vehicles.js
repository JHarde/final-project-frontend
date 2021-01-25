import React from "react";
import { sortableElement } from "react-sortable-hoc";

export const Vehicles = ({ vehicle }) => {
  //   const sortableVehicle = sortableElement(({ vehicle }) => (
  //     <div>{vehicle}</div>
  //   ));
  return (
    <div>{vehicle}</div>
    // <sortableVehicle
    //   style={{
    //     height: 50,
    //     width: 100,
    //     backgroundColor: "grey",
    //     margin: 10,
    //   }}
    // >
    //   {vehicle}
    // </sortableVehicle>
  );
};
