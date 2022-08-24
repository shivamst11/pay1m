/**
 * @format
 * @author Shivam Tripathi
 * @description Home Screen Header Component
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../../Component/CustomButton';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {normalize, vh, vw} from '../../Utility/dimension';
import GlobalStyles from '../../Utility/GlobalStyles';
import ImagePath from '../../Utility/ImagePath';

const Header = () => {
  return (
    <View style={styles.headerCont}>
      <View style={[GlobalStyles.rowView, GlobalStyles.alignCenter]}>
        <CustomButton>
          <CustomImage
            source={ImagePath.HAMBURGER}
            style={styles.hamburgerIcon}
          />
        </CustomButton>
        <CustomText style={styles.headerName}>Hello Sandra,</CustomText>
      </View>
      <CustomButton style={styles.addMoneyBtn}>
        <CustomText style={styles.addMoneyTitle}>Add money</CustomText>
      </CustomButton>
    </View>
  );
};
const styles = StyleSheet.create({
  headerCont: {
    flexDirection: 'row',
    marginTop: vh(24),
    marginHorizontal: vw(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburgerIcon: {
    height: vw(48),
    width: vw(48),
    borderRadius: vw(24),
  },
  headerName: {
    fontSize: normalize(20),
    fontWeight: '600',
    marginLeft: vw(16),
    color: colorCode.white,
  },
  addMoneyBtn: {
    height: vh(32),
    width: vw(90),
    borderRadius: vw(8),
    backgroundColor: colorCode.buttonBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addMoneyTitle: {
    fontSize: normalize(14),
    fontWeight: '600',
    color: colorCode.buttonTitle,
  },
});
export default Header;
