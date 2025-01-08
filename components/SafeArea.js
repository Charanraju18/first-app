import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";

export default function SafeArea() {
  const [bgColor, setbgColor] = useState("white");
  const [textColor, settextColor] = useState("dark");
  const changeStatusBar = () => {
    settextColor(textColor === "dark" ? "light" : "dark");
    setbgColor(bgColor === "white" ? "black" : "white");
  };
  return (
    <>
      <SafeAreaView style={mystyle.container}>
        <StatusBar style={textColor} backgroundColor={bgColor} />
        {/* <View>
          <Icon name="home" size={30} color="black" />
        </View> */}
        <View style={mystyle.btndiv}>
          <Button title="change statusbar" onPress={changeStatusBar} />
        </View>
      </SafeAreaView>
    </>
  );
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btndiv: {
    backgroundColor: "gray",
    width: 200,
  },
});
