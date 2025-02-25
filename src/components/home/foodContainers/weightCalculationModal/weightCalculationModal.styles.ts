import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  foodContainer: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 20
  },
  pictureContainer: {
    borderRadius: 15,
    overflow: "hidden"
  },
  infos: {
    backgroundColor: "black",
    alignSelf: "stretch",
    marginHorizontal: -20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 5
  },
  name: {
    fontSize: 35,
    fontWeight: 600,
    color: "white",
    textAlign: "center",
  },
  weight: {
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  resultContainer: {
    width: "100%",
    gap: 5,
    backgroundColor: "#00853E",
    borderRadius: 20,
    minHeight: 100,
    padding: 20
  },
  resultTitle: {
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    color: "white"
  },
  result: {
    paddingHorizontal: 10,
    fontSize: 50,
    fontWeight: 800,
    color: "white",
    textAlign: "center",
  },
  closeButton: {
    marginTop: "auto",
    alignSelf: "stretch"
  }
});