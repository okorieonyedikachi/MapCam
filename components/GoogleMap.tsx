import * as Location from 'expo-location';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Camera, PROVIDER_GOOGLE } from 'react-native-maps';

const GoogleMap = () => {
  const [position, setPostion] = useState<Location.LocationObjectCoords>();
  const [errorMessage, setErrorMessage] = useState('');
  const cameraReference = useRef<MapView | null>(null);

  useEffect(() => {
    const requirePermission = async () => {
      const foregreound = await Location.requestForegroundPermissionsAsync();
      if (foregreound.granted) {
        userLocation();
      }
    };
    requirePermission();
  }, []);

  const userLocation = async () => {
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      setErrorMessage('Permission denied');
    }
    const location = await Location.getCurrentPositionAsync();
    setPostion(location?.coords);
    const camera: Camera = {
      center: { latitude: location?.coords.latitude!, longitude: location?.coords.longitude! },
      zoom: 20,
      heading: 0,
      pitch: 0,
      altitude: 0,
    };
    cameraReference.current?.animateCamera(camera, { duration: 1500 });
    console.log(location);
  };

  return { errorMessage, position, cameraReference };
};

export default GoogleMap;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
