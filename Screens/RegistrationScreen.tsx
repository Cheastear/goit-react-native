import { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { StyleSheet } from "react-native";

import Button from "@/components/Button";
import PasswordField from "@/components/PasswordField";
import AddButton from "@/components/AddButton";

type FormType = {
  username: string;
  email: string;
  password: string;
};

export default function RegistrationScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (username.trim() === "" || email.trim() === "" || password.trim() === "")
      return;

    console.log({ username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <Image
          source={require("@/assets/images/Photo BG.jpg")}
          style={styles.bgImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.container}>
            <View style={styles.importImage}>
              <Image style={styles.userIcon} />
              <AddButton
                onPress={() => console.log("qq")}
                style={styles.addButton}
              />
            </View>
            <Text style={styles.h2}>Реєстрація</Text>

            <View style={[styles.formContainer]}>
              <TextInput
                onChangeText={setUsername}
                autoComplete="username"
                style={styles.input}
                placeholder="Логін"
              />
              <TextInput
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                autoCorrect={false}
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />
              <PasswordField
                type="new-password"
                onChangeText={(item) => setPassword(item)}
                value={password}
                styles={styles}
              />
              <Button
                onPress={() => handleSubmit()}
                style={{
                  buttonBg: styles.buttonOrangeBg,
                  buttonText: styles.buttonOrangeText,
                }}
                title="Зареєстуватися"
              />
              <Button
                onPress={() => console.log("switch to login")}
                style={{
                  buttonBg: styles.buttonTransperentBg,
                  buttonText: styles.buttonTransperentText,
                }}
                title="Вже є акаунт? Увійти"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
  },

  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  container: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
    paddingBottom: 30,
  },

  importImage: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    left: "50%",
    transform: [{ translateX: -60 }, { translateY: -60 }],
    position: "absolute",
  },
  userIcon: {
    width: 120,
    height: 120,
  },
  addButton: {
    transform: [{ translateX: 105 }, { translateY: -40 }],
  },

  h2: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  formContainer: {
    alignItems: "center",
    gap: 16,
    width: "90%",
    marginHorizontal: "auto",
    paddingBottom: 0,
  },

  input: {
    width: "100%",
    height: 50,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    cursor: "pointer",
    position: "relative",
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 15,
  },

  buttonOrangeText: {
    color: "#ffffff",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
  buttonOrangeBg: {
    backgroundColor: "#FF6C00",
    width: "90%",
    paddingVertical: 15,
    borderRadius: 100,
    marginTop: 30,
  },

  buttonTransperentText: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
    color: "#1B4371",
  },
  buttonTransperentBg: {
    marginHorizontal: "auto",
  },
});
