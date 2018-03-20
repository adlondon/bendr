import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

import { Card } from '../components/common';
import FullScreenContainer from '../components/common/FullScreenContainer';
import SelectCategoryForm from '../components/Category/SelectCategoryForm';

class SelectCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return (
      <FullScreenContainer backgroundColor="brandPrimary">
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image style={{
              height: 112,
              alignSelf: 'center'
          }}
            resizeMode="contain"
            source={require('../assets/bender-white.png')} />
          <Text style={{
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
              marginTop: 30,
              marginBottom: 40
          }}>
            Doot Doot, here's your toot...
          </Text>
          <Card>
            <SelectCategoryForm />
          </Card>
        </View>
      </FullScreenContainer>
    );
  }
}

export default SelectCategory;
