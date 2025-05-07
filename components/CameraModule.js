
import React, { useState, useRef } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication";
import * as Sharing from "expo-sharing";
import { useCameraPermissions, CameraView } from "expo-camera";

const CameraModule = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const cameraRef = useRef(null);
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();

  const authenticateUser = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) return alert("No biometric hardware available");

    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) return alert("No fingerprints found");

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to access camera",
    });

    if (result.success) setLoginSuccess(true);
    else alert("Authentication failed");
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const result = await cameraRef.current.takePictureAsync({ quality: 1 });
      setImages([...images, result.uri]);
    }
  };

  const shareImage = async (uri) => {
    if (!uri) return;
    const canShare = await Sharing.isAvailableAsync();
    if (canShare) await Sharing.shareAsync(uri);
    else alert("Sharing not supported");
  };

  const deleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center" ,marginTop:"50%"}}>
      <Button mode="contained" icon="fingerprint" onPress={authenticateUser}>
        Authenticate & Open Camera
      </Button>

      {loginSuccess && (
        <View style={styles.cameraContainer}>
          <CameraView style={styles.camera} facing="back" ref={cameraRef} />
          <Button icon="camera" mode="contained" onPress={takePicture} style={styles.captureButton}>
            Capture
          </Button>
        </View>
      )}

      {images.length > 0 && (
        <View style={styles.imageGrid}>
          {images.map((uri, index) => (
            <View key={index} style={styles.imageContainer}>
              <Image source={{ uri }} style={styles.image} />
              <View style={styles.buttonRow}>
                <Button mode="contained" onPress={() => shareImage(uri)} style={styles.smallButton}>
                  Share
                </Button>
                <Button mode="contained" onPress={() => deleteImage(index)} style={styles.smallButton}>
                  Delete
                </Button>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cameraContainer: { width: "100%", height: 400, marginVertical: 10 ,marginTop:"50%"},
  camera: { flex: 1 },
  captureButton: { marginTop: 10 },
  imageGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginVertical: 10 },
  imageContainer: { margin: 5, alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 10 },
  buttonRow: { flexDirection: "row", gap: 5, marginTop: 5 },
  smallButton: { paddingHorizontal: 5 },
});

export default CameraModule;
