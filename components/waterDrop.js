import React, { useRef } from "react";
import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function WaterDrop() {
  const { width, height } = Dimensions.get("screen");
  const waterDropAnimation = useRef(new Animated.Value(0)).current;
  const roundDropAnimation = useRef(new Animated.Value(700)).current;
  const fun = () => {
    Animated.timing(waterDropAnimation, {
      toValue: 700,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(roundDropAnimation, {
        toValue: 350,
        duration: 1500,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(roundDropAnimation, {
          toValue: 700,
          duration: 1500,
          useNativeDriver: false,
        }).start();
      });
    });
  };
  return (
    <SafeAreaView>
      <View style={{ width: width, height: height }}>
        <TouchableOpacity onPress={fun} style={styles.button}>
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: 250,
            backgroundColor: "skyblue",
            bottom: 0,
            position: "absolute",
          }}
        ></View>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={[
              {
                transform: [{ translateY: waterDropAnimation }],
              },
            ]}
          >
            <Ionicons name="water-sharp" size={50} color="skyblue" />
          </Animated.View>
          <Animated.View
            style={[
              {
                transform: [{ translateY: roundDropAnimation }],
              },
            ]}
          >
            <FontAwesome name="circle" size={50} color="skyblue" />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  waterDrop: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "skyblue",
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
