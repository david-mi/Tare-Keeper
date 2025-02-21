import { Text, Pressable, View, StyleProp, ViewStyle } from "react-native";
import { styles } from "./rectangleButton.styles";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Pressable> & {
  title: string;
};

export function RectangleButton({ onPress, title, style }: Props) {
  return (
    <Pressable style={[styles.button, style as StyleProp<ViewStyle>]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}