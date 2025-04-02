import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  rectangleButton: {
    backgroundColor: "rgb(138, 35, 35)",
    paddingHorizontal: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  roundButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: "black",
  },
  roundButtonIcon: {
    fontSize: 15
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 600
  },
  disabled: {
    opacity: 0.5,
  },
});