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
    title: "Exporter les récipients",
    key: "926ff737-31d2-492b-a336-f9ac4b948c22",
    route: "/settings/exportContainers"
  },
  {
    title: "Partager les récipients",
    key: "a3b4c5d6-7e8f-90a1-b2c3d4e5f6g7",
    route: "/settings/shareContainers"
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