import { FoodContainerType } from "@/src/types";
import { View } from "react-native";
import { styles } from "./foodContainers.styles";
import { FoodContainer } from "./foodContainer/foodContainer";

interface Props {
  foodContainers: FoodContainerType[];
}

export function FoodContainers({ foodContainers }: Props) {
  return (
    <View style={styles.foodContainers}>
      {foodContainers.map((foodContainerProps) => {
        return <FoodContainer {...foodContainerProps} />;
      })}
    </View>
  );
}