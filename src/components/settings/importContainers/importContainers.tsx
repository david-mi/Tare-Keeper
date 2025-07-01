import { View, Alert } from "react-native";
import { CustomButton } from "../../shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { FoodContainerType } from "@/src/types";
import { useRouter } from "expo-router";

async function importFoodContainersFromFile(setFoodsContainers: (foodContainers: FoodContainerType[]) => void, changePage: () => void) {
  try {
    const foodContainersFileInfos = await DocumentPicker.getDocumentAsync({
      copyToCacheDirectory: true,
      type: "application/json"
    });

    if (foodContainersFileInfos.assets === null) return;

    const foodsContainersFileUri = foodContainersFileInfos.assets[0].uri;
    const importedFoodContainersToString = await FileSystem.readAsStringAsync(foodsContainersFileUri);
    const importedFoodContainers = JSON.parse(importedFoodContainersToString);

    setFoodsContainers(importedFoodContainers);

    Alert.alert(
      "Import terminé",
      "Les récipients ont été importés",
      [{
        text: "Retour Accueil",
        onPress: changePage
      }]
    );
  }
  catch (error) {
    console.error(error);
  }
}

export function ImportContainers() {
  const setFoodContainers = clientStore(state => state.setFoodContainers);
  const router = useRouter();

  return (
    <View>
      <CustomButton
        theme="rectangle"
        title="Importer les récipients"
        onPress={() => importFoodContainersFromFile(setFoodContainers, () => router.navigate("/"))}
      />
    </View>
  );
}