import { StyleSheet } from "react-native";

export const EDIT_BUTTON_WIDTH = 120;

export const styles = StyleSheet.create({
  editButton: {
    width: EDIT_BUTTON_WIDTH,
    flexGrow: 1,
    backgroundColor: "rgb(250, 240, 226)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    transform: [{ translateX: -EDIT_BUTTON_WIDTH }]
  },
  editIcon: {
    transform: [{ scale: 0.5 },],
    borderRadius: 50,
    padding: 10,
    color: "orange",
    fontSize: 60,
  },
});