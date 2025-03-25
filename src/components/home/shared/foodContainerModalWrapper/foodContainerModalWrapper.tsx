import { ScrollView, TextInput } from "react-native";
import { styles } from "./foodContainerModalWrapper.styles";
import { MutableRefObject, ReactElement, useRef, useState } from "react";
import { CustomModal } from "@/src/components/shared/customModal/customModal";

interface Props {
  children: ReactElement[];
  closeModal: () => void;
  inputToFocusRef?: MutableRefObject<TextInput>;
  title: string;
}

export function FoodContainerModalWrapper({ children, closeModal, inputToFocusRef, title }: Props) {
  return (
    <CustomModal
      closeModalCallback={closeModal}
      inputToFocusRef={inputToFocusRef}
      title={title}
    >
      <ScrollView
        style={{ flex: 1 }} contentContainerStyle={styles.wrapper}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
      >
        {children}
      </ScrollView>
    </CustomModal>
  );
}