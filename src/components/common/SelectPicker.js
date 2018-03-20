import React from 'react';
import { View } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const SelectPicker = (props) => {
  let index = 0;
  const data = props.options.map(option => ({ key: index++, label: option }));

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', marginBottom: 20 }}>
      <ModalSelector
        data={data}
        initValue="Select Category"
        onChange={(option) => { console.log(option); }} />
    </View>
  );
};

export default SelectPicker;
