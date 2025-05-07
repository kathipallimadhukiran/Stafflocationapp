import axios from 'axios';

const API_BASE_URL = 'http://your-server-ip:5000/api';

export const startTrackingSession = async (staffId, studentId) => {
  const response = await axios.post(`${API_BASE_URL}/sessions/start`, {
    staffId,
    studentId
  });
  return response.data.sessionId;
};

export const sendLocationUpdate = async (sessionId, staffId, studentId, location) => {
  const { latitude, longitude } = location.coords;
  
  // Get address from coordinates (using Google Maps API or similar)
  const address = await getAddressFromCoords(latitude, longitude);
  
  await axios.post(`${API_BASE_URL}/locations`, {
    sessionId,
    staffId,
    studentId,
    latitude,
    longitude,
    address
  });
};

const getAddressFromCoords = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_GOOGLE_MAPS_API_KEY`
    );
    return response.data.results[0]?.formatted_address || 'Address not available';
  } catch (error) {
    console.error('Error getting address:', error);
    return 'Address not available';
  }
};

export const getSessionLocations = async (sessionId) => {
  const response = await axios.get(`${API_BASE_URL}/locations/${sessionId}`);
  return response.data;
};