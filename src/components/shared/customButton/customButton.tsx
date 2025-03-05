import { forwardRef, type ComponentPropsWithRef } from "react";
import { Pressable, Text, type StyleProp, type TextStyle, type ViewStyle } from "react-native";

import { styles } from "./customButton.styles";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

type PressablePropsWithRef = ComponentPropsWithRef<typeof Pressable>;

interface RectangleButtonProps extends PressablePropsWithRef {
  theme: "rectangle";
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}

interface RoundButtonProps extends PressablePropsWithRef {
  theme: "circle";
  iconName: keyof typeof SimpleLineIcons.glyphMap;
}

type CustomButtonProps = RectangleButtonProps | RoundButtonProps;

export const CustomButton = forwardRef(({ style, disabled, ...props }: CustomButtonProps, _) => {
  const styleProps = [style as StyleProp<ViewStyle>, disabled && styles.disabled];

  switch (props.theme) {
    case "rectangle": {
      return (
        <Pressable
          {...props}
          disabled={disabled}
          style={[styles.rectangleButton, styleProps]}
        >
          <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
        </Pressable>
      );
    }
    case "circle": {
      return (
        <Pressable
          {...props}
          disabled={disabled}
          style={[styles.roundButton, styleProps]}
        >
          <SimpleLineIcons name={props.iconName} size={20} color="white" />
        </Pressable>
      );
    }
  }
})

