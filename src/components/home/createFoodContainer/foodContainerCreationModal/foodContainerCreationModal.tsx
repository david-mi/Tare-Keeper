import { Text, TextInput, View } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useRef, useState } from "react";
import { FoodContainerType } from "@/src/types";
import { base64ImageMock } from "@/src/__mock__/foodContainers";
import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { CustomModal } from "@/src/components/shared/customModal/customModal";
import { randomUUID } from "expo-crypto";
import { CustomTextInputWithLabel } from "@/src/components/shared/customTextInputWithLabel/customTextInputWithLabel";

interface Props {
  closeModal: () => void;
}

type FoodContainerFormType = Omit<FoodContainerType, "weightInGrams"> & {
  weightInGrams: string;
};

export function FoodContainerCreationModal({ closeModal }: Props) {
  const addFoodContainer = clientStore((state) => state.addFoodContainer);
  const [foodContainer, setFoodContainer] = useState<FoodContainerFormType>({
    base64Picture: base64ImageMock,
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

  return (
    <CustomModal
      closeModalCallback={closeModal}
      inputToFocusRef={nameInputElementRef}
      title="Ajout d'un récipient"
    >
      <View style={styles.container}>
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
      </View>
    </CustomModal>
  );
}