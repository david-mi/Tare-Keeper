import { Text, TextInput, View } from "react-native";
import { styles } from "./customTextInputWithLabel.styles";
import { ComponentProps, forwardRef } from "react";

type Props = ComponentProps<typeof TextInput> & {
  label: string;
  labelDescription?: string;
};

export const CustomTextInputWithLabel = forwardRef<TextInput, Props>(({ label, labelDescription, ...inputProps }, inputElementRef) => {
  return (
    <View style={styles.labelInputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.labelDescription}>({labelDescription})</Text>
      </View>
      <TextInput
        {...inputProps}
        style={[styles.input, inputProps.style]}
        ref={inputElementRef}
      />
    </View>
  );
});