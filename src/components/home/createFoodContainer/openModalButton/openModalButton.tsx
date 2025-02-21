import { Text, Pressable, View } from "react-native";
import { styles } from "./openModalButton.styles";

interface Props {
  onPress: () => void;
}

export function OpenModalButton({ onPress }: Props) {
  return (
    <View style={styles.background}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.title}>Ajouter un récipient</Text>
      </Pressable>
    </View>
  );
}