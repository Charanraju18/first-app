import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import { useCameraPermissions, CameraView } from "expo-camera";
import { Button } from "react-native-paper";
const { width } = Dimensions.get("screen");
import Icon from "react-native-vector-icons/FontAwesome6";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default function Camera() {
  const [permission, grantpermission] = useCameraPermissions();
  const [allow, setAllow] = useState(false);
  const [face, setFace] = useState("back");
  const [clicked, setClicked] = useState(false);
  const closeCamera = async () => {
    setAllow(false);
  };

  const openCamera = async () => {
    setAllow(true);
    setClicked(true);
  };

  const setCamera = async () => {
    if (face === "back") {
      setFace("front");
    } else {
      setFace("back");
    }
  };

  const [Myimage, setMyimage] = useState(null);

  const cameraRef = useRef(null);

  const TakePhoto = async () => {
    console.log("TakePhoto");
    if (cameraRef.current !== null) {
      const result = await cameraRef.current.takePictureAsync({
        quality: 1,
      });
      console.log(result);
      setMyimage(result.uri);
      setClicked(false);
    }
  };

  const ShareFile = async () => {
    if (!Myimage) {
      alert("No image to share!");
      return;
    }

    try {
      const FileURL = `${FileSystem.cacheDirectory}Shared_image.jpg`;
      await FileSystem.copyAsync({
        from: Myimage,
        to: FileURL,
      });
      const permission = await Sharing.isAvailableAsync();
      if (permission) {
        await Sharing.shareAsync(FileURL);
      } else {
        alert("Sharing is not available on this device.");
      }
    } catch (error) {
      console.error("Error sharing file:", error);
      alert("Failed to share the image.");
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{ width: width, justifyContent: "center", alignItems: "center" }}
      >
        <Button
          mode="contained"
          onPress={openCamera}
          style={{ width: 200, marginBottom: 20 }}
        >
          Open Camera
        </Button>
        {allow && clicked ? (
          <CameraView
            style={{ width: width, height: 400 }}
            facing={face}
            ref={cameraRef}
          />
        ) : (
          ""
        )}
        {allow && clicked ? (
          <Icon
            name="camera-rotate"
            size={30}
            color="black"
            onPress={setCamera}
            style={{ marginTop: 20 }}
          />
        ) : (
          ""
        )}
        {clicked ? (
          <Button
            mode="contained"
            onPress={closeCamera}
            style={{ width: 200, marginTop: 20 }}
          >
            Close Camera
          </Button>
        ) : (
          ""
        )}
        {allow && clicked ? (
          <Button
            mode="contained"
            icon="camera"
            onPress={TakePhoto}
            style={{ marginTop: 20 }}
          >
            Capture Picture
          </Button>
        ) : (
          ""
        )}
        {Myimage && allow ? (
          <>
            <Image
              source={{ uri: Myimage }}
              style={{ width: 200, height: 200, marginVertical: 20 }}
            />
            <Button mode="contained" icon="share" onPress={ShareFile}>
              Share Image
            </Button>
          </>
        ) : (
          <Text style={{ marginVertical: 20 }}>No Image Captured</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
