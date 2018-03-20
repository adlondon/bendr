import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import NativeTachyons from "react-native-style-tachyons";
import { Colors, BorderRadius } from '../../config/styles';

export default NativeTachyons.wrap(class Input extends Component {
  render() {
    const {
      input,
      fontColor,
      borderRadius,
      borderColor,
      minHeight,
      multiline,
      numberOfLines,
      height,
      textAlign,
      ...inputProps
    } = this.props;

    return (
      <View style={{
        marginBottom: 10,
        height: height || 60
      }}>
        <Text
          style={{
            marginBottom: 5
          }}
        >{inputProps.label}
        </Text>
        <TextInput
          keyboardType={inputProps.keyboardType || 'default'}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={input.onChange}
          onFocus={() => this.setState({ inputInFocus: true })}
          onBlur={() => this.setState({ inputInFocus: false })}
          value={input.value}
          placeholder={inputProps.placeholder}
          multiline
          numberOfLines={numberOfLines || 1}
          style={{
            color: fontColor ? Colors[fontColor] : Colors.primaryGrey,
            borderRadius: borderRadius ? BorderRadius[borderRadius].all : BorderRadius['medium'].all,
            borderColor: borderColor ? Colors[borderColor] : Colors.lightGrey,
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: 10
          }}
          cls="ba f5 flx-i"
        />
      </View>
    );
  }
});
