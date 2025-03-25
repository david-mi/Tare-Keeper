import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable } from "react-native";
import { EDIT_BUTTON_WIDTH, styles } from "./editFoodContainer.styles";
import { SwipeableMethods } from "react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable";
import { FoodContainerType } from "@/src/types";
import Animated, { interpolate, SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated";

interface Props {
  swipeable: SwipeableMethods;
  foodContainer: FoodContainerType;
  dragAnimatedValue: SharedValue<number>;
}

export function EditFoodContainer({ swipeable, foodContainer, dragAnimatedValue }: Props) {
  function toggleEditFoodContainer() {
    swipeable.close();
  }

  const animations = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(dragAnimatedValue.value, [0, EDIT_BUTTON_WIDTH], [0, 1]) },
        { translateX: interpolate(dragAnimatedValue.value, [0, EDIT_BUTTON_WIDTH], [EDIT_BUTTON_WIDTH * 3, 0]) },
      ],
      opacity: interpolate(dragAnimatedValue.value, [0, EDIT_BUTTON_WIDTH], [0, 1])
    };
  });

  return (
    <Pressable onPress={toggleEditFoodContainer} style={styles.editButton}>
      <Animated.View style={animations}>
        <MaterialCommunityIcons name="file-edit" style={styles.editIcon} />
      </Animated.View>
    </Pressable>
  );
}