import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import JustifyContentBasics from "./components/JustifyContentBasics";
import { useEffect, useState } from "react";
import Flex from "./components/flex";
import TableRows from "./components/TableRows";
import SafeArea from "./components/SafeArea";
import Toaster from "./components/Toaster";
import Carousel from "./components/Carousel";
import Animations from "./components/Animated";
import WaterDrop from "./components/waterDrop";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1, Screen2, Screen3 } from "./components/Screens";
import TopBar from "./components/TopBar";
import Navigation from "./components/TopBar";
// import BottomBar from "./components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
// import MainPage from "./task/MainPage";
import BottomBar from "./task/MainPage";
import DNav from "./components/DrawerNavigation";
import ChatStack from "./presentation/ChatStack";
import ImagePicker from "./Image class/images";
import Shareing from "./Image class/Shareing";
import Camera from "./Image class/Camera";
import FingerPrint from "./Image class/FingerPrint";
import MicroPhone from "./Image class/MicroPhone";
import Notification from "./Notification/Notification";
export default function App() {
  const [carName, setCarName] = useState("Curvv");
  const [select, setSelected] = useState("Curvv");

  const data = [
    {
      Car: "https://imgd.aeplcdn.com/600x337/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
      name: "Curvv",
    },
    {
      Car: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      name: "Creta",
    },
    {
      Car: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80",
      name: "Thar Roxx",
    },
    {
      Car: "https://imgd.aeplcdn.com/664x374/n/cw/ec/44709/fortuner-exterior-right-front-three-quarter-20.jpeg?isig=0&q=80",
      name: "Fortuner",
    },
  ];

  const rendername = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setCarName(item.name);
      }}
    >
      <View style={styles.carNameDiv}>
        <Text style={styles.carText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const stack = createStackNavigator();
  return (
    /* <View style={styles.mainDiv}>
        <View style={styles.insideDiv}>
          {data.map((item) => {
            if (item.name === carName) {
              return (
                <Image
                  key={item}
                  source={{ uri: item.Car }}
                  style={{ width: "80%", height: "80%" }}
                />
              );
            }
          })}
        </View>
        <View style={styles.insideDiv}>
          <FlatList data={data} renderItem={rendername} />
        </View>
      </View> */
    /* <Flex /> */
    /* <TableRows /> */
    /* <SafeArea /> */
    <>
      {/* <Modals /> */}
      {/* <Toaster /> */}
      {/* <Carousel /> */}
      {/* <Animations /> */}
      {/* <WaterDrop /> */}
      {/* <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="screen1" component={Screen1} />
          <stack.Screen name="screen2" component={Screen2} />
          <stack.Screen name="screen3" component={Screen3} />
        </stack.Navigator>
      </NavigationContainer> */}
      {/* <Navigation /> */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* <BottomBar /> */}
        {/* <ChatStack /> */}
        {/* <ImagePicker /> */}
        {/* <Shareing /> */}
        {/* <Camera /> */}
        {/* <FingerPrint /> */}
        {/* <MicroPhone /> */}
        <Notification />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainDiv: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  insideDiv: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  carNameDiv: {
    width: 100,
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  carText: {
    fontWeight: 700,
    textAlign: "center",
    color: "white",
  },
});
