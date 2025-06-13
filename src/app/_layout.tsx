import { Link, Stack } from "expo-router";
import { useMMKVDevTools } from '@dev-plugins/react-native-mmkv';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CustomButton } from "../components/shared/customButton/customButton";

export default function RootLayout() {
  useMMKVDevTools();
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Récipients",
            headerRight: () => (
              <Link href="/settings" asChild>
                <CustomButton iconName="settings" theme="circle" />
              </Link>
            )
          }} />
        <Stack.Screen
          name="settings"
          options={{ headerShown: false }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
