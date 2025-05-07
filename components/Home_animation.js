import React, { useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Button } from "react-native-paper";

const Home = () => {
  // Animated values for position and color
  const Left = useRef(new Animated.Value(0)).current;
  const Colorchange = useRef(new Animated.Value(0)).current;

  // Function to animate position
  const fun = () => {
    Animated.timing(Left, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  // Function to animate color
  const ColorChangeing = () => {
    Animated.timing(Colorchange, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false, // Must be false for color animations
    }).start();

  };

  // Interpolating color values
  const Mapping = Colorchange.interpolate({
    inputRange: [0, 100],
    outputRange: ["red", "green"],
  });

  // Combined function for both animations
  const moveAndChangeColor = () => {
    fun();
    ColorChangeing();
  };

  return (
    <View style={styles.container}>
      {/* Animated View */}
      <Animated.View
        style={[styles.anview, { backgroundColor: Mapping, left: Left }]}
      />
      <Button mode="contained" onPress={moveAndChangeColor}>
        Move and Change Color
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  anview: {
    height: 200,
    width: 200,
    position: "relative", // Positioning for left animation
    backgroundColor:"red"
  },
});

export default Home;
