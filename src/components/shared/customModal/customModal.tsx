import { ComponentProps, MutableRefObject } from "react";
import { Modal, NativeSyntheticEvent, TextInput, Pressable, Text, View, ScrollView } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from "./customModal.styles";

type Props = ComponentProps<typeof Modal> & {
  inputToFocusRef?: MutableRefObject<TextInput>;
  closeModalCallback: () => void;
  title?: string;
};

export function CustomModal({ children, inputToFocusRef, closeModalCallback, title = "", ...modalProps }: Props) {

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
    <ScrollView
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="always"
    >
      <Modal
        animationType="slide"
        {...modalProps}
        onShow={onShow}
        onRequestClose={onRequestClose}
      >
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Pressable style={styles.closeButton} onPress={closeModalCallback}>
              <AntDesign style={styles.closeButtonIcon} name="closesquare" />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </ScrollView>
  );
}