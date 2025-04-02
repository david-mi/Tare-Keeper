import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  labelInputContainer: {
    width: "100%",
    gap: 5
  },
  input: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "rgba(160, 160, 160, 0.43)",
    height: 50,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "rgb(244, 242, 242)",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
  },
  labelDescription: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 2
  },
});