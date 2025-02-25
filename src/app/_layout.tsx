import { Stack } from "expo-router";
import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv';

export default function RootLayout() {
  useMMKVDevTools();
  return <Stack screenOptions={{ title: "Récipients" }} />;
}
