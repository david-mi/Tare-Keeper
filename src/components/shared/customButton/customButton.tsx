import { forwardRef, type ComponentPropsWithRef } from "react";
import { Pressable, Text, type StyleProp, type TextStyle, type ViewStyle } from "react-native";

import { styles } from "./customButton.styles";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type PressablePropsWithRef = ComponentPropsWithRef<typeof Pressable>;

interface RectangleButtonProps extends PressablePropsWithRef {
  theme: "rectangle";
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}

interface RoundButtonProps extends PressablePropsWithRef {
  theme: "circle";
  iconName: keyof typeof SimpleLineIcons.glyphMap | keyof typeof MaterialIcons.glyphMap;
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
          {props.iconName in SimpleLineIcons.glyphMap
            ? <SimpleLineIcons name={props.iconName as keyof typeof SimpleLineIcons.glyphMap} size={20} color="white" />
            : <MaterialIcons name={props.iconName as keyof typeof MaterialIcons.glyphMap} size={20} color="white" />
          }
        </Pressable>
      );
    }
  }
})

