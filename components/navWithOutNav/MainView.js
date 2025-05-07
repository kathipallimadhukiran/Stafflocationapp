import { View, ScrollView, Text, Dimensions, StyleSheet } from "react-native";
import Myicons from "react-native-vector-icons/Ionicons";
import Homeicon from "react-native-vector-icons/AntDesign";
import Homeboldicon from "react-native-vector-icons/Entypo";
import Event from "react-native-vector-icons/MaterialIcons";
import User from "react-native-vector-icons/Feather";
import Userblod from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home.js";
import Events from "./Events.js";
import Notifications from "./Notifications.js";
import Profile from "./Profile.js";
import { Button } from "react-native-paper";

const MainView = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Home"); // Using a single state for navigation
  const navigationfun=()=>{
  navigation.navigate("Notifications");
}
 

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      {/* Header
      <View style={styles.header}>
        <Text style={styles.headerText}>S F G C</Text>
        <Myicons name="chatbox-ellipses" size={35} />
      </View> */}

      {/* Content */}
      <View style={styles.content}>
        <ScrollView nestedScrollEnabled={true}>



<Button mode="contained" onPress={navigationfun}>go to notifications</Button>


        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbarContainer}>
        <View style={styles.navbar} onTouchStart={() => setActiveTab("Home")}>
          {activeTab === "Home" ? (
            <Homeboldicon name="home" size={30} />
          ) : (
            <Homeicon name="home" size={30} />
          )}
          <Text>Home</Text>
        </View>

        <View style={styles.navbar} onTouchStart={() => setActiveTab("Events")}>
          {activeTab === "Events" ? (
            <Event name="event-available" size={30} />
          ) : (
            <Event name="event-note" size={30} />
          )}
          <Text>Events</Text>
        </View>

        <View
          style={styles.navbar}
          onTouchStart={() => setActiveTab("Notifications")}
        >
          {activeTab === "Notifications" ? (
            <Myicons name="notifications-sharp" size={30} />
          ) : (
            <Myicons name="notifications-outline" size={30} />
          )}
          <Text>Bell</Text>
        </View>

        <View style={styles.navbar} onTouchStart={() => setActiveTab("Profile")}>
          {activeTab === "Profile" ? (
            <Userblod name="user" size={30} />
          ) : (
            <User name="user" size={30} />
          )}
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 125,
    paddingRight: 20,
  },
  headerText: {
    fontSize: 30,
    color: "white",
    fontWeight: "900",
  },
  content: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  navbarContainer: {
    flex: 1,
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainView;
