import Button from "@/components/Button";
import LogoutButton from "@/components/LogoutButton";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { Path, Svg, Rect } from "react-native-svg";

const data = [
  {
    email: "email@example.com",
    name: "Natali Romanova",
  },
];

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.header}>
        <Text style={styles.emptyButton} />
        <Text>Публікації</Text>
        <LogoutButton onPress={() => console.log("Logout")} />
      </View>

      <FlatList
        style={styles.listContainer}
        data={data}
        renderItem={(elem) => {
          return (
            <View style={styles.elemContainer}>
              <Image
                style={styles.image}
                width={60}
                height={60}
                src={require("@/assets/images/avatar.jpeg")}
              />
              <View>
                <Text style={styles.userName}>{elem.item.name}</Text>
                <Text style={styles.userEmail}>{elem.item.email}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.footer}>
        <Button onPress={() => console.log("Add new")} style={styles} title="+">
          <Text>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Rect width="24" height="24" fill="white" />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 3H10V10H3V3Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 3H21V10H14V3Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 14H21V21H14V14Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 14H10V21H3V14Z"
                stroke="#212121"
                stroke-opacity="0.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </Text>
        </Button>
        <Button
          onPress={() => console.log("Add new")}
          style={styles}
          isActive={true}
          title="+"
        >
          <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.5 0.5H6.5V6.5H0.5V7.5H6.5V13.5H7.5V7.5H13.5V6.5H7.5V0.5Z"
              fill="white"
            />
          </Svg>
        </Button>
        <Button onPress={() => console.log("Add new")} style={styles} title="+">
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21"
              stroke="#212121"
              stroke-opacity="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
              stroke="#212121"
              stroke-opacity="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
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

  listContainer: {
    display: "flex",
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
  elemContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
  },
  userName: {
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 15.23,
  },
  userEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 12.89,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    marginBottom: Platform.OS === "ios" ? 25 : 0,
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 48,
    borderTopWidth: 1,
    borderTopColor: "#aaa",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  buttonBg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: 200,
    width: 20,
    color: "#fff",
  },
  active: {
    backgroundColor: "#FF6C00",
  },
});
