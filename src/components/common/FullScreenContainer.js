import React from 'react';
import { ScrollView } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { Colors } from '../../config/styles';

const FullScreenContainer = NativeTachyons.wrap(props => (
  <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: Colors[props.backgroundColor] || 'white' }} cls="pa3 flx-i">
    {props.children}
  </ScrollView>
));

export default FullScreenContainer;
