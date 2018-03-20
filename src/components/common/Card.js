import React from 'react';
import { View } from 'react-native';
import NativeTachyons from "react-native-style-tachyons";

import { Colors, BorderRadius } from '../../config/styles';

const Card = NativeTachyons.wrap((props) => {
  const {
    borderRadius,
    children,
    noShadow
  } = props;
  return (
    <View
      style={{
        borderRadius: borderRadius ? BorderRadius[borderRadius] : BorderRadius["medium"].all,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 10 },
        shadowColor: noShadow ? 'transparent' : 'black',
        borderColor: noShadow ? Colors.lightGrey : 'transparent',
        borderWidth: 1,
        shadowOpacity: 0.5,
        elevation: 2,
        zIndex: 2,
      }}
      cls="pa3">
      {children}
    </View>
  );
});

export default Card;
