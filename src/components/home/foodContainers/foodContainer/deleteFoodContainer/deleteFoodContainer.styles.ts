import { STYLES } from "@/src/constants/styles";
import { StyleSheet } from "react-native";

export const DELETE_BUTTON_WIDTH = 120;

export const styles = StyleSheet.create({
  deleteButton: {
    width: DELETE_BUTTON_WIDTH,
    flexGrow: 1,
    backgroundColor: STYLES.COLORS.DELETE_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    color: STYLES.COLORS.TEXT_WHITE,
    transform: [{ translateX: DELETE_BUTTON_WIDTH }]
  },
  deleteIcon: {
    transform: [{ scale: 0.5 },],
    borderRadius: 50,
    padding: 10,
    color: STYLES.COLORS.DELETE,
    fontSize: 60,
  },
});