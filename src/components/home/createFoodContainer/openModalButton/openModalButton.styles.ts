import { StyleSheet } from "react-native";

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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    color: "white",
    fontSize: BUTTON_ICON_FONT_SIZE,
  }
});