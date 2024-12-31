import { Table, Row, Rows } from "react-native-table-component";
import { View, StyleSheet, textStyle, ScrollView } from "react-native";
function TableRows() {
  const date = {
    tableHead: ["Name", "Age", "College", "Branch", "Roll"],
    tableData: [
      ["Karthik", 21, "ACET", "AIML", "22MH1A4254"],
      ["Vishnu", 22, "ACET", "AIML", "22MH1A4259"],
      ["Pranay", 20, "ACE", "AIML", "22MH1A4261"],
    ],
  };
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Table
          borderStyle={{
            borderWidth: 1,
            borderColor: "gray",
          }}
        >
          <Row
            data={date.tableHead}
            widthArr={[120, 120, 120, 120, 140]}
            style={styles.header}
            textStyle={styles.headerText}
          />
          <Rows
            data={date.tableData}
            widthArr={[120, 120, 120, 120, 140]}
            style={styles.cells}
            textStyle={styles.cellText}
          />
        </Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 16,
  },
  header: {
    backgroundColor: "black",
    height: 50,
  },
  headerText: {
    backgroundColor: "black",
    color: "white",
    fontWeight: 900,
    textAlign: "center",
    fontSize: 18,
  },
  cells: {
    backgroundColor: "white",
    height: 50,
  },
  cellText: {
    color: "black",
    textAlign: "center",
    padding: 10,
    fontSize: 18,
  },
});
export default TableRows;
