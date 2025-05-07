import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import CameraModule from "./components/CameraModule";
import LocationModule from "./components/LocationModule";
import StudentView from "./src/components/StudentView";
import StaffTracker from "./src/components/StaffTracker";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" backgroundColor="white" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CameraModule /> 
        <LocationModule />
        {/* <StaffTracker/> */}
         {/* <StudentView/>  */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  scrollContainer: { alignItems: "center", justifyContent: "center" },
});
