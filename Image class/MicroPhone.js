import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Audio } from "expo-av";
import { Button } from "react-native-paper";
export default function MicroPhone() {
  const { width, height } = Dimensions.get("screen");
  const [MyAudio, setMyAudio] = useState(null);
  const [AudioPath, setAudioPath] = useState(null);

  const Record = async () => {
    const { status } = await Audio.requestPermissionsAsync();

    if (status === "granted") {
      const { recording } = await Audio.Recording.createAsync();
      setMyAudio(recording);
    }
  };

  const StopRecord = async () => {
    if (MyAudio == null) return;
    await MyAudio.stopAndUnloadAsync();
    setAudioPath(MyAudio._uri);
  };
  const PlayAudio = async () => {
    const { sound } = await Audio.Sound.createAsync({ uri: AudioPath });
    await sound.playAsync();
  };

  return (
    <View style={{ flex: 1, width: width, alignItems: "center" }}>
      <View style={{ width: 250 }}>
        <Button
          mode="contained"
          icon="microphone"
          onPress={Record}
          style={{ marginVertical: 10 }}
        >
          Record
        </Button>

        <Button
          mode="contained"
          icon="stop"
          onPress={StopRecord}
          style={{ marginVertical: 10 }}
        >
          Stop
        </Button>

        <Button
          mode="contained"
          icon="play"
          onPress={PlayAudio}
          style={{ marginVertical: 10 }}
        >
          Play
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
