import { Alert, View } from "react-native";
import * as FileSystem from "expo-file-system";
import { FoodContainerType } from "@/src/types";
import { CustomButton } from "../../shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";

async function exportFoodContainersAsJson(data: FoodContainerType[], filename = "foodContainers.json") {
  const jsonString = JSON.stringify(data, null, 2);
  const fileUri = FileSystem.documentDirectory + filename;

  try {
    await FileSystem.writeAsStringAsync(
      fileUri,
      jsonString,
      { encoding: FileSystem.EncodingType.UTF8 }
    );

    Alert.alert("Succès", "Récipients exportés avec succès");
  }
  catch (error) {
    console.error(error);
    Alert.alert("Erreur", "Impossible d'exporter les récipients.");
  }
}

export function ExportContainers() {
  const foodContainers = clientStore(state => state.foodContainers);

  return (
    <View>
      <CustomButton
        theme="rectangle"
        title="Exporter mes récipients"
        onPress={() => exportFoodContainersAsJson(foodContainers)}
      />
    </View>
  );
}