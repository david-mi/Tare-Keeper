import { View, FlatList, Text, Pressable } from "react-native";
import { styles } from "./settings.styles";
import { Link, type ExpoRouter } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface RouteLink {
  key: string;
  title: string;
  route: ExpoRouter.__routes["href"];
}

const routeLinks: RouteLink[] = [
  {
    title: "Importer les récipients",
    key: "b1c3f4d2-5e6a-4f8b-9c1e-7d8f9a0b1c2d",
    route: "/settings/importContainers"
  },
  {
    title: "Exporter les récipients",
    key: "a3b4c5d6-7e8f-90a1-b2c3d4e5f6g7",
    route: "/settings/exportFoodContainers"
  }
];

export function Settings() {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={routeLinks}
      renderItem={({ item }) => (
        <Link href={item.route} asChild>
          <Pressable style={styles.linkContainer}>
            <Text style={styles.linkText}>{item.title}</Text>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </Pressable>
        </Link>
      )}
      ItemSeparatorComponent={() => <View style={styles.linkSeparator} />}
    />
  );
}