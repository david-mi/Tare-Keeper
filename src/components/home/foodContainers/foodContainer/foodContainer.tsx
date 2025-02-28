import { Text, View, Image, Pressable } from "react-native";
import { styles } from "./foodContainer.styles";
import { FoodContainerType } from "@/src/types";
import { formatWeight } from "@/src/utils";
import ReanimatedSwipeable, { SwipeableMethods } from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, { SharedValue, useAnimatedStyle, useSharedValue, interpolate } from "react-native-reanimated";
import { DeleteFoodContainer } from "./deleteFoodContainer/deleteFoodContainer";

type Props = FoodContainerType & {
  onPress: (foodContainer: FoodContainerType) => void;
};

interface RightActionDeleteProps {
  progressAnimatedValue: SharedValue<number>,
  dragAnimatedValue: SharedValue<number>,
  swipeable: SwipeableMethods;
  foodContainer: FoodContainerType;
}

function RightAction({ dragAnimatedValue, swipeable, foodContainer }: RightActionDeleteProps) {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dragAnimatedValue.value }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <DeleteFoodContainer
        swipeable={swipeable}
        foodContainer={foodContainer}
        dragAnimatedValue={dragAnimatedValue}
      />
    </Reanimated.View>
  );
}

export function FoodContainer({ onPress, ...foodContainer }: Props) {
  function handlePress() {
    onPress(foodContainer);
  }

  return (
    <Pressable onPress={handlePress}>
      <ReanimatedSwipeable
        containerStyle={styles.wrapper}
        childrenContainerStyle={styles.foodContainer}
        friction={2}
        renderRightActions={(progressAnimatedValue, dragAnimatedValue, swipeable) => {
          return RightAction({
            progressAnimatedValue,
            dragAnimatedValue,
            swipeable,
            foodContainer
          });
        }}
        overshootRight={false}
      >
        <View style={styles.infos}>
          <Text style={styles.name}>{foodContainer.name}</Text>
          <Text style={styles.weight}>{formatWeight(foodContainer.weightInGrams)}</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image source={{ uri: foodContainer.base64Picture, width: 80, height: 80 }} />
        </View>
      </ReanimatedSwipeable>
    </Pressable>
  );
}