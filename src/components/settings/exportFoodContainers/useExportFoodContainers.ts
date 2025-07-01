import { Alert } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";
import { useCallback } from "react";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { useRouter } from "expo-router";

export function useExportFoodContainers() {
  const foodContainers = clientStore((state) => state.foodContainers);
  const router = useRouter();

  const exportFoodContainers = useCallback(async () => {
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
          dialogTitle: "Exporter mes récipients"
        });

    } catch (error) {
      Alert.alert("Une erreur est survenue");
    }
  }, [foodContainers]);

  return {
    exportFoodContainers
  };
}
