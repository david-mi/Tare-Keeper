import { COLORS } from "@/src/constants/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  foodContainers: {
    gap: 10,
    padding: 10,
    paddingBottom: 110,
  },
  empty: {
    marginVertical: "auto",
    textAlign: "center",
    fontSize: 17,
    color: COLORS.TEXT_EMPTY,
    alignSelf: "stretch",
    paddingBottom: 60,
  }
});