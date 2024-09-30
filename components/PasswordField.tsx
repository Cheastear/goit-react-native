import { View, TextInput, Text, ViewStyle } from "react-native";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  styles: { input: ViewStyle; showPassword: ViewStyle };
  value: string;
  onChangeText: (item: string) => void;
  type: "new-password" | "current-password";
};

export default function PasswordField({
  styles,
  value = "",
  onChangeText,
  type,
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ position: "relative", width: styles.input.width }}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        autoComplete={type}
        placeholder="Пароль"
        secureTextEntry={!showPassword}
      ></TextInput>
      <Text
        style={styles.showPassword}
        onPress={() => setShowPassword(!showPassword)}
      >
        Показати
      </Text>
    </View>
  );
}
