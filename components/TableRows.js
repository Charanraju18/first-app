import { Table, Row, Rows } from "react-native-table-component";
import { View, StyleSheet, textStyle, ScrollView } from "react-native";
function TableRows() {
  const date = {
    tableHead: ["Name", "Age", "College", "Branch", "Roll"],
    tableData: [
      ["Kitendra", 20, "ACET", "AIML", "22MH1A4211"],
      ["Praveen", 20, "ACET", "AIML", "22MH1A4220"],
      ["Sri Charan", 20, "ACET", "AIML", "22MH1A4223"],
      ["Manohar", 23, "ACET", "AIML", "22MH1A4246"],
      ["Charan", 20, "ACET", "AIML", "22MH1A4250"],
      ["Ravi", 21, "ACET", "AIML", "22MH1A4252"],
      ["Karthik", 23, "ACET", "AIML", "22MH1A4254"],
      ["Vishnu", 18, "ACET", "AIML", "22MH1A4259"],
      ["Pranay", 40, "ACET", "AIML", "22MH1A4261"],
      ["Sanjay", 19, "ACET", "AIML", "22MH1A4264"],
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
            widthArr={[120, 120, 120, 120, 150]}
            style={styles.header}
            textStyle={styles.headerText}
          />
          {date.tableData.map((rowData, index) => (
            <Row
              key={index}
              data={rowData}
              widthArr={[120, 120, 120, 120, 150]}
              style={[
                styles.cells,
                index % 2 && { backgroundColor: "darkgray" },
              ]}
              textStyle={[styles.cellText, index % 2 && { color: "white" }]}
            />
          ))}
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
    padding: 10,
    fontSize: 18,
    paddingLeft: 20,
  },
});
export default TableRows;
