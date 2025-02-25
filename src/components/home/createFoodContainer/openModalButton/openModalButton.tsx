import { Text, Pressable, View } from "react-native";
import { styles } from "./openModalButton.styles";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface Props {
  onPress: () => void;
}

export function OpenModalButton({ onPress }: Props) {
  return (
    <View style={styles.background}>
      <Pressable style={styles.button} onPress={onPress}>
        <MaterialIcons style={styles.icon} name="format-list-bulleted-add" />
      </Pressable>
    </View>
  );
}