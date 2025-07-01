import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Paramètres" }} />
      <Stack.Screen name="importContainers" options={{ title: "Importer les récipients" }} />
      <Stack.Screen name="exportFoodContainers" options={{ title: "Exporter les récipients" }} />
    </Stack>
  );
}
