import { View, Text, Dimensions, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Eventimg from "../../assets/slider_images/Goldenday.jpg";

const Events = () => {
  const { width } = Dimensions.get("screen");

  // State to store data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Mimicking data fetching or any side effects
    const fetchData = async () => {
      // Here you can fetch data from an API or perform other side effects
      const eventData = [
        {
          Image: Eventimg,
          Title: "Golden Day-2025",
        },
      ];
      setData(eventData);
    };

    fetchData();
  }, []); // Empty dependency array means this will run once on mount

  return (
    <View
      style={{
        width: width,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <FlatList
        data={data}
        scrollEnabled={false} // Disable scrolling
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 20,
          width: "95%",
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={{ width: "100%", height: 350, borderRadius: 10 }}>
              <Image
                source={item.Image}
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                width: "100%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "400",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {item.Title}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Events;
