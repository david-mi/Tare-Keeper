import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useState } from "react";
import { FoodContainerType } from "@/src/types";
import { base64ImageMock } from "@/src/__mock__/foodContainers";
import { RectangleButton } from "@/src/components/shared/rectangleButton/rectangleButton";

interface Props {
  onCloseButtonPress: () => void;
}

type FoodContainerFormType = Omit<FoodContainerType, "weightInGrams"> & {
  weightInGrams: string;
};

export function FoodContainerCreationModal({ onCloseButtonPress }: Props) {
  const [foodContainer, setFoodContainer] = useState<FoodContainerFormType>({
    base64Picture: base64ImageMock,
    id: Math.random().toString(),
    name: "",
    weightInGrams: ""
  });

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

  function addFoodContainer() {
    console.log("Added");
  }

  return (
    <Modal
      animationType="slide"
      onRequestClose={onCloseButtonPress}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Ajouter un récipient</Text>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            style={styles.input}
            autoFocus
            onChangeText={setFoodContainerName}
            value={foodContainer.name}
            maxLength={20}
          />
        </View>
        <View style={styles.labelInputContainer}>
          <Text style={styles.label}>Poids</Text>
          <TextInput
            style={styles.input}
            autoFocus
            onChangeText={setFoodContainerWeight}
            keyboardType={"numeric"}
            value={String(foodContainer.weightInGrams)}
            maxLength={5}
          />
        </View>
        <RectangleButton
          title={"Ajouter"}
          onPress={addFoodContainer}
          style={styles.addFoodContainerButton}
        />
        <RectangleButton
          title={"Fermer"}
          onPress={onCloseButtonPress}
          style={styles.closeModalButton}
        />
      </View>
    </Modal>
  );
}