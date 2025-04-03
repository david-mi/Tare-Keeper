import { STYLES } from "@/src/constants/styles";
import { StyleSheet } from "react-native";

export const EDIT_BUTTON_WIDTH = 120;

export const styles = StyleSheet.create({
  editButton: {
    width: EDIT_BUTTON_WIDTH,
    flexGrow: 1,
    backgroundColor: STYLES.COLORS.EDIT_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    color: STYLES.COLORS.TEXT_WHITE,
    transform: [{ translateX: -EDIT_BUTTON_WIDTH }]
  },
  editIcon: {
    transform: [{ scale: 0.5 },],
    borderRadius: 50,
    padding: 10,
    color: STYLES.COLORS.EDIT,
    fontSize: 60,
  },
});