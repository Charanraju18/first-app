import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  ProfileScreen,
  TaskScreen1,
  TaskScreen2,
  TaskScreen3,
} from "./TaskScreens";
import Icon from "react-native-vector-icons/Ionicons";

const BottomBar = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color }) => {
            let IconName;
            if (route.name === "Home") {
              IconName = focused ? "home" : "home-outline";
            } else if (route.name === "Menu") {
              IconName = "menu";
            } else if (route.name === "Profile") {
              IconName = focused ? "person" : "person-outline";
            }
            return <Icon name={IconName} color={color} size={24} />;
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 16,
          },
        })}
      >
        <BottomTab.Screen name="Menu" component={TaskScreen2} />
        <BottomTab.Screen name="Home" component={TaskScreen1} />
        <BottomTab.Screen name="Profile" component={ProfileStack} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const ProfileStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={TaskScreen3} />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default BottomBar;
