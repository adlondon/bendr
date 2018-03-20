// Import libraries for making a Component
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// Create a functional component
const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

// Define the component's styling
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
  }
};

// Make component available to other parts of the application
export default Spinner;
