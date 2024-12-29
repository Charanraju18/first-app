import { View, StyleSheet, Text, ScrollView } from "react-native";

function Flex() {
  return (
    <>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {/* <View style={styles.parent1}>
          <View style={styles.Child}>
            <Text style={styles.Childs}>1</Text>
          </View>
          <View style={styles.Child}>
            <Text style={styles.Childs}>2</Text>
          </View>
          <View style={styles.Child}>
            <Text style={styles.Childs}>3</Text>
          </View>
        </View> */}
          <View style={styles.parent2}>
            <View style={styles.p2child1}></View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
  },
  Child: {
    width: 100,
    height: 100,
    backgroundColor: "#000",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Childs: {
    color: "white",
    padding: 18,
    borderColor: "white",
    borderWidth: 3,
  },
  parent1: {
    width: "100%",
    height: 150,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    borderWidth: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  parent2: {
    flex: 3,
    display: "flex",
    borderColor: "black",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  p2child1: {
    width: 250,
    height: 375,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 5,
  },
});

export default Flex;
