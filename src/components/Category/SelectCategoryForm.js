import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, SelectPicker } from '../common';
import { Colors } from '../../config/styles';

class SelectCategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    console.log(values);
  }
  render() {
    return (
      <View>
        <SelectPicker options={['Bars', 'Restaurants']} />
        <Button
          fontColor="white"
          buttonColor={Colors.brandPrimary}
          onPress={this.submit}>
          Get Swiping
        </Button>
      </View>
    );
  }
}

export default SelectCategoryForm;
