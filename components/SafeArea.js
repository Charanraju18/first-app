import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";

export default function SafeArea() {
  return (
    <SafeAreaView>
      <View style={mystyle.container}>
        <Text>Safe Area</Text>
      </View>
    </SafeAreaView>
  );
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
