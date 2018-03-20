import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import NativeTachyons from "react-native-style-tachyons";

import { Colors, BorderRadius } from '../../config/styles';

export default NativeTachyons.wrap(class IconInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputInFocus: false
    };
  }
  render() {
    const {
      input,
      fontColor,
      borderRadius,
      borderColor,
      ...inputProps
    } = this.props;
    return (
      <View cls="flx-row aic mb3">
        <View
          style={{
            borderRightColor: borderColor ? Colors[borderColor] : Colors.lightGrey,
            borderRightWidth: 1,
            height: 33,
            display: 'flex',
            top: 7
          }}
          cls="absolute" >
          <Feather
            name={inputProps.icon}
            size={inputProps.size || 20}
            color={!this.state.inputInFocus ? Colors.brandPrimary : 'red'}
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 9
            }} />

        </View>
        <TextInput
          keyboardType={inputProps.keyboardType || 'default'}
          underlineColorAndroid="rgba(0,0,0,0)"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={input.onChange}
          onFocus={() => {
            this.setState({ inputInFocus: true });
          }}
          onBlur={() => this.setState({ inputInFocus: false })}
          value={input.value}
          secureTextEntry={input.name === 'password'}
          placeholder={inputProps.placeholder}
          style={{
            height: 45,
            color: fontColor ? Colors[fontColor] : Colors.primaryGrey,
            borderRadius: borderRadius ? BorderRadius[borderRadius].all : BorderRadius['medium'].all,
            borderColor: borderColor ? Colors[borderColor] : Colors.lightGrey,
            paddingLeft: 50,
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
