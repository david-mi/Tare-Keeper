import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rectangleButton: {
    backgroundColor: "rgb(138, 35, 35)",
    paddingHorizontal: 20,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  roundButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: 600
  },
  disabled: {
    opacity: 0.5,
  },
});