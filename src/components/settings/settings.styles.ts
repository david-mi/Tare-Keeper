import { COLORS } from "@/src/constants/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  linkContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  linkText: {
    fontSize: 18
  },
  linkSeparator: {
    marginVertical: 20,
    height: 1,
    backgroundColor: COLORS.SETTINGS.SEPARATOR,
  },
});