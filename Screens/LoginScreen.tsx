import {
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  Animated,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useEffect, useRef } from "react";

import PasswordField from "@/components/PasswordField";
import Button from "@/components/Button";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (email.trim() === "" || password.trim() === "") return;

    console.log({ email, password });

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
            <Text style={styles.h2}>Увійти</Text>
            <View style={[styles.formContainer]}>
              <TextInput
                onChangeText={setEmail}
                value={email}
                autoComplete="email"
                autoCorrect={false}
                style={styles.input}
                placeholder="Адреса електронної пошти"
              />
              <PasswordField
                type="current-password"
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
                title="Увійти"
              />
              <Button
                onPress={() => console.log("switch to login")}
                style={{
                  buttonBg: styles.buttonTransperentBg,
                  buttonText: styles.buttonTransperentText,
                }}
                title="Немає акаунту? Зареєструватися"
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

  h2: {
    marginVertical: 32,
    fontFamily: "Roboto",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 0.01,
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    width: "90%",
    marginHorizontal: "auto",
  },

  input: {
    height: 50,
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    width: "100%",
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
