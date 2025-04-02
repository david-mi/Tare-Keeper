import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  addImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    alignSelf: "center",
    gap: 10
  },
  placeHolder: {
    width: 35
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 20,
    overflow: "hidden",
    padding: 5
  },
  image: {
    width: "100%",
    height: "100%"
  },
  pictureButtonsContainer: {
    marginTop: 5,
    justifyContent: "center",
    gap: 10,
  },
});