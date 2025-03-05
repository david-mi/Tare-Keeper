import { Image, ScrollView, TextInput, View } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useRef, useState } from "react";
import { FoodContainerType } from "@/src/types";
import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { CustomModal } from "@/src/components/shared/customModal/customModal";
import { randomUUID } from "expo-crypto";
import { CustomTextInputWithLabel } from "@/src/components/shared/customTextInputWithLabel/customTextInputWithLabel";
import * as ImagePicker from "expo-image-picker";

interface Props {
  closeModal: () => void;
}

type FoodContainerFormType = Omit<FoodContainerType, "weightInGrams"> & {
  weightInGrams: string;
};

export function FoodContainerCreationModal({ closeModal }: Props) {
  const addFoodContainer = clientStore((state) => state.addFoodContainer);
  const [foodContainer, setFoodContainer] = useState<FoodContainerFormType>({
    base64Picture: "",
    id: randomUUID(),
    name: "",
    weightInGrams: ""
  });
  const nameInputElementRef = useRef<TextInput>(null!);

  function setFoodContainerName(name: string) {
    setFoodContainer((foodContainer) => ({
      ...foodContainer,
      name
    }));
  }

  function setFoodContainerWeight(weight: string) {
    setFoodContainer((foodContainer) => ({
      ...foodContainer,
      weightInGrams: weight.replace(/[^0-9.]/, "")
    }));
  }

  function validateInputs() {
    return (
      foodContainer.name.length > 0 &&
      foodContainer.weightInGrams.length > 0
    );
  }

  function handleSubmit() {
    addFoodContainer({
      ...foodContainer,
      weightInGrams: parseInt(foodContainer.weightInGrams)
    });

    closeModal();
  }

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
      setFoodContainer((foodContainer) => ({
        ...foodContainer,
        base64Picture: "data:image/jpeg;base64," + base64
      }));
    }
  }

  return (
    <CustomModal
      closeModalCallback={closeModal}
      inputToFocusRef={nameInputElementRef}
      title="Ajout d'un récipient"
    >
      <ScrollView
        style={{ flex: 1 }} contentContainerStyle={styles.container}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.addImageContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={foodContainer.base64Picture.length === 0
                ? require("./default_picture.png")
                : { uri: foodContainer.base64Picture }
              }
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
        <CustomTextInputWithLabel
          label="Nom"
          labelDescription="20 caractères max."
          ref={nameInputElementRef}
          onChangeText={setFoodContainerName}
          value={foodContainer.name}
          maxLength={20}
        />
        <CustomTextInputWithLabel
          label="Poids"
          labelDescription="g"
          onChangeText={setFoodContainerWeight}
          keyboardType={"numeric"}
          value={String(foodContainer.weightInGrams)}
          maxLength={5}
        />
        <CustomButton
          disabled={validateInputs() === false}
          theme="rectangle"
          title={"Valider"}
          onPress={handleSubmit}
          style={styles.addFoodContainerButton}
        />
      </ScrollView>
    </CustomModal>
  );
}