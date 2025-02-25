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
    gap: 5
  },
  resultTitle: {
    fontSize: 17,
    fontWeight: "600"
  },
  result: {
    lineHeight: 70,
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: 600,
    backgroundColor: "rgb(114, 255, 161)",
  },
  closeButton: {
    marginTop: "auto",
    alignSelf: "stretch"
  }
});