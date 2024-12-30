import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

function Flex() {
  MapData = [
    {
      name: "Jithendra",
      age: 20,
      college: "ACE",
      branch: "AIML",
      roll: "22MH1A4211",
    },
    {
      name: "Praveen",
      age: 20,
      college: "ACE",
      branch: "AIML",
      roll: "22MH1A4220",
    },
    {
      name: "Sri Charan",
      age: 21,
      college: "ACET",
      branch: "AIML",
      roll: "22MH1A4223",
    },
    {
      name: "Charan",
      age: 20,
      college: "ACE",
      branch: "AIML",
      roll: "22MH1A4250",
    },
    {
      name: "Ravi",
      age: 22,
      college: "ACET",
      branch: "AIML",
      roll: "22MH1A4252",
    },
    {
      name: "Karthik",
      age: 21,
      college: "ACET",
      branch: "AIML",
      roll: "22MH1A4254",
    },
    {
      name: "Vishnu",
      age: 22,
      college: "ACET",
      branch: "AIML",
      roll: "22MH1A4259",
    },
    {
      name: "Pranay",
      age: 20,
      college: "ACE",
      branch: "AIML",
      roll: "22MH1A4261",
    },
    {
      name: "Mani",
      age: 20,
      college: "ACE",
      branch: "AIML",
      roll: "22MH1A4262",
    },
  ];
  return (
    <>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {MapData.map((item, index) => {
            return (
              <View key={index} style={styles.p2child1}>
                <Image
                  source={{
                    uri: `https://info.aec.edu.in/ACET/StudentPhotos/${item.roll}.jpg`,
                  }}
                  style={styles.image}
                />
                <View style={styles.stdetails}>
                  <Text style={{ fontSize: 20 }}>Name :{item.name}</Text>
                  <Text style={{ fontSize: 20 }}>Age :{item.age}</Text>
                  <Text style={{ fontSize: 20 }}>College :{item.college}</Text>
                  <Text style={{ fontSize: 20 }}>Branch :{item.branch}</Text>
                  <Text style={{ fontSize: 20 }}>Roll :{item.roll}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    top: -70,
  },
  stdetails: {
    fontSize: 40,
    gap: 7,
    top: 0,
  },
  container: {
    backgroundColor: "#f0f0f0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 55,
    padding: 50,
  },
  p2child1: {
    width: 335,
    height: 400,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 5,
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    rowGap: 5,
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default Flex;
