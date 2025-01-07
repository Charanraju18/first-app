import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";

export default function SafeArea() {
  return (
    <>
      <SafeAreaView style={mystyle.container}>
        <StatusBar style={"light"} backgroundColor="black" />
        <View>
          <Icon name="home" size={30} color="black" />
        </View>
      </SafeAreaView>
    </>
  );
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
