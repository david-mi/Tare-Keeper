import { StyleSheet } from "react-native";

export const DELETE_BUTTON_WIDTH = 120;

export const styles = StyleSheet.create({
  deleteButton: {
    width: DELETE_BUTTON_WIDTH,
    flexGrow: 1,
    backgroundColor: "rgb(250, 226, 226)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    transform: [{ translateX: DELETE_BUTTON_WIDTH }]
  },
  deleteIcon: {
    transform: [{ scale: 0.5 },],
    // backgroundColor: "red",
    borderRadius: 50,
    padding: 10,
    color: "red",
    fontSize: 60,
  },
});