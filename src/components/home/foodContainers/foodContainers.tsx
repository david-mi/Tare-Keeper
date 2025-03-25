import { FoodContainerType } from "@/src/types";
import { ListRenderItem } from "react-native";
import { styles } from "./foodContainers.styles";
import { FoodContainer } from "./foodContainer/foodContainer";
import { WeightCalculationModal } from "./weightCalculationModal/weightCalculationModal";
import { useCallback, useRef, useState } from "react";
import Animated, { LinearTransition } from "react-native-reanimated";

interface Props {
  foodContainers: FoodContainerType[];
}

export function FoodContainers({ foodContainers }: Props) {
  const [selectedFoodContainer, setSelectedFoodContainer] = useState<FoodContainerType | null>(null);
  const animatedFlatListRef = useRef<Animated.FlatList<FoodContainerType[]>>(null!);
  const foodContainersAmountRef = useRef(foodContainers.length);

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

  const onContentSizeChange = () => {
    const foodContainersLength = foodContainers.length;

    if (foodContainersLength > foodContainersAmountRef.current) {
      animatedFlatListRef.current.scrollToEnd();
    }

    foodContainersAmountRef.current = foodContainers.length;
  };

  if (selectedFoodContainer) {
    return (
      <WeightCalculationModal
        {...selectedFoodContainer}
        closeModal={closeWeightCalculationModal}
      />
    );
  }

  return (
    <Animated.FlatList
      ref={animatedFlatListRef}
      contentContainerStyle={styles.foodContainers}
      data={foodContainers}
      renderItem={renderItem}
      itemLayoutAnimation={LinearTransition}
      onContentSizeChange={onContentSizeChange}
    />
  );
}