import { useState } from "react";
import { FoodContainerCreationModal } from "./foodContainerCreationModal/foodContainerCreationModal";
import { OpenModalButton } from "./openModalButton/openModalButton";

export function CreateFoodContainer() {
  const [isCreatingFoodContainer, setIsCreatingFoodContainer] = useState(false);

  function toggleCreateFoodContainer() {
    setIsCreatingFoodContainer((isCreatingFoodContainer) => !isCreatingFoodContainer);
  }

  return isCreatingFoodContainer
    ? <FoodContainerCreationModal closeModal={toggleCreateFoodContainer} />
    : <OpenModalButton onPress={toggleCreateFoodContainer} />;
}