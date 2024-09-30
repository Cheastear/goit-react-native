import { Pressable, Text, ViewStyle, TextStyle } from "react-native";

type Props = {
  onPress: () => void;
  style: { buttonBg: ViewStyle; buttonText: TextStyle };
  title: string;
};

export default function Button({ onPress, style, title }: Props) {
  return (
    <Pressable onPress={onPress} style={style.buttonBg}>
      <Text style={style.buttonText}>{title}</Text>
    </Pressable>
  );
}
