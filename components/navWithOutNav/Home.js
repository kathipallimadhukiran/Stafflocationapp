import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { Button } from "react-native-paper";
import Notification from "react-native-vector-icons/Ionicons";
import headerimg from "../../assets/thubimage.jpg";
import Showicon from "react-native-vector-icons/MaterialIcons";
import { useState, useEffect, useRef } from "react";
import Caticons from "react-native-vector-icons/Entypo";
import slider1 from "../../assets/slider_images/slider1.jpg";
import slider2 from "../../assets/slider_images/slider2.jpg";
import slider3 from "../../assets/slider_images/slider3.jpg";
import slider4 from "../../assets/slider_images/slider4.jpg";
import slider5 from "../../assets/slider_images/slider5.jpg";
import slider6 from "../../assets/slider_images/slider6.jpg";

export default function Home() {
  const [showcat, setshowcat] = useState(false);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = Dimensions.get("screen");

  const category = [
    { iconname: "paypal", title: "Programs" },
    { iconname: "bookmarks", title: "Courses" },
    { iconname: "500px", title: "Drive Ready" },
    { iconname: "graduation-cap", title: "Certification" },
    { iconname: "medal", title: "Internships" },
    { iconname: "mouse", title: "Placements" },
    { iconname: "network", title: "Gen AI" },
    { iconname: "users", title: "Team" },
    { iconname: "github", title: "Owlcoder" },
    { iconname: "sina-weibo", title: "Partners" },
    { iconname: "new-message", title: "Registrations" },
    { iconname: "typing", title: "FAQs" },
    { iconname: "mail", title: "Contact" },
    { iconname: "info", title: "About" },
    { iconname: "emoji-flirt", title: "Blog" },
  ];

  const name = [
    { name: slider1 },
    { name: slider2 },
    { name: slider3 },
    { name: slider4 },
    { name: slider5 },
    { name: slider6 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1 < name.length ? prevIndex + 1 : 0;
        carouselRef.current?.scrollToOffset({
          offset: nextIndex * width,
          animated: true,
        });
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [width]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>Hello, Kathipalli Madhu Kiran</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={headerimg} style={styles.headerImage} />
        </View>
        <View style={styles.categoryHeader}>
          <Text style={{ color: "black", fontSize: 20 }}>Category</Text>
          <Button onPress={() => setshowcat(!showcat)} mode="text">
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Showicon
                name={showcat ? "expand-more" : "expand-less"}
                size={20}
                color={"black"}
              />
              <Text>{showcat ? `More` : `Less`}</Text>
            </View>
          </Button>
        </View>

        {/* Category Section */}
        <View style={styles.category}>
          <FlatList
            data={showcat ? category.slice(0, 8) : category}
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.block}>
                <Caticons name={item.iconname} color={"white"} size={30} />
                <Text style={{ fontSize: 11, fontWeight: "500" }}>
                  {item.title}
                </Text>
              </View>
            )}
            scrollEnabled={false} // Prevent scrolling inside ScrollView
          />
        </View>

        {/* Image Slider Section */}
        <View style={styles.imageSliderContainer}>
          <FlatList
            ref={carouselRef}
            data={name}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            onScroll={(event) => {
              const value = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setCurrentIndex(value);
            }}
            renderItem={({ item }) => (
              <View style={styles.sliderItem}>
                <Image source={item.name} style={styles.sliderImage} />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    padding: 5,
  },
  imageContainer: {
    width: "97%",
    height: 170,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  categoryHeader: {
    width: "95%",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  category: {
    width: "97%",
    padding: 13,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  block: {
    margin: 5,
    width: 77,
    height: 77,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageSliderContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  sliderItem: {
    width: Dimensions.get("screen").width,
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

