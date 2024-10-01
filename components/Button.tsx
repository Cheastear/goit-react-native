import { ReactNode } from "react";
import { Pressable, Text, ViewStyle, TextStyle } from "react-native";

type Props = {
  onPress: () => void;
  style: { buttonBg: ViewStyle; buttonText: TextStyle; active?: ViewStyle };
  isActive?: boolean;
  title?: string;
  children?: ReactNode;
};

export default function Button({
  onPress,
  style,
  isActive,
  title,
  children,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={isActive ? { ...style.buttonBg, ...style.active } : style.buttonBg}
    >
      {children !== undefined ? (
        children
      ) : (
        <Text
          style={
            isActive
              ? { ...style.buttonText, ...style.active }
              : style.buttonText
          }
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
}
