import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { Searchbar, Button, Checkbox, Card } from "react-native-paper";

const Home = () => {
  const data = [
    { image: require("../assets/slider_images/slider1.jpg") },
    { image: require("../assets/slider_images/slider2.jpg") },
    { image: require("../assets/slider_images/slider3.jpg") },
    { image: require("../assets/slider_images/slider4.jpg") },
  ];
  const categoriesdata = [
    {
      cat: "Bikes",
    },
    {
      cat: "Cars",
    },
    {
      cat: "Ac's",
    },
    {
      cat: "Motors",
    },
    {
      cat: "Tv's",
    },
    {
      cat: "Friges",
    },
  ];

  const { width } = Dimensions.get("window");
  const flatListRef = useRef(null);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchloading, setsearchloading] = useState(false);
  const [displaycard, setdisplaycard] = useState(false);
  const [bntname , setbntname] = useState("Know about me");

  return (
    <View style={homestyles.container}>
      <ScrollView>
        <Searchbar
          placeholder="Search Student Names"
          onChangeText={(text) => {
            setSearchQuery(text); // Update the search query state
            setsearchloading(true);
            console.log(searchQuery); // Set loading to true
          }}
          value={searchQuery} // Bind the input value to searchQuery
          icon={"home"}
          loading={searchloading}
        />
        <Button
          icon="account-convert"
          mode="contained"
          onPress={() => {
            setdisplaycard(!displaycard);
          }}
        >
       {displaycard==false ?` Know about me `:`Go back`}
        </Button>
        {displaycard && (
          <Card style={{borderWidth:1,borderColor:"black",backgroundColor:"lightgray",padding:10,margin:10}} 
      >
          
            <Card.Content style={{margin:10 ,}}>
              <Text variant="titleLarge"> Developer Basava Madhu</Text>
              <Text variant="bodyMedium">
               
                I am a very best person in the world
              </Text>
            </Card.Content>
            <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
        )}
        <View>
          {" "}
          <FlatList
            ref={flatListRef}
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={({ item }) => (
              <View style={[homestyles.slide, { width }]}>
                <Image source={item.image} style={homestyles.image} />
              </View>
            )}
          />
        </View>

        {/* slider end  */}

        {/*    */}

        {/*    */}

        {/*    */}

        {/*    */}

        {/*    */}

        {/*    */}

        {/*    */}

        {/* categories  */}
        <View style={homestyles.categories}>
          <FlatList
            data={categoriesdata}
            horizontal={false}
            numColumns={3}
            renderItem={({ item }) => (
              <View style={homestyles.categoriesbx}>
                <Text style={homestyles.categoriesText}>{item.cat}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const homestyles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f0e8",
    justifyContent: "start",
    alignItems: "center",
    margin: 0,
  },
  slide: {
    marginTop: 10,

    justifyContent: "start",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },

  categories: {
    marginTop: 20,
    marginBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 50,
  },
  categoriesbx: {
    margin: 10,
    padding: 10,
    width: 115,
    height: 90,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  categoriesText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    display: "none",
  },
});

export default Home;
