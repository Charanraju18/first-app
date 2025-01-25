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

export default function WaterDrop() {
  const { width, height } = Dimensions.get("screen");
  const waterDropAnimation = useRef(new Animated.Value(0)).current;
  const fun = () => {
    Animated.timing(waterDropAnimation, {
      toValue: 700,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(waterDropAnimation, {
        toValue: 350,
        duration: 1500,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(waterDropAnimation, {
          toValue: 700,
          duration: 1500,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(waterDropAnimation, {
            toValue: 600,
            duration: 1500,
            useNativeDriver: false,
          }).start(() => {
            Animated.timing(waterDropAnimation, {
              toValue: 700,
              duration: 1500,
              useNativeDriver: false,
            }).start();
          });
        });
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
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={[
              styles.waterDrop,
              {
                transform: [{ translateY: waterDropAnimation }],
              },
            ]}
          ></Animated.View>
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
