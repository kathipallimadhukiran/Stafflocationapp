import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getSessionLocations } from '../services/location';

const StudentView = ({ sessionId }) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getSessionLocations(sessionId);
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const interval = setInterval(fetchLocations, 5000);
    fetchLocations();
    
    return () => clearInterval(interval);
  }, [sessionId]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading staff location...</Text>
      </View>
    );
  }

  if (locations.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No location data available</Text>
      </View>
    );
  }

  const latestLocation = locations[0];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latestLocation.location.latitude,
          longitude: latestLocation.location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latestLocation.location.latitude,
            longitude: latestLocation.location.longitude,
          }}
          title="Staff Location"
          description={latestLocation.location.address}
        />
      </MapView>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Last updated: {new Date(latestLocation.timestamp).toLocaleTimeString()}
        </Text>
        <Text style={styles.infoText}>
          Address: {latestLocation.location.address}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    padding: 15,
    backgroundColor: '#fff',
  },
  infoText: {
    marginBottom: 5,
  },
});

export default StudentView;