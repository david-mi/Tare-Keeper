import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 10,
    backgroundColor: "rgb(138, 35, 35)",
    paddingHorizontal: 20,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center"
  },
  background: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.81)",
    height: 45,
    width: "100%"
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: 600
  }
});