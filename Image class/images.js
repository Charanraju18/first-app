import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import * as Picker from "expo-image-picker";
import { Button } from "react-native-paper";
import { useState } from "react";

const ImagePicker = () => {
  const { width, height } = Dimensions.get("screen");
  const [image, setImage] = useState(null);

  const showImagePicker = async () => {
    const permissionResult = await Picker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status === "granted") {
      const result = await Picker.launchImageLibraryAsync();
      setImage(result.assets[0].uri);
    }
  };

  const openCamera = async () => {
    const permissionResult = await Picker.requestCameraPermissionsAsync();
    if (permissionResult.status === "granted") {
      const result = await Picker.launchCameraAsync();
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          marginTop: 20,
        }}
      >
        <Button mode="contained" onPress={showImagePicker}>
          Pick Image
        </Button>
        <Button mode="contained" onPress={openCamera}>
          Open Camera
        </Button>
      </View>
      <View style={{ width: width, alignItems: "center" }}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImagePicker;
