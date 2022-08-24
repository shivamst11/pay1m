/**
 * @format
 * @author Shivam Tripathi
 * @description Circle Ring Component
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {vw} from '../Utility/dimension';
const RingBg = props => {
  return (
    <View
      style={[
        {
          height: vw(props.diameter),
          width: vw(props.diameter),
          borderRadius: vw(props.diameter / 2),
          borderColor: props.borderColor,
        },
        styles.ring,
      ]}>
      {props.children}
    </View>
  );
};
export default RingBg;

const styles = StyleSheet.create({
  ring: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
