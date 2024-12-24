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

export default function App() {
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
    <TouchableOpacity onPress={() => console.log(item.name)}>
      <View style={styles.carNameDiv}>
        <Text style={styles.carText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      {/* <View style={styles.mainDiv}>
        <View style={styles.insideDiv}>
          <Image
            source={{ uri: data[0].Car }}
            style={{ width: "80%", height: "80%" }}
          />
        </View>
        <View style={styles.insideDiv}>
          <FlatList data={data} renderItem={rendername} />
        </View>
      </View> */}
      <JustifyContentBasics></JustifyContentBasics>
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
