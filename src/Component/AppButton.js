/**
 * @format
 * @author Shivam Tripathi
 * @description App Button Component
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import colorCode from '../Utility/colorCode';
import {normalize, vh, vw} from '../Utility/dimension';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
const AppButton = ({
  onPress = () => {},
  backgroundColor,
  borderColor,
  fontColor = colorCode.white,
  buttonTitle,
  marginHorizontal,
}) => {
  return (
    <CustomButton
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor, borderColor, marginHorizontal},
      ]}>
      <CustomText style={[styles.buttonTitle, {color: fontColor}]}>
        {buttonTitle}
      </CustomText>
    </CustomButton>
  );
};
const styles = StyleSheet.create({
  container: {
    height: vh(60),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(10),
    backgroundColor: 'white',
    flex: 1,
  },
  buttonTitle: {
    fontSize: normalize(16),
    fontWeight: '600',
  },
});
export default AppButton;
