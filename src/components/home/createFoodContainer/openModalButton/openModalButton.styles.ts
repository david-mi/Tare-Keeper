import { STYLES } from "@/src/constants/styles";
import { StyleSheet } from "react-native";

const BUTTON_ICON_FONT_SIZE = 30;
const BUTTON_SIZE = 60;

export const styles = StyleSheet.create({
  background: {
    position: "absolute",
    bottom: 0,
    backgroundColor: STYLES.COLORS.BACKGROUND_OPACITY,
    height: BUTTON_SIZE,
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: BUTTON_SIZE / 3,
    backgroundColor: STYLES.COLORS.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    shadowColor: STYLES.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    color: STYLES.COLORS.ICON,
    fontSize: BUTTON_ICON_FONT_SIZE,
  }
});