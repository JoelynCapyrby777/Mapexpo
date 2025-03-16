import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importamos iconos de Material Icons

const App = () => {
  const [mapRegion, setMapRegion] = useState({
    
    latitude: 21.049797041668725, 
    longitude: -86.84694526164611,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Ut">
          {/* Ícono de ubicación personalizado */}
          <View style={styles.markerIcon}>
            <Icon name="place" size={40} color="red" />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
