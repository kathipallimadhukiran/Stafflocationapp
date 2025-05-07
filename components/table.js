import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";

const Tables = () => {
  const header = ["S.no", "Name", "Age", "Roll number", "Location"];
  const tabledata = [
    [1, "Madhu", "20", "22A91A04L9", "Rajahmundry"],
    [2, "Kiran", "22", "22A91A04L8", "Vijayawada"],
    [3, "Kumar", "21", "22A91A04L7", "Satellite City"],
    [4, "Rajesh", "23", "22A91A04L6", "Amaravathi"],
    [5, "Ravi", "25", "22A91A04L5", "Vizag"],
  ];

  return (
    <View style={tablestyles.tablecon}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Table</Text>
      <ScrollView horizontal>
        <Table style={{ margin: 20 }}>
          <Row
            data={header}
            style={tablestyles.tablelayout}
            textStyle={tablestyles.headerstylings}
         
          />
          {tabledata.map((item, index) => {
            return (
              <Row
                key={index}
                data={item}
                style={[
                  tablestyles.tablelayout,
                  index % 2 == 0 ? tablestyles.evenRow : tablestyles.oddRow,
                ]}
                textStyle={tablestyles.textStylings}
              />
            );
          })}
        </Table>
      </ScrollView>
    </View>
  );
};

const tablestyles = StyleSheet.create({
  
  // TABLE STYLES STARTED 



  tablelayout:{
  width:550,

   
  }

,





  // textstyles

  textStylings:{
textAlign:"center",
    fontSize: 20,
    borderWidth:1,
    

  }
  ,headerstylings:{
    
    fontSize: 22,
    fontWeight:900,
    borderWidth:1,

  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // tablecon: {
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // tableheader: {
  //   backgroundColor: "lightgreen",
  //   width: 700,
  //   height: 40, // Changed to a number
  // },
  // tablerows: {
  //   backgroundColor: "white",
  //   width: 700,
  //   height: 40, // Changed to a number
  // },
  // evenRow: {
  //   backgroundColor: "white",
  // },
  // oddRow: {
  //   backgroundColor: "lightgray",
  // },
  // textStylings: {
  //   borderWidth: 1,
  //   fontSize: 20,
  //   flex: 1,
  //   textAlign: "center",
  //   fontWeight:"bold"
  // },











});

export default Tables;
