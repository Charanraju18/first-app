import React from "react";
import {
  View,
  Dimensions,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("screen");
const chats = [
  {
    id: 1,
    name: "John Doe",
    message: "Hey, how are you?",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Let's catch up later.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    message: "Meeting at 3 PM.",
  },
  {
    id: 4,
    name: "Bob Brown",
    message: "Can you send the report?",
  },
  {
    id: 5,
    name: "John Doe",
    message: "Hey, how are you?",
  },
  {
    id: 6,
    name: "Jane Smith",
    message: "Let's catch up later.",
  },
  {
    id: 7,
    name: "Alice Johnson",
    message: "Meeting at 3 PM.",
  },
  {
    id: 8,
    name: "Bob Brown",
    message: "Can you send the report?",
  },
  {
    id: 9,
    name: "John Doe",
    message: "Hey, how are you?",
  },
  {
    id: 10,
    name: "Jane Smith",
    message: "Let's catch up later.",
  },
  {
    id: 11,
    name: "Alice Johnson",
    message: "Meeting at 3 PM.",
  },
  {
    id: 12,
    name: "Bob Brown",
    message: "Can you send the report?",
  },
  {
    id: 13,
    name: "John Doe",
    message: "Hey, how are you?",
  },
  {
    id: 14,
    name: "Jane Smith",
    message: "Let's catch up later.",
  },
  {
    id: 15,
    name: "Alice Johnson",
    message: "Meeting at 3 PM.",
  },
  {
    id: 16,
    name: "Bob Brown",
    message: "Can you send the report?",
  },
];
const Screen1 = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("Status");
  };
  const date =
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    (new Date().getFullYear() - 2000);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {chats.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              flexDirection: "row",
              padding: 10,
              borderBottomColor: "grey",
              width: width,
            }}
            onPress={() =>
              navigation.navigate("ChatScreen", { chatId: item.id })
            }
          >
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdX6yj7LG2SgR9RH_iJtnfn0w_6kcnsj1wildA4owCY0BaD2BUX6KWzIyu3yzT1TlXjDM&usqp=CAU",
              }}
              style={{ width: 50, height: 50, borderRadius: 50 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 15, color: "grey" }}>
                {item.message}
              </Text>
            </View>
            <View style={{ position: "absolute", right: 10, top: 20 }}>
              <Text style={{ fontSize: 15, color: "grey" }}>{date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const Screen2 = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("Calls");
  };
  return <View style={{ width: width, height: height }}></View>;
};

const Screen3 = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("Chats");
  };
  return <View style={{ width: width, height: height }}></View>;
};

const Screen4 = () => {
  const navigation = useNavigation();
  const fun = () => {
    navigation.navigate("Camera");
  };
  return (
    <View style={{ width: width, height: height }}>
      <Text>Screen4</Text>
    </View>
  );
};

const ChatScreen = () => {
  return (
    <View>
      <Text>Chat Screen</Text>
    </View>
  );
};
export { Screen1, Screen2, Screen3, Screen4, ChatScreen };
