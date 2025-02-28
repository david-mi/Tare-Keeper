import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 15,
  },
  foodContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  infos: {
    flex: 1,
    color: "red"
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: "black"
  },
  weight: {
    fontStyle: "italic",
    color: "black"
  },
  pictureContainer: {
    borderRadius: 15,
    overflow: "hidden"
  }
});