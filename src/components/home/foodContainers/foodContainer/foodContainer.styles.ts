import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  foodContainer: {
    backgroundColor: "#00853E",
    borderRadius: 15,
    flexDirection: "row",
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infos: {
    flex: 1,
    color: "red"
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    color: "white"
  },
  weight: {
    fontStyle: "italic",
    color: "white"
  },
  pictureContainer: {
    borderRadius: 15,
    overflow: "hidden"
  }
});