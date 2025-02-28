import { Stack } from "expo-router";
import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  useMMKVDevTools();
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ title: "Récipients" }} />
    </GestureHandlerRootView>
  );
}
