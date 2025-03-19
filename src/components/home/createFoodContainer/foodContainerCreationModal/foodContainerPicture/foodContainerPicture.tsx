import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { Image, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./foodContainerPicture.styles";

interface Props {
  base64Picture: string;
  setPicture: (base64Picture: string) => void;
}

export function FoodContainerPicture({ setPicture, base64Picture }: Props) {
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

  return (
    <View style={styles.addImageContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: base64Picture }}
          style={styles.image}
        />
      </View>
      <View style={styles.pictureButtonsContainer}>
        <CustomButton
          style={{ backgroundColor: "#00853E" }}
          iconName="picture"
          theme="circle"
          onPress={selectImageFromGallery}
        />
      </View>
    </View>
  );
}