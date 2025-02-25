import { FoodContainerType } from "@/src/types";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./weightCalculationModal.styles";
import { formatWeight } from "@/src/utils";
import { useRef, useState } from "react";
import { CustomModal } from "@/src/components/shared/customModal/customModal";

type Props = {
  closeModal: () => void;
} & (FoodContainerType | null);

export function WeightCalculationModal({ closeModal, ...foodContainer }: Props) {
  if (!foodContainer) return null;
  const { base64Picture, name, weightInGrams } = foodContainer;
  const weightInputElementRef = useRef<TextInput>(null!);

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
    <CustomModal
      closeModalCallback={closeModal}
      inputToFocusRef={weightInputElementRef}
    >
      <View style={styles.foodContainer}>
        <Image source={{ uri: base64Picture, width: 100, height: 100 }} />
        <View style={styles.infos}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.weightInputLabelContainer}>
          <Text style={styles.weightInputLabel}>Poids total (&gt; {weightInGrams} g)</Text>
          <TextInput
            ref={weightInputElementRef}
            style={styles.weightInput}
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
      </View>
    </CustomModal>
  );
}