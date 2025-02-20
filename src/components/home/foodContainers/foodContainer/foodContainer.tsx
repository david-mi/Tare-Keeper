import { Text, View, Image } from "react-native";
import { styles } from "./foodContainer.styles";
import { FoodContainerType } from "@/src/types";
import { formatWeight } from "@/src/utils";

export function FoodContainer({ name, weightInGrams, base64Picture }: FoodContainerType) {
  return (
    <View style={styles.foodContainer}>
      <View style={styles.infos}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.weight}>{formatWeight(weightInGrams)}</Text>
      </View>
      <Image source={{ uri: base64Picture, width: 80, height: 80 }} />
    </View>
  );
}