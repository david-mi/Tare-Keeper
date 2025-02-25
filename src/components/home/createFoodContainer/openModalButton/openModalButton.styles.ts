import { Button, StyleSheet } from "react-native";

const BUTTON_ICON_FONT_SIZE = 40;
const BUTTON_SIZE = 70;

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.81)",
    height: BUTTON_SIZE,
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: BUTTON_SIZE / 3,
    backgroundColor: "#00853E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
  },
  icon: {
    color: "white",
    fontSize: BUTTON_ICON_FONT_SIZE,
  }
});