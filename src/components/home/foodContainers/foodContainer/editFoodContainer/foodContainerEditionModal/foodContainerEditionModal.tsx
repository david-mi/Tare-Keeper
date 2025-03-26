import { TextInput } from "react-native";
import { styles } from "./foodContainerEditionModal.styles";
import { useRef, useState } from "react";
import { FoodContainerType } from "@/src/types";
import { CustomButton } from "@/src/components/shared/customButton/customButton";
import { clientStore } from "@/src/services/clientStore/clientStore";
import { CustomTextInputWithLabel } from "@/src/components/shared/customTextInputWithLabel/customTextInputWithLabel";
import { FoodContainerPicture } from "@/src/components/home/createFoodContainer/foodContainerCreationModal/foodContainerPicture/foodContainerPicture";
import { FoodContainerModalWrapper } from "@/src/components/home/shared/foodContainerModalWrapper/foodContainerModalWrapper";

interface Props {
  closeModal: () => void;
  foodContainer: FoodContainerType;
}

type FoodContainerFormType = Omit<FoodContainerType, "weightInGrams"> & {
  weightInGrams: string;
};

export function FoodContainerEditionModal({ foodContainer: foodContainerToEdit, closeModal }: Props) {
  const editFoodContainer = clientStore((state) => state.editFoodContainer);
  const [editedFoodContainer, setEditedFoodContainer] = useState<FoodContainerFormType>({
    ...foodContainerToEdit,
    weightInGrams: String(foodContainerToEdit.weightInGrams)
  });
  const nameInputElementRef = useRef<TextInput>(null!);

  function setFoodContainerName(name: string) {
    setEditedFoodContainer((foodContainer) => ({
      ...foodContainer,
      name
    }));
  }

  function setEditedFoodContainerWeight(weight: string) {
    setEditedFoodContainer((foodContainer) => ({
      ...foodContainer,
      weightInGrams: weight.replace(/[^0-9.]/, "")
    }));
  }

  function setFoodContainerPicture(base64: string) {
    setEditedFoodContainer((foodContainer) => ({
      ...foodContainer,
      base64Picture: "data:image/jpeg;base64," + base64
    }));
  }

  function validateInputs() {
    return (
      editedFoodContainer.name.length > 0 &&
      editedFoodContainer.weightInGrams.length > 0
    );
  }

  function onEditFoodContainerSubmit() {
    editFoodContainer({
      ...editedFoodContainer,
      weightInGrams: parseInt(editedFoodContainer.weightInGrams)
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
        base64Picture={editedFoodContainer.base64Picture}
        setPicture={setFoodContainerPicture}
      />
      <CustomTextInputWithLabel
        label="Nom"
        labelDescription="20 caractères max."
        ref={nameInputElementRef}
        onChangeText={setFoodContainerName}
        value={editedFoodContainer.name}
        maxLength={20}
      />
      <CustomTextInputWithLabel
        label="Poids"
        labelDescription="g"
        onChangeText={setEditedFoodContainerWeight}
        keyboardType={"numeric"}
        value={String(editedFoodContainer.weightInGrams)}
        maxLength={5}
      />
      <CustomButton
        disabled={validateInputs() === false}
        theme="rectangle"
        title={"Valider"}
        onPress={onEditFoodContainerSubmit}
        style={styles.editFoodContainerButton}
      />
    </FoodContainerModalWrapper>
  );
}