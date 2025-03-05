import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    flexGrow: 1
  },
  addImageContainer: {
    alignSelf: "center"
  },
  imageContainer: {
    height: 150,
    width: 150,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  pictureButtonsContainer: {
    marginTop: 5,
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20
  },
  addFoodContainerButton: {
    marginTop: "auto",
    backgroundColor: "#00853E",
  },
  closeModalButton: {
  }
});