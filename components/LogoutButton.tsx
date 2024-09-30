import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Svg, Path, Circle } from "react-native-svg";

type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

export default function LogoutButton({ onPress, style }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17 16L21 12L17 8"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M21 12H9"
          stroke="#BDBDBD"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 24,
    height: 24,
  },
});
