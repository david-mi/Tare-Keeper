import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./foodContainer.styles";
import { FoodContainerType } from "@/src/types";
import { formatWeight } from "@/src/utils";

type Props = FoodContainerType & {
  onPress: (foodContainer: FoodContainerType) => void;
};

export function FoodContainer({ onPress, ...foodContainer }: Props) {
  function handlePress() {
    onPress(foodContainer);
  }

  return (
    <Pressable style={styles.foodContainer} onPress={handlePress}>
      <View style={styles.infos}>
        <Text style={styles.name}>{foodContainer.name}</Text>
        <Text style={styles.weight}>{formatWeight(foodContainer.weightInGrams)}</Text>
      </View>
      <Image source={{ uri: foodContainer.base64Picture, width: 80, height: 80 }} />
    </Pressable>
  );
}