import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const Dycards = () => {
  const studentdata = [
    {
      name: "madhu",
      age: 20,
      rollno: 1,
      image: require("../assets/student_images/img1.jpeg"),
      email: "1@gmail.com",
    },
    {
      name: "ravi",
      age: 21,
      rollno: 2,
      image: require("../assets/student_images/img2.jpeg"),
      email: "2@gmail.com",
    },
    {
      name: "kiran",
      age: 22,
      rollno: 3,
      image: require("../assets/student_images/img3.jpeg"),
      email: "3@gmail.com",
    },
    {
      name: "kumar",
      age: 24,
      rollno: 4,
      image: require("../assets/student_images/img4.jpeg"),
      email: "4@gmail.com",
    },
  ];

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 50,
        backgroundColor: "black",
      }}
    >
      <Text style={{ fontSize: 30, fontStyle: "italic", fontWeight: "bold" }}>
        Students data
      </Text>
      <View style={cardsStyles.main}>
        <FlatList
          horizontal
          data={studentdata}
          renderItem={({ item }) => (
            <View style={cardsStyles.sub1}>
              <View style={cardsStyles.subchild1}>
                <Image
                  source={item.image}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={cardsStyles.subchild2}>
                <View style={cardsStyles.subchild2_2}>
                  <Text>
                    <Text style={cardsStyles.properties}>Name: </Text>
                    <Text style={cardsStyles.values}>{item.name}</Text>
                  </Text>
                  <Text>
                    <Text style={cardsStyles.properties}>Roll No: </Text>
                    <Text style={cardsStyles.values}>{item.rollno}</Text>
                  </Text>
                  <Text>
                    <Text style={cardsStyles.properties}>Age: </Text>
                    <Text style={cardsStyles.values}>{item.age}</Text>
                  </Text>
                  <Text>
                    <Text style={cardsStyles.properties}>College: </Text>
                    <Text style={cardsStyles.values}>AEC</Text>
                  </Text>
                  <Text>
                    <Text style={cardsStyles.properties}>Email: </Text>
                    <Text style={cardsStyles.values}>{item.email}</Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const cardsStyles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    marginTop: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "black",
  },
  sub1: {
    width: 300,
    height: 500,
    position: "relative",
  },
  subchild1: {
    marginTop: 5,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 100,
    position: "absolute",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    overflow: "hidden",
    boxShadow: "0 0 10 1 white ",
    zIndex: 2,
  },
  subchild2: {
    width: 250,
    height: 350,
    position: "absolute",
    top: 50,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: "white",
    boxShadow: "0 0 10 1 white ",
  },
  subchild2_2: {
    width: "100%",
    height: "80%",
    marginTop: 50,
    display: "flex",
    justifyContent: "space-around",
    padding: 20,
  },
  properties: {
    fontSize: 16,
    fontWeight: "bold",
  },
  values: {
    fontSize: 16,
  },
});

export default Dycards;
