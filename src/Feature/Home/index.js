/**
 * @format
 * @author Shivam Tripathi
 * @description Home Screen Component
 */

import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import AppButton from '../../Component/AppButton';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {SCREENS} from '../../Utility/Constant';
import {normalize, vh, vw} from '../../Utility/dimension';
import ImagePath from '../../Utility/ImagePath';
import Header from './Header';
import History from './History';

const Home = ({navigation}) => {
  const onPressRequestMoney = () => {
    navigation.navigate(SCREENS.REQUEST_MONEY);
  };
  const onPressSendMoney = () => {
    navigation.navigate(SCREENS.SEND_MONEY);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header />
      <CustomText style={styles.balanceTitle}>
        Your current balance is
      </CustomText>
      <View style={styles.balanceCont}>
        <CustomImage source={ImagePath.N_SYM} style={styles.nSym} />
        <CustomText style={styles.balance}> 200,000</CustomText>
      </View>
      <View style={styles.buttonCont}>
        <AppButton
          onPress={onPressRequestMoney}
          backgroundColor={colorCode.primary}
          marginHorizontal={vw(7.5)}
          borderColor={colorCode.border}
          fontColor={colorCode.border}
          buttonTitle={'Request money'}
        />
        <AppButton
          onPress={onPressSendMoney}
          backgroundColor={colorCode.primary}
          marginHorizontal={vw(7.5)}
          borderColor={colorCode.border}
          fontColor={colorCode.border}
          buttonTitle={'Send money'}
        />
      </View>
      <History />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.primary,
  },
  balanceTitle: {
    fontSize: normalize(12),
    fontWeight: '400',
    marginHorizontal: vw(16),
    color: colorCode.white,
    marginTop: vh(48),
  },
  balanceCont: {
    marginHorizontal: vw(16),
    marginTop: vh(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  nSym: {
    height: normalize(35),
    width: normalize(35),
  },
  balance: {
    fontSize: normalize(40),
    fontWeight: '700',
    color: colorCode.white,
  },
  buttonCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vw(8.5),
    marginTop: vh(32),
  },
});
export default Home;
