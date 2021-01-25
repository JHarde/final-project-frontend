import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { Vehicles } from "components/Vehicles";

export const Task3 = () => {
  const question = useSelector((store) => store.game.questions[1]);
  const answersArray = question.answers;

  const vehicles = answersArray.map(({ answer }) => answer);
  const [vehicle, setVehicle] = useState(vehicles);

  const SortableVehiclesContainer = sortableContainer(({ children }) => (
    <div>{children}</div>
  ));

  const SortableVehicle = sortableElement(({ vehicle }) => (
    <Vehicles key={vehicle} vehicle={vehicle} />
  ));

  const onSortEnd = ({ oldIndex, newIndex }) =>
    setVehicle(arrayMove(vehicle, oldIndex, newIndex));

  return (
    <div>
      <h1>{question.question}</h1>
      <div>
        <SortableVehiclesContainer axis="y" onSortEnd={onSortEnd}>
          {vehicle.map((item, index) => (
            <SortableVehicle key={item} vehicle={item} index={index} />
          ))}
        </SortableVehiclesContainer>
      </div>
    </div>
  );
};
