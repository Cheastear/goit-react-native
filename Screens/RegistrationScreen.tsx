import { Formik } from "formik";
import { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Keyboard,
  Animated,
  Dimensions,
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
  const bottomPosition = useRef(new Animated.Value(0)).current;
  const [username, setUsername] = useState("");
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
    if (username.trim() === "" || email.trim() === "" || password.trim() === "")
      return;

    console.log({ username, email, password });

    setUsername("");
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
            onBlur={handleBlur}
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
    transform: [{ translateY: -Dimensions.get("window").height * 1.65 }],
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "relative",
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
