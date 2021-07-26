import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default MapScreen => {
    return (
    <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
            latitude: 37.3,
            longitude: -122,
            latitudeDelta: 0.09,
            longitudeDelta: 0.036
        }}>    
    </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})