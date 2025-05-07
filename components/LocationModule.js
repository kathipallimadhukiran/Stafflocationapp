import React, { useState } from "react";
import { View, Text, StyleSheet, Linking, Alert } from "react-native";
import { Button } from "react-native-paper";
import * as Location from "expo-location";
import * as FileSystem from "expo-file-system";

const LocationModule = () => {
  const [files, setFiles] = useState([]);
  const [permissionStatus, setPermissionStatus] = useState(null);

  const handleOpenSettings = async () => {
    try {
      // Open the device settings for your app
      await Linking.openSettings();
    } catch (error) {
      console.error("Failed to open settings:", error);
      Alert.alert(
        "Error",
        "Could not open settings. Please manually enable location permissions in your device settings."
      );
    }
  };

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    setPermissionStatus(status);
    
    if (status !== "granted") {
      Alert.alert(
        "Location Permission Required",
        "This app needs location permissions to function properly. Would you like to open settings to enable it?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { 
            text: "Open Settings", 
            onPress: handleOpenSettings 
          }
        ]
      );
      return;
    }

    try {
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      });
      console.log("User Location:", location);
      Alert.alert(
        "Location Retrieved",
        `Latitude: ${location.coords.latitude}\nLongitude: ${location.coords.longitude}`
      );
    } catch (error) {
      console.error("Location Error:", error);
      Alert.alert(
        "Error",
        "Failed to get location. Please try again."
      );
    }
  };

  const listCacheFiles = async () => {
    try {
      const fileList = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory);
      setFiles(fileList);
    } catch (error) {
      console.error("Error fetching cache files:", error);
      Alert.alert(
        "Error",
        "Could not access cache files."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Button 
        mode="contained" 
        onPress={getUserLocation}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Get Current Location
      </Button>
      
     
      {permissionStatus === "denied" && (
        <Text style={styles.permissionWarning}>
          Location permission denied. Please enable it in settings.
        </Text>
      )}
      
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    marginTop:"100%",
    width:"100%",
    height:"100%",
    padding: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  permissionWarning: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
  header: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  filesContainer: {
    marginTop: 20,
    width: '100%',
  },
  fileItem: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default LocationModule;