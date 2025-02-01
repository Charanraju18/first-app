import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Screen1, Screen2, Screen3, Screen4 } from "./Screens";
import Icon from "react-native-vector-icons/Ionicons";

const BottomBar = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ focused, color }) => {
            let IconName, Iconsize;
            if (route.name == "Home") {
              IconName = focused ? "home" : "home-outline";
              Iconsize = focused ? 30 : 22;
            } else if (route.name == "Events") {
              IconName = focused ? "bar-chart" : "bar-chart-outline";
              Iconsize = focused ? 30 : 22;
            } else if (route.name == "Profile") {
              IconName = focused ? "person" : "person-outline";
              Iconsize = focused ? 30 : 22;
            }
            return <Icon name={IconName} color={color} size={25} />;
          },
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 20,
          },
        })}
      >
        <BottomTab.Screen name="Home" component={Screen1} />
        <BottomTab.Screen name="Events" component={Screen2} />
        <BottomTab.Screen name="Profile" component={Screen3} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default BottomBar;
