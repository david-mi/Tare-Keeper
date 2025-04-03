import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./foodContainerPicture.styles";
import { defaultBase64Picture } from "./defaultBase64Picture";

interface Props {
  base64Picture: string;
  setPicture: (base64Picture: string) => void;
}

export function FoodContainerPicture({ setPicture, base64Picture }: Props) {
  const hasDefaultBase64Picture = base64Picture === defaultBase64Picture;

  async function selectImageFromGallery() {
    const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (canceled === false) {
      const { base64 } = assets[0];
      setPicture(base64 as string);
    }
  }

  async function openCamera() {
    const { canceled, assets } = await ImagePicker.launchCameraAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (canceled === false) {
      const { base64 } = assets[0];
      setPicture(base64 as string);
    }
  }

  function setDefaulBase64Picture() {
    setPicture(defaultBase64Picture.replace("data:image/png;base64,", ""));
  }

  return (
    <View style={styles.addImageContainer}>
      <View style={styles.placeHolder} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: base64Picture }}
          style={styles.image}
        />
      </View>
      <View style={styles.pictureButtonsContainer}>
        <CustomButton
          style={styles.selectImageFromGalleryButton}
          iconName="picture"
          theme="circle"
          onPress={selectImageFromGallery}
        />
        <CustomButton
          style={styles.openCameraButton}
          iconName="camera"
          theme="circle"
          onPress={openCamera}
        />
        {hasDefaultBase64Picture === false && (
          <CustomButton
            style={{ backgroundColor: "rgb(184, 33, 33)" }}
            iconName="delete-forever"
            theme="circle"
            onPress={setDefaulBase64Picture}
          />
        )}
      </View>
    </View>
  );
}