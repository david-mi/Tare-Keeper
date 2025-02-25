import { ComponentProps, MutableRefObject } from "react";
import { Modal, NativeSyntheticEvent, TextInput, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./customModal.styles";

type Props = ComponentProps<typeof Modal> & {
  inputToFocusRef?: MutableRefObject<TextInput>;
  closeModalCallback: () => void;
};

export function CustomModal({ children, inputToFocusRef, closeModalCallback, ...modalProps }: Props) {

  function onShow(event: NativeSyntheticEvent<any>) {
    if (inputToFocusRef?.current) {
      inputToFocusRef.current.focus();
    }

    modalProps.onShow?.(event);
  }

  function onRequestClose(event: NativeSyntheticEvent<any>) {
    closeModalCallback();

    modalProps.onRequestClose?.(event);
  }

  return (
    <Modal
      animationType="slide"
      {...modalProps}
      onShow={onShow}
      onRequestClose={onRequestClose}
    >
      <Pressable style={styles.closeButton} onPress={closeModalCallback}>
        <AntDesign name="closesquare" size={50} color="black" />
      </Pressable>
      {children}
    </Modal>
  );
}