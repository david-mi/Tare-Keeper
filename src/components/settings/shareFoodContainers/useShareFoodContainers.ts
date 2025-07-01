import { Alert } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useCallback } from "react";
import { clientStore } from "@/src/services/clientStore/clientStore";

export function useShareFoodContainers() {
  const foodContainers = clientStore((state) => state.foodContainers);

  const shareFoodContainers = useCallback(async () => {
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

  }, [foodContainers]);

  return {
    share: shareFoodContainers
  };
}
