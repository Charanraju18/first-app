import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AnimatedComponent() {
  const leftMove = useRef(new Animated.Value(0)).current;
  const Fun = () => {
    Animated.timing(leftMove, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(leftMove, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    });
  };

  const colorchange = leftMove.interpolate({
    inputRange: [0, 300],
    outputRange: ["red", "black"],
  });

  return (
    <>
      <SafeAreaView style={{ height: 800 }}>
        <Animated.View
          style={[
            styles.container,
            {
              transform: [{ translateX: leftMove }],
              backgroundColor: colorchange,
            },
          ]}
        ></Animated.View>
        <TouchableOpacity onPress={Fun} style={styles.button}>
          <Text style={styles.buttonText}>Move</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
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
