import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Chats = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("newScreen");
  };
  return (
    <View style={styles.container}>
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
        <Text style={{ marginTop: 20, fontSize: 20 }}>Chats Screen</Text>
      </View>
    </View>
  );
};

const Status = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 20 }}>status Screen</Text>
    </View>
  );
};

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 20 }}>calls Screen</Text>
    </View>
  );
};

const NewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20, fontSize: 20 }}>New Screen</Text>
    </View>
  );
};

export { Chats, Status, Calls, NewScreen };

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});