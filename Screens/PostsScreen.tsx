import LogoutButton from "@/components/LogoutButton";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

const data = ["qq"];

export default function PostsScreen() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <Text style={styles.emptyButton} />
        <Text>Публікації</Text>
        <LogoutButton onPress={() => console.log("Logout")} />
      </View>

      <FlatList
        data={data}
        renderItem={(elem) => {
          return <Text>elem</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === "ios" ? 45 : 0,
    paddingHorizontal: 10,
    height: 44,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
  },
  h3: {
    fontFamily: "Roboto",
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.4,
    textAlign: "center",
  },
  emptyButton: {
    width: 24,
  },
});
