import { Alert, View } from "react-native";
import { CustomButton } from "../../shared/customButton/customButton";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { FoodContainerType } from "@/src/types";
import { clientStore } from "@/src/services/clientStore/clientStore";

async function shareFoodContainers(foodContainers: FoodContainerType[]) {
  const foodContainersToJsonString = JSON.stringify(foodContainers, null, 2);
  const foodContainersUri = FileSystem.documentDirectory + "foodContainers.json";

  try {
    await FileSystem.writeAsStringAsync(
      foodContainersUri,
      foodContainersToJsonString,
      { encoding: FileSystem.EncodingType.UTF8 }
    );

    await Sharing.shareAsync(
      foodContainersUri,
      {
        dialogTitle: "Partager mes récipients"
      });
  } catch (error) {
    Alert.alert("Une erreur est survenue");
  }
}

export function ShareContainers() {
  const foodContainers = clientStore((state) => state.foodContainers);

  return (
    <View>
      <CustomButton
        theme="rectangle"
        title="Partager mes récipients"
        onPress={() => shareFoodContainers(foodContainers)}
      />
    </View>
  );
}