import { View } from "react-native";
import { CustomButton } from "../../shared/customButton/customButton";
import { useExportFoodContainers } from "./useExportFoodContainers";

export function ExportFoodContainers() {
  const { exportFoodContainers } = useExportFoodContainers();

  return (
    <View>
      <CustomButton
        theme="rectangle"
        title="Exporter mes récipients"
        onPress={exportFoodContainers}
      />
    </View>
  );
}
