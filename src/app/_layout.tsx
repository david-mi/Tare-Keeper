import { Link, Stack } from "expo-router";
import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomButton } from "../components/shared/customButton/customButton";

export default function RootLayout() {
  useMMKVDevTools();
  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{
        title: "Récipients",
        headerRight: () => (
          <Link href="/settings" asChild>
            <CustomButton
              iconName="settings"
              theme="circle"
              onPress={() => console.log("Navigate to settings")}
            />
          </Link>
        )
      }} />
    </GestureHandlerRootView>
  );
}
