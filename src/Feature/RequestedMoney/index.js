/**
 * @format
 * @author Shivam Tripathi
 * @description Request Money Component
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AppButton from '../../Component/AppButton';
import CustomHeader from '../../Component/CustomHeader';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {normalize, vh, vw} from '../../Utility/dimension';
import GlobalStyles from '../../Utility/GlobalStyles';
import ImagePath from '../../Utility/ImagePath';
const RequestedMoney = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomImage
        resizeMode={'contain'}
        source={ImagePath.REQUEST_BG}
        style={styles.headerBgImg}
      />
      <CustomHeader title={'New Request'} navigation={navigation} />
      <View style={GlobalStyles.fullFlex}>
        <View style={styles.outerRing}>
          <View style={styles.innerRing}>
            <CustomImage
              source={ImagePath.PROFILE1}
              style={styles.profileImg}
            />
          </View>
        </View>
        <CustomText style={styles.name}>Adeleke Ramon</CustomText>
        <CustomText style={styles.requestFor}>is requesting for:</CustomText>
        <View style={styles.balanceCont}>
          <CustomImage source={ImagePath.N_SYM} style={styles.nSym} />
          <CustomText style={styles.balance}>200,000</CustomText>
        </View>
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.btnCont}>
          <AppButton
            buttonTitle={'Send money'}
            fontColor={colorCode.white}
            borderColor={colorCode.pink}
            backgroundColor={colorCode.pink}
          />
        </View>
        <View style={styles.btnCont}>
          <AppButton
            buttonTitle={'Don’t send'}
            fontColor={colorCode.border}
            borderColor={colorCode.border}
            backgroundColor={colorCode.primary}
          />
        </View>
      </View>
      <SafeAreaView />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.primary,
  },
  headerBgImg: {
    width: '100%',
    height: vh(412),
    position: 'absolute',
    top: 0,
    zIndex: 0,
  },
  profileImg: {
    height: vw(100),
    width: vw(100),
    borderRadius: vw(50),
  },
  outerRing: {
    height: vw(200),
    width: vw(200),
    borderRadius: vw(100),
    backgroundColor: colorCode.sheetBg,
    marginTop: vh(80),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  innerRing: {
    height: vw(150),
    width: vw(150),
    borderRadius: vw(75),
    backgroundColor: colorCode.midnightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    fontSize: normalize(24),
    fontWeight: '600',
    color: colorCode.shinKanSenWhite,
    alignSelf: 'center',
    marginTop: vh(24),
  },
  requestFor: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colorCode.shinKanSenWhite,
    alignSelf: 'center',
    marginTop: vh(24),
  },
  btnCont: {
    height: vh(60),
    width: vw(173),
    alignSelf: 'center',
    marginTop: vh(24),
  },
  bottomCont: {marginBottom: vh(53)},
  balance: {
    fontSize: normalize(40),
    fontWeight: '700',
    color: colorCode.white,
  },
  balanceCont: {
    marginHorizontal: vw(16),
    marginTop: vh(16),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  nSym: {
    height: normalize(35),
    width: normalize(35),
    marginHorizontal: vw(10),
  },
});
export default RequestedMoney;
