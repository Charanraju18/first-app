import Toast from "react-native-toast-message";
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import img1 from "../assets/logo-dark.png";
import img2 from "../assets/google.png";
import img3 from "../assets/22MH1A4250.png";
export default function Toaster() {
  const [username, setUsername] = useState("Charan Raju");
  const icons = [
    {
      img: "",
    },
  ];
  return (
    <SafeAreaView style={mystyle.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={mystyle.mainView}>
        <View style={mystyle.view1}>
          <Image source={img1} style={mystyle.logo} />
        </View>
        <View>
          <Text style={mystyle.welcome}>Welcome, {username}</Text>
        </View>
        <View style={mystyle.imageDiv}>{/* <Image source={img3} /> */}</View>
        <View>
          <Text style={mystyle.categories}>Categories</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const mystyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainView: {
    padding: 20,
  },
  view1: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    height: 40,
    width: 220,
  },
  welcome: {
    top: 20,
    fontWeight: 500,
    fontSize: 20,
    color: "green",
  },
  imageDiv: {
    width: 393,
    height: 250,
    top: 40,
    backgroundColor: "green",
    borderRadius: 15,
  },
  categories: {
    top: 60,
    fontWeight: 500,
    fontSize: 20,
    color: "green",
  },
});
