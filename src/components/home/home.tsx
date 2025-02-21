import { View } from "react-native";
import { FoodContainers } from "./foodContainers/foodContainers";
import { styles } from "./home.styles";
import { clientStore } from "@/src/services/clientStore/clientStore";

export function Home() {
  const foodContainers = clientStore((state) => state.foodContainers);

  return (
    <View style={styles.home}>
      <FoodContainers foodContainers={foodContainers} />
    </View>
  );
}