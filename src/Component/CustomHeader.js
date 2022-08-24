/**
 * @format
 * @author Shivam Tripathi
 * @description Custom Header Component
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import colorCode from '../Utility/colorCode';
import {normalize, vh, vw} from '../Utility/dimension';
import ImagePath from '../Utility/ImagePath';
import CustomButton from './CustomButton';
import CustomImage from './CustomImage';
import CustomText from './CustomText';

const CustomHeader = ({navigation, rightComponent, title, onBack = false}) => {
  return (
    <View>
      <SafeAreaView />
      <View style={styles.container}>
        <CustomButton
          onPress={() => (onBack ? onBack() : navigation.goBack())}
          style={styles.backBtn}>
          <CustomImage
            resizeMode={'contain'}
            style={styles.backImg}
            source={ImagePath.BACK_ARROW}
          />
          <CustomText style={styles.backTitle}>Back</CustomText>
        </CustomButton>
        <CustomText style={styles.headerTitle}>{title}</CustomText>
        {rightComponent ? rightComponent : <View style={styles.backBtn} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: vw(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh(24),
    height: vh(28),
  },
  backBtn: {
    width: vw(60),
    height: vh(28),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {
    height: vw(24),
    width: vw(24),
  },
  headerTitle: {
    fontSize: normalize(18),
    color: colorCode.shinKanSenWhite,
    fontWeight: '600',
  },
  backTitle: {
    fontSize: normalize(14),
    color: colorCode.shinKanSenWhite,
    fontWeight: '400',
    marginLeft: vw(4),
  },
});

export default CustomHeader;
