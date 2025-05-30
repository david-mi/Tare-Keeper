import { STYLES } from "@/src/constants/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  foodContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: STYLES.COLORS.BACKGROUND,
    borderRadius: 15,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20
  },
  pictureContainer: {
    borderRadius: 15,
    overflow: "hidden"
  },
  picture: {
    width: STYLES.SIZES.CONTAINER_PICTURE_MEDIUM,
    height: STYLES.SIZES.CONTAINER_PICTURE_MEDIUM,
  },
  resultContainer: {
    width: "100%",
    gap: 5,
    backgroundColor: STYLES.COLORS.PRIMARY,
    borderRadius: 20,
    minHeight: 100,
    padding: 20
  },
  resultTitle: {
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    color: STYLES.COLORS.TEXT_WHITE,
  },
  result: {
    paddingHorizontal: 10,
    fontSize: 50,
    fontWeight: 800,
    color: STYLES.COLORS.TEXT_WHITE,
    textAlign: "center",
  },
});