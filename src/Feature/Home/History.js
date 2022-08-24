/**
 * @format
 * @author Shivam Tripathi
 * @description Home Screen History Component
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {memo} from 'react/cjs/react.production.min';
import CustomButton from '../../Component/CustomButton';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {normalize, vh, vw} from '../../Utility/dimension';
import GlobalStyles from '../../Utility/GlobalStyles';
import ImagePath from '../../Utility/ImagePath';
import Transaction from './Transaction';
const History = () => {
  return (
    <View style={styles.bottomSheetCont}>
      <View style={styles.notch} />
      <View style={styles.sheetHeaderCont}>
        <CustomText style={styles.allTnx}>All Transactions</CustomText>
        <View style={[GlobalStyles.rowView, GlobalStyles.alignCenter]}>
          <CustomText style={styles.sortBy}>Sort by:</CustomText>
          <CustomButton
            style={[GlobalStyles.rowView, GlobalStyles.alignCenter]}>
            <CustomText style={styles.recent}>Recent </CustomText>
            <CustomImage
              resizeMode={'contain'}
              source={ImagePath.DOWN_ARROW}
              style={styles.downArrow}
            />
          </CustomButton>
        </View>
      </View>
      <Transaction />
    </View>
  );
};
const styles = StyleSheet.create({
  bottomSheetCont: {
    flex: 1,
    backgroundColor: colorCode.sheetBg,
    marginTop: vh(40),
    borderRadius: vw(40),
  },
  notch: {
    height: vw(7),
    backgroundColor: colorCode.notch,
    width: vw(64),
    alignSelf: 'center',
    marginTop: vh(16),
    borderRadius: vw(10),
  },
  sheetHeaderCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: vh(24),
    marginHorizontal: vw(16),
  },
  allTnx: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: 'white',
  },
  sortBy: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colorCode.notch,
  },
  recent: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colorCode.white,
    marginHorizontal: vw(8),
  },
  downArrow: {
    height: vw(14),
    width: vw(14),
  },
});
export default memo(History);
