import { View } from "react-native";
import { CustomButton } from "../../shared/customButton/customButton";
import { useShareFoodContainers } from "./useShareFoodContainers";

export function ShareFoodContainers() {
  const { share } = useShareFoodContainers();

  return (
    <View>
      <CustomButton
        theme="rectangle"
        title="Partager mes récipients"
        onPress={share}
      />
    </View>
  );
}