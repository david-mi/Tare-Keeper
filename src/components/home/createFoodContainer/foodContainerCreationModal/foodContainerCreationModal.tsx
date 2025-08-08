import { TextInput } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useRef, useState } from "react";
import { FoodContainerType } from "@/src/types";
import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { randomUUID } from "expo-crypto";
import { CustomTextInputWithLabel } from "@/src/components/shared/customTextInputWithLabel/customTextInputWithLabel";
import { FoodContainerPicture } from "./foodContainerPicture/foodContainerPicture";
import { defaultBase64Picture } from "./foodContainerPicture/defaultBase64Picture";
import { FoodContainerModalWrapper } from "../../shared/foodContainerModalWrapper/foodContainerModalWrapper";

interface Props {
  closeModal: () => void;
}

type FoodContainerFormType = Omit<FoodContainerType, "weightInGrams"> & {
  weightInGrams: string;
};

export function FoodContainerCreationModal({ closeModal }: Props) {
  const addFoodContainer = clientStore((state) => state.addFoodContainer);
  const [foodContainer, setFoodContainer] = useState<FoodContainerFormType>({
    base64Picture: defaultBase64Picture,
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
      weightInGrams: weight.replace(/[^0-9]/, "")
    }));
  }

  function setFoodContainerPicture(base64: string) {
    setFoodContainer((foodContainer) => ({
      ...foodContainer,
      base64Picture: "data:image/jpeg;base64," + base64
    }));
  }

  function validateInputs() {
    return (
      foodContainer.name.length > 0 &&
      foodContainer.weightInGrams.length > 0
    );
  }

  function submitFoodContainer() {
    addFoodContainer({
      ...foodContainer,
      weightInGrams: parseInt(foodContainer.weightInGrams)
    });

    closeModal();
  }

  return (
    <FoodContainerModalWrapper
      closeModal={closeModal}
      inputToFocusRef={nameInputElementRef}
      title="Ajout d'un récipient"
    >
      <FoodContainerPicture
        base64Picture={foodContainer.base64Picture}
        setPicture={setFoodContainerPicture}
      />
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
        onPress={submitFoodContainer}
        style={styles.addFoodContainerButton}
      />
    </FoodContainerModalWrapper>
  );
}
