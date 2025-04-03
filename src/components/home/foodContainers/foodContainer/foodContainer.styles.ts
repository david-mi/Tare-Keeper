import { STYLES } from "@/src/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    shadowColor: STYLES.COLORS.SHADOW,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: STYLES.COLORS.BACKGROUND,
    borderRadius: 15,
  },
  foodContainer: {
    backgroundColor: STYLES.COLORS.BACKGROUND,
    flexDirection: "row",
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  infos: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: STYLES.COLORS.TEXT_BLACK,
  },
  weight: {
    fontStyle: "italic",
    color: STYLES.COLORS.TEXT_BLACK,
  },
  pictureContainer: {
    borderRadius: 15,
    overflow: "hidden"
  }
});