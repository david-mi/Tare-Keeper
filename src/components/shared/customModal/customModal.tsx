import { ComponentProps, MutableRefObject, PropsWithChildren, ReactNode } from "react";
import { Modal, NativeSyntheticEvent, TextInput } from "react-native";

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
      {children}
    </Modal>
  );
}