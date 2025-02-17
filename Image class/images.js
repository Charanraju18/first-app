import { View, StyleSheet, Text } from "react-native";
import * as Picker from "expo-image-picker";
import { Button } from "react-native-paper";

const ImagePicker = () => {
  const pickImage = async () => {
    const result = await Picker.getMediaLibraryPermissionsAsync();
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Button onPress={pickImage} mode="contained">
        Pick an image
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImagePicker;
