import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import NativeTachyons from "react-native-style-tachyons";

import { Colors, BorderRadius } from '../../config/styles';

const Button = NativeTachyons.wrap((props) => {
  const {
    fontColor,
    buttonColor,
    borderRadius,
    onPress,
    children,
    fontSize,
    fontWeight,
    style
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      >
      <Text style={{
          color: fontColor || Colors.white,
          borderRadius: borderRadius ? BorderRadius[borderRadius] : BorderRadius["medium"].all,
          backgroundColor: buttonColor || Colors.brandPrimary,
          overflow: 'hidden',
          fontWeight,
          fontSize
        }}
        cls="pa3 tc">
        {children}
      </Text>
    </TouchableOpacity>
  );
});

export default Button;
