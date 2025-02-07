import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Calls, Chats, NewScreen, Status } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
const stack = createStackNavigator();
const topTap = createMaterialTopTabNavigator();
const PresTopBar = () => {
  return (
    <topTap.Navigator>
      <topTap.Screen name="chats" component={Chats} />
      <topTap.Screen name="status" component={Status} />
      <topTap.Screen name="calls" component={Calls} />
    </topTap.Navigator>
  );
};

export default function ChatStack() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen name="mainScreen" component={PresTopBar} />
        <stack.Screen
          name="newScreen"
          component={NewScreen}
          options={{ headerShown: true }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
