import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import * as Location from 'expo-location';
import { startTrackingSession, sendLocationUpdate } from '../services/location';

const StaffTracker = ({ staffId, studentId }) => {
  const [isTracking, setIsTracking] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    let watchId;
    
    if (isTracking && sessionId) {
      watchId = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 10, // Update every 10 meters
          timeInterval: 5000 // Update every 5 seconds
        },
        (location) => {
          setCurrentLocation(location);
          sendLocationUpdate(sessionId, staffId, studentId, location);
        }
      );
    }
    
    return () => {
      if (watchId) watchId.remove();
    };
  }, [isTracking, sessionId]);

  const startTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Please enable location permissions in settings',
        [{ text: 'OK', onPress: () => Linking.openSettings() }]
      );
      return;
    }
    
    try {
      const newSessionId = await startTrackingSession(staffId, studentId);
      setSessionId(newSessionId);
      setIsTracking(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to start tracking session');
    }
  };

  const stopTracking = () => {
    setIsTracking(false);
    setSessionId(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Tracking for Student: {studentId}
      </Text>
      
      {currentLocation && (
        <View style={styles.locationInfo}>
          <Text>Lat: {currentLocation.coords.latitude.toFixed(6)}</Text>
          <Text>Lng: {currentLocation.coords.longitude.toFixed(6)}</Text>
        </View>
      )}
      
      {!isTracking ? (
        <Button 
          mode="contained" 
          onPress={startTracking}
          style={styles.button}
        >
          Start Tracking
        </Button>
      ) : (
        <Button 
          mode="contained" 
          onPress={stopTracking}
          style={[styles.button, styles.stopButton]}
        >
          Stop Tracking
        </Button>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  locationInfo: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  button: {
    paddingVertical: 8,
  },
  stopButton: {
    backgroundColor: '#ff4444',
  },
});

export default StaffTracker;