import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";
import { Button } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";
import Icon from "react-native-vector-icons/FontAwesome5";
export default function FingerPrint() {
  const { width, height } = Dimensions.get("screen");
  const unlock = async () => {
    const status = await LocalAuthentication.hasHardwareAsync();
    if (status) {
      const result = await LocalAuthentication.isEnrolledAsync();
      if (result) {
        const auth = await LocalAuthentication.authenticateAsync();
        console.log(auth);
      }
    }
  };
  return (
    <View
      style={{
        width: width,
        height: height,
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: 50, fontSize: 20 }}>Unlock</Text>
      <View style={{ width: 150, marginTop: 25 }}>
        <Button
          mode="contained"
          icon={({ size, color }) => (
            <Icon name="fingerprint" size={size * 1.2} color={color} />
          )}
          onPress={unlock}
        >
          Unlock
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
