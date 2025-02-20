import { FoodContainerType } from "@/src/types";
import { View } from "react-native";
import { styles } from "./foodContainers.styles";
import { FoodContainer } from "./foodContainer/foodContainer";
import { WeightCalculationModal } from "./weightCalculationModal/weightCalculationModal";
import { useState } from "react";

interface Props {
  foodContainers: FoodContainerType[];
}

export function FoodContainers({ foodContainers }: Props) {
  const [selectedFoodContainer, setSelectedFoodContainer] = useState<FoodContainerType | null>(null);

  function openWeightCalculationModal(foodContainer: FoodContainerType) {
    setSelectedFoodContainer(foodContainer);
  }

  function closeWeightCalculationModal() {
    setSelectedFoodContainer(null);
  }

  if (selectedFoodContainer) {
    return (
      <WeightCalculationModal
        {...selectedFoodContainer}
        onCloseButtonPress={closeWeightCalculationModal}
      />
    );
  }

  return (
    <View style={styles.foodContainers}>
      {foodContainers.map(({ ...foodContainerProps }) => {
        return (
          <FoodContainer
            key={foodContainerProps.id}
            onPress={openWeightCalculationModal}
            {...foodContainerProps}
          />
        );
      })}
    </View>
  );
}