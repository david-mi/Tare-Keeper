import { FoodContainerType } from "@/src/types";
import { FlatList, ListRenderItem } from "react-native";
import { styles } from "./foodContainers.styles";
import { FoodContainer } from "./foodContainer/foodContainer";
import { WeightCalculationModal } from "./weightCalculationModal/weightCalculationModal";
import { useCallback, useState } from "react";

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

  const renderItem: ListRenderItem<FoodContainerType> = useCallback(({ item }) => {
    return (
      <FoodContainer
        key={item.id}
        onPress={openWeightCalculationModal}
        {...item}
      />
    );
  }, []);

  if (selectedFoodContainer) {
    return (
      <WeightCalculationModal
        {...selectedFoodContainer}
        closeModal={closeWeightCalculationModal}
      />
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.foodContainers}
      data={foodContainers}
      renderItem={renderItem}
    />
  );
}