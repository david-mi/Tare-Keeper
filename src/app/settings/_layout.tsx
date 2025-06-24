import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Paramètres" }} />
      <Stack.Screen name="exportContainers" options={{ title: "Exporter les récipients" }} />
    </Stack>
  );
}
