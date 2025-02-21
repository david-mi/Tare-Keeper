import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./foodContainerCreationModal.styles";
import { useState } from "react";
import { FoodContainerType } from "@/src/types";
import { base64ImageMock } from "@/src/__mock__/foodContainers";

interface Props {
  onCloseButtonPress: () => void;
}

export function FoodContainerCreationModal({ onCloseButtonPress }: Props) {
  const [foodContainer, setFoodContainer] = useState<FoodContainerType>({
    base64Picture: base64ImageMock,
    id: Math.random().toString(),
    name: "",
    weightInGrams: 0
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
      weightInGrams: Number(weight)
    }));
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
        <Pressable onPress={onCloseButtonPress}>
          <Text>Fermer</Text>
        </Pressable>
      </View>
    </Modal>
  );
}