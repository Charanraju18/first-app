import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const Chats = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("newScreen");
  };
  return (
    <View>
      <Text>Chats Screen</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onPress={fun}
          style={{
            backgroundColor: "grey",
            width: 150,
            height: 40,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white" }}>New Screen</Text>
        </Button>
      </View>
    </View>
  );
};

const Status = () => {
  return (
    <View>
      <Text>status Screen</Text>
    </View>
  );
};

const Calls = () => {
  return (
    <View>
      <Text>calls Screen</Text>
    </View>
  );
};

const NewScreen = () => {
  return (
    <View>
      <Text>New Screen</Text>
    </View>
  );
};

export { Chats, Status, Calls, NewScreen };
