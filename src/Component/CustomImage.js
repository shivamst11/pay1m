/**
 * @format
 * @author Shivam Tripathi
 * @description Custom Image Component
 */

import React from 'react';
import FastImage from 'react-native-fast-image';

const CustomImage = ({...props}) => {
  return (
    <FastImage
      {...props}
      resizeMode={FastImage.resizeMode[props.resizeMode]}
      style={props.style}>
      {props.children}
    </FastImage>
  );
};

export default CustomImage;
