import Toast from "react-native-toast-message";
import { Button, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { useState } from "react";
export default function Toaster() {
  const [Show, setShow] = useState(false);
  const ShowMsg = () => {
    Toast.show({
      type: "success",
      text1: "Login failed",
      text2: "You have successfully logged in",
      position: "bottom",
      visibilityTime: 2000,
    });
  };
  //   const [bgColor, setbgColor] = useState("white");
  //   const [textColor, settextColor] = useState("dark");
  //   const changeStatusBar = () => {
  //     settextColor(textColor === "dark" ? "light" : "dark");
  //     setbgColor(bgColor === "white" ? "black" : "white");
  //   };
  return (
    <SafeAreaView style={mystyle.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Button mode="contained" onPress={ShowMsg} title="Click me" />
    </SafeAreaView>
  );
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btndiv: {
    backgroundColor: "gray",
    width: 200,
  },
});
