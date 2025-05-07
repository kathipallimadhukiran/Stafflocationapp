import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  TableWrapper,
  Cell,
} from "react-native-table-component";

const Tablecols = () => {
  return (
    <View style={tablestyles.container}>
      <Text style={tablestyles.title}>Table Using Cols</Text>
      <ScrollView horizontal>
        <View style={tablestyles.tableWrapper}>
          <TableWrapper style={tablestyles.tableContainer}>
            {/* Header Cells */}
            <Cell data={"Name"} style={tablestyles.headerCell} />
            <TableWrapper style={tablestyles.columnWrapper}>
              <Cell data={"College"} style={tablestyles.headerCell} />
              <TableWrapper style={tablestyles.rowWrapper}>
                <Cell data={"AEC"} style={tablestyles.cell} />
                <Cell data={"ACET"} style={tablestyles.cell} />
              </TableWrapper>
            </TableWrapper>
            <Cell data={"Age"} style={tablestyles.headerCell} />
            <Cell data={"Roll No"} style={tablestyles.headerCell} />
          </TableWrapper>
        </View>
      </ScrollView>
    </View>
  );
};

const tablestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
  tableWrapper: {
    width:"100%", 
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  tableContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  columnWrapper: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
  },
  rowWrapper: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "black",
  },
  headerCell: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    backgroundColor: "pink",
    textAlign: "center",
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    textAlign: "center",
  },
});

export default Tablecols;
