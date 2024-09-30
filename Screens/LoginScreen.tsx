import {
  View,
  Image,
  Text,
  TextInput,
  Keyboard,
  Animated,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useState, useEffect, useRef } from "react";

import PasswordField from "@/components/PasswordField";
import Button from "@/components/Button";

export default function LoginScreen() {
  const bottomPosition = useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        Animated.timing(bottomPosition, {
          toValue: 170,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        Animated.timing(bottomPosition, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [bottomPosition]);

  const handleBlur = (qq: any) => {
    if (
      qq.target._internalFiberInstanceHandleDEV.elementType !==
      "RCTSinglelineTextInputView"
    )
      Keyboard.dismiss();
  };
  const handleSubmit = () => {
    Keyboard.dismiss();
    if (email.trim() === "" || password.trim() === "") return;

    console.log({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <View onTouchStart={handleBlur}>
      <Image
        source={require("@/assets/images/Photo BG.jpg")}
        style={styles.bgImage}
      />
      <Animated.View style={[styles.container, { bottom: bottomPosition }]}>
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
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
    transform: [{ translateY: -Dimensions.get("window").height * 1.55 }],
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
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
