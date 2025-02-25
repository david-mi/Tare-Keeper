import { StyleSheet } from "react-native";

const CLOSE_BUTTON_SIZE = 40;

export const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: CLOSE_BUTTON_SIZE,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
  },
  closeButton: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  closeButtonIcon: {
    fontSize: CLOSE_BUTTON_SIZE,
    color: "black"
  }
});