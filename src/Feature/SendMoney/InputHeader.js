/**
 * @format
 * @author Shivam Tripathi
 * @description SendMoney Header component
 */

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import CustomButton from '../../Component/CustomButton';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {normalize, vh, vw} from '../../Utility/dimension';
import ImagePath from '../../Utility/ImagePath';
const InputHeader = ({onChangeText}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <SafeAreaView />
      <View style={styles.container}>
        <CustomButton
          onPress={() => navigation.goBack()}
          style={styles.backBtn}>
          <CustomImage
            resizeMode={'contain'}
            style={styles.backImg}
            source={ImagePath.BACK_ARROW}
          />
          <CustomText style={styles.backTitle}>Back</CustomText>
        </CustomButton>
        <TextInput
          placeholder="Search "
          style={styles.inputStyle}
          placeholderTextColor={colorCode.shinKanSenWhite}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topContainer: {
    marginVertical: vh(9),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: vh(48),
  },
  backBtn: {
    width: vw(60),
    height: vh(48),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vh(10),
  },
  backTitle: {
    fontSize: normalize(14),
    color: colorCode.shinKanSenWhite,
    fontWeight: '400',
    marginLeft: vw(4),
  },
  backImg: {
    height: vw(24),
    width: vw(24),
  },
  inputStyle: {
    backgroundColor: colorCode.sheetBg,
    fontSize: normalize(18),
    flex: 1,
    padding: vw(8),
    borderRadius: vw(8),
    borderColor: colorCode.inputBg,
    borderWidth: 1,
    color: colorCode.shinKanSenWhite,
    marginHorizontal: vw(16),
  },
});
export default InputHeader;
