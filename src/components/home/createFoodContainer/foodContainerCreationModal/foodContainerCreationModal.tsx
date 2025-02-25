import { Text, TextInput, View } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useRef, useState } from "react";
import { FoodContainerType } from "@/src/types";
import { base64ImageMock } from "@/src/__mock__/foodContainers";
import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { CustomModal } from "@/src/components/shared/customModal/customModal";
import { randomUUID } from "expo-crypto";

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

  function handleSubmit() {
    addFoodContainer({
      ...foodContainer,
      weightInGrams: parseInt(foodContainer.weightInGrams)
    });
    closeModal();
  }

  function focusNameInputElement() {
    nameInputElementRef.current.focus();
  }

  return (
    <CustomModal
      closeModalCallback={closeModal}
      inputToFocusRef={nameInputElementRef}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ajouter un récipient</Text>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            ref={nameInputElementRef}
            style={styles.input}
            onChangeText={setFoodContainerName}
            value={foodContainer.name}
            maxLength={20}
          />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>Poids</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFoodContainerWeight}
            keyboardType={"numeric"}
            value={String(foodContainer.weightInGrams)}
            maxLength={5}
          />
        </View>
        <CustomButton
          theme="rectangle"
          title={"Ajouter"}
          onPress={handleSubmit}
          style={styles.addFoodContainerButton}
        />
      </View>
    </CustomModal>
  );
}