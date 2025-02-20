import { View } from "react-native";
import { FoodContainers } from "./foodContainers/foodContainers";
import { foodContainersMock } from "@/src/__mock__/foodContainers";
import { styles } from "./home.styles";

export function Home() {
  return (
    <View style={styles.home}>
      <FoodContainers foodContainers={foodContainersMock} />
    </View>
  );
}