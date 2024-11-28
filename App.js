import { TextInput } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export default function App() {
  const value = useSharedValue(0);
  return (
    <TextInput
      style={{
        height: 40,
        margin: 50,
        borderWidth: 1,
        padding: 10,
      }}
      role={undefined}
      keyboardType="decimal-pad"
    />
  );
}
