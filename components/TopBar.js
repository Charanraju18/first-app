import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ChatScreen, Screen1, Screen2, Screen3, Screen4 } from "./Screens";

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
      component={Screen4}
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
      component={Screen3}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="call" size={23} color={color} />
        ),
      }}
    />
  </TopBar.Navigator>
);

const Navigation = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} options={{}} />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: true, title: "Chats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

const MainScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          color: "green",
          fontSize: 28,
          fontWeight: 500,
          paddingLeft: 20,
        }}
      >
        WhatsApp
      </Text>
    </View>
    <TopBarNavigator />
  </SafeAreaView>
);

export default Navigation;
