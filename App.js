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

export default function App() {
  const data = ["Android App", "iOS", "Windows", "Mac"];

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.svtsydney.org/wp-content/uploads/2019/05/Lord_Ganesha-min.jpg",
        }}
        style={{ width: 300, height: 300 }}
        onError={() => console.log("Image not found")}
      />
      {/* <ActivityIndicator size="large" color="skyblue" /> */}
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>{item}</Text>
            </View>
          </>
        )}
      />
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => console.log("Button Pressed")}
      >
        <Text style={styles.customButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    height: "fit-content",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    height: 50,
    borderRadius: 15,
    backgroundColor: "skyblue",
    padding: 10,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
  },
  customButton: {
    marginTop: 20,
    backgroundColor: "skyblue",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  customButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
