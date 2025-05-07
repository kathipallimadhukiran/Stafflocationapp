import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert,TouchableOpacity } from 'react-native';
import userimg from "../../assets/student_images/22A91A04L9.png"
const Profile = () => {
    const Username="Kathipalli Madhu Kiran";

  return (
      <View style={{display:"flex",alignItems:"center",justifyContent:"center" ,height:700}}>
            <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={userimg} // Replace with your profile image URL
        style={styles.avatar}
      />

      {/* Profile Details */}
      <Text style={styles.name}>Kathipalli Madhu Kiran</Text>
      <Text style={styles.detail}>22A91A04L9</Text>
      <Text style={styles.detail}>Age: 20</Text>
      <Text style={styles.detail}>Location: Rajahmundry</Text>
      <Text style={styles.detail}>Technology: React Native, JavaScript</Text>

      {/* Logout Button */}
      
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          Alert.alert("Greeting", `Hi, I am ${Username}!`);
        }}
      >
        <Text style={styles.logoutButtonText}>Say Hello</Text>
      </TouchableOpacity>
    </View></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular shape
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'green', // Red for the logout button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
