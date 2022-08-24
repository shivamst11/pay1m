/**
 * @format
 * @author Shivam Tripathi
 * @description Custom Text Component
 */

import React from 'react';
import {Text} from 'react-native';

function CustomText({...props}) {
  return (
    <Text {...props} style={[props.style, {fontFamily: 'Inter-Regular'}]}>
      {props.children}
    </Text>
  );
}

export default CustomText;
