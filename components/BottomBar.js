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
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color }) => {
            let IconName, Iconsize;
            Iconsize = focused ? 30 : 22;
            if (route.name == "Home") {
              IconName = focused ? "home" : "home-outline";
            } else if (route.name == "Events") {
              IconName = focused ? "bar-chart" : "bar-chart-outline";
            } else if (route.name == "Profile") {
              IconName = focused ? "person" : "person-outline";
            }
            return <Icon name={IconName} color={color} size={Iconsize} />;
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