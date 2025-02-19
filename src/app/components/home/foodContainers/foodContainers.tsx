import { FoodContainerType } from "@/src/types";
import { Text, View, Image } from "react-native";
import { styles } from "./foodContainers.styles";

interface Props {
  foodContainers: FoodContainerType[];
}

export function FoodContainers({ foodContainers }: Props) {
  return (
    <View style={styles.foodContainers}>
      {foodContainers.map(({ id, name, weightInGrams, base64Picture }) => {
        return (
          <View key={id} style={styles.foodContainer}>
            <View style={styles.infos}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.weight}>{weightInGrams} g</Text>
            </View>
            <Image source={{ uri: base64Picture, width: 80, height: 80 }} />
          </View>
        );
      })}
    </View>
  );
}