import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";
import { DELETE_BUTTON_WIDTH, styles } from "./deleteFoodContainer.styles";
import { SwipeableMethods } from "react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable";
import { Alert } from "react-native";
import { FoodContainerType } from "@/src/types";
import Animated, { interpolate, SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { clientStore } from "@/src/services/clientStore/clientStore";

interface Props {
  swipeable: SwipeableMethods;
  foodContainer: FoodContainerType;
  dragAnimatedValue: SharedValue<number>;
}

export function DeleteFoodContainer({ swipeable, foodContainer, dragAnimatedValue }: Props) {
  const deleteFoodContainer = clientStore((state) => state.deleteFoodContainer);

  const animations = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(dragAnimatedValue.value, [0, -DELETE_BUTTON_WIDTH], [0, 1]) },
        { translateX: interpolate(dragAnimatedValue.value, [0, -DELETE_BUTTON_WIDTH], [-DELETE_BUTTON_WIDTH * 3, 0]) },
      ],
      opacity: interpolate(dragAnimatedValue.value, [0, -DELETE_BUTTON_WIDTH], [0, 1])
    };
  });

  function onPress() {
    Alert.alert(`Supprimer ${foodContainer.name} ?`, "Cette action est irréversible", [
      {
        text: "Supprimer",
        onPress: () => {
          deleteFoodContainer(foodContainer.id);
        }
      },
      {
        text: "Annuler",
        onPress: () => {
          console.log("Delete abort");
          swipeable.close();

        }
      }
    ]);
  }

  return (
    <Pressable onPress={onPress} style={styles.deleteButton}>
      <Animated.View style={animations}>
        <MaterialCommunityIcons name="delete-sweep" style={styles.deleteIcon} />
      </Animated.View>
    </Pressable>
  );
}