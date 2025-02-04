import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Dimensions, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const TaskScreen1 = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32 }}>Home</Text>
    </View>
  );
};

const TaskScreen2 = () => {
  return (
    <View
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32 }}>Menu</Text>
    </View>
  );
};

const TaskScreen3 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: width,
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 32 }}>Profile</Text>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate("ProfileScreen")}
      >
        Login / SignUp
      </Button>
    </View>
  );
};

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Text style={{ fontSize: 32 }}>LOGIN</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <ScrollView style={styles.loginContainer}>
      <Text style={{ fontSize: 32 }}>SIGNUP</Text>
    </ScrollView>
  );
};

const LoginTopBar = () => {
  const TopBar = createMaterialTopTabNavigator();
  return (
    <TopBar.Navigator>
      <TopBar.Screen name="Login" component={Login} />
      <TopBar.Screen name="SignUp" component={SignUp} />
    </TopBar.Navigator>
  );
};

const ProfileScreen = () => {
  return <LoginTopBar />;
};

export { TaskScreen1, TaskScreen2, TaskScreen3, ProfileScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    width: width,
    height: height,
    display: "flex",
    backgroundColor: "#ff7f7f",
  },
});
