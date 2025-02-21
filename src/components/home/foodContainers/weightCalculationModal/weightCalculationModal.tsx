import { FoodContainerType } from "@/src/types";
import { Alert, Modal, View, Text, Image, Button, TextInput } from "react-native";
import { styles } from "./weightCalculationModal.styles";
import { formatWeight } from "@/src/utils";
import { useState } from "react";
import { RectangleButton } from "@/src/components/shared/rectangleButton/rectangleButton";

type Props = {
  onCloseButtonPress: () => void;
} & (FoodContainerType | null);

export function WeightCalculationModal({ onCloseButtonPress, ...foodContainer }: Props) {
  if (!foodContainer) return null;
  const { base64Picture, name, weightInGrams } = foodContainer;

  const [inputValue, setInputValue] = useState("");
  function handleInput(text: string) {
    setInputValue(text.replace(/[^0-9.]/, ""));
  }

  function calculateWeight(inputValue: string) {
    const weightFromInput = Number(inputValue);
    const calculatedWeight = weightFromInput - weightInGrams;
    return calculatedWeight > 0
      ? formatWeight(Number(calculatedWeight))
      : "";
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={onCloseButtonPress}>
      <View style={styles.foodContainer}>
        <Image source={{ uri: base64Picture, width: 100, height: 100 }} />
        <View style={styles.infos}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.weightInputLabelContainer}>
          <Text style={styles.weightInputLabel}>Poids total (&gt; {weightInGrams} g)</Text>
          <TextInput
            style={styles.weightInput}
            autoFocus
            onChangeText={handleInput}
            keyboardType={"numeric"}
            value={inputValue}
            maxLength={5}
          />
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Poids sans récipient</Text>
          <Text style={styles.result}>{calculateWeight(inputValue)}</Text>
        </View>
        <RectangleButton
          style={styles.closeButton}
          onPress={onCloseButtonPress}
          title={"Fermer"}
        />
      </View>
    </Modal>
  );
}