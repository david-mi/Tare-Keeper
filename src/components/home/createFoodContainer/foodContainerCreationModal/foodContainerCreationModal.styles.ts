import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding: 20,
    flexGrow: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20
  },
  labelInputContainer: {
    width: "100%",
    gap: 5
  },
  input: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: "rgba(160, 160, 160, 0.43)",
    height: 70,
    paddingHorizontal: 10,
    fontSize: 25,
    fontWeight: 600,
    backgroundColor: "rgb(244, 242, 242)",
  },
  label: {
    fontSize: 17,
    fontWeight: "600"
  },
  addFoodContainerButton: {
    marginTop: "auto",
    backgroundColor: "rgb(0, 0, 0)",
  },
  closeModalButton: {
  }
});