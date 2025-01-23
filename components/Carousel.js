import React from "react";
import { Text, StyleSheet, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Carousel = () => {
  const { width, height } = Dimensions.get("screen");
  const Info = [1, 2, 3, 4];
  return (
    <SafeAreaView>
      <FlatList
        data={Info}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "90%",
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "skyblue",
                borderRadius: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 50 }}>{item}</Text>
            </View>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />
    </SafeAreaView>
  );
};
export default Carousel;
