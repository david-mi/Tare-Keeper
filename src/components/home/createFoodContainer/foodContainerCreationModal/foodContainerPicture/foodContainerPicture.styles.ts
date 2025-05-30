import { STYLES } from "@/src/constants/styles";
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
    height: STYLES.SIZES.CONTAINER_PICTURE_MEDIUM,
    width: STYLES.SIZES.CONTAINER_PICTURE_MEDIUM,
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
  selectImageFromGalleryButton: {
    backgroundColor: STYLES.COLORS.PRIMARY,
  },
  openCameraButton: {
    backgroundColor: STYLES.COLORS.SECONDARY,
  },
});