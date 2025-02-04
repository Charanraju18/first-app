import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChatScreen, Screen1, Screen2, Screen3, Screen4 } from "./Screens";
import Feather from "react-native-vector-icons/Feather";
const Stack = createStackNavigator();
const TopBar = createMaterialTopTabNavigator();

const TopBarNavigator = () => (
  <TopBar.Navigator
    screenOptions={{
      tabBarActiveTintColor: "green",
      tabBarInactiveTintColor: "grey",
      tabBarLabelStyle: {
        fontSize: 15,
        fontWeight: "400",
        width: 100,
      },
      tabBarIndicatorStyle: {
        backgroundColor: "green",
        height: 4,
        borderRadius: 10,
      },
      tabBarStyle: {
        height: 70,
        justifyContent: "center",
        alignItems: "center",
      },
    }}
  >
    <TopBar.Screen
      name="Chats"
      component={Screen1}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="chat" size={23} color={color} />
        ),
      }}
    />
    <TopBar.Screen
      name="Status"
      component={Screen2}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="update" size={23} color={color} />
        ),
      }}
    />
    <TopBar.Screen
      name="Communities"
      component={Screen3}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="account-group"
            size={23}
            color={color}
          />
        ),
      }}
    />
    <TopBar.Screen
      name="Calls"
      component={Screen4}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="call" size={23} color={color} />
        ),
      }}
    />
  </TopBar.Navigator>
);

const MainScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        flexDirection: "row",
      }}
    >
      <View>
        <Text
          style={{
            color: "#1EA952",
            fontSize: 28,
            fontWeight: 500,
            paddingLeft: 20,
          }}
        >
          WhatsApp
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20, marginRight: 20 }}>
        <MaterialCommunityIcons name="qrcode-scan" size={23} />
        <Feather name="camera" size={23} />
        <MaterialCommunityIcons name="dots-vertical" size={23} />
      </View>
    </View>
    <TopBarNavigator />
  </SafeAreaView>
);

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={({ route }) => ({
              headerShown: true,
              title: route.params.userName,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;