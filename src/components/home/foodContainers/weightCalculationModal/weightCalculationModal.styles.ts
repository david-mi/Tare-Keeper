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
  weightInputLabelContainer: {
    width: "100%",
    gap: 5
  },
  weightInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "rgba(160, 160, 160, 0.43)",
    height: 70,
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: 600,
    backgroundColor: "rgb(244, 242, 242)",
  },
  weightInputLabel: {
    fontSize: 17,
    fontWeight: "600"
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
  }
});