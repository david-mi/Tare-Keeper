import type { ExpoConfig, ConfigContext } from "expo/config";
const IS_DEV = process.env.APP_VARIANT === "development";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: IS_DEV ? "Tare Keeper -D" : "Tare Keeper",
  slug: "tare-keeper",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  ios: {
    "supportsTablet": true
  },
  android: {
    adaptiveIcon: {
      "foregroundImage": IS_DEV ? "./assets/images/icon_dev.png" : "./assets/images/icon.png",
      "backgroundColor": "#ffffff"
    },
    package: IS_DEV ? "com.tarekeeper.dev" : "com.tarekeeper",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      }
    ]
  ],
  experiments: {
    "typedRoutes": true
  },
  extra: {
    router: {
      origin: false
    },
    eas: {
      "projectId": "62cb30c7-6605-4968-bffc-dca7e58e24b2"
    }
  }
});