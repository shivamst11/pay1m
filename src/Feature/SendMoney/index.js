/**
 * @format
 * @author Shivam Tripathi
 * @description SendMoney component
 */

import React, {useState, useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import HideKeyboard from '../../Component/HideKeyboard';
import RingBg from '../../Component/RingBg';
import {transactionHistory} from '../../dummyData/dummyData';
import colorCode from '../../Utility/colorCode';
import {vh, vw, screenWidth, normalize} from '../../Utility/dimension';
import InputHeader from './InputHeader';
import Profile from './Profile';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppButton from '../../Component/AppButton';
import withSearch from '../../Hoc/withSearch';

const profileLocation = [
  {top: vw(-63), left: null},
  {top: vw(223), left: null},
  {top: vw(145), left: vw(15)},
  {top: vw(13), left: vw(152)},
  {top: vw(0), left: vw(-38)},
  {top: vw(180), left: vw(180)},
];

const SendMoney = props => {
  const [selectedUser, setSelectedUser] = useState({});
  const sheetRef = useRef();
  const {onChangeText, list} = props;

  const onClickProfile = item => {
    sheetRef.current.open();
    setSelectedUser(item);
  };

  const onChangeFilter = text => {
    onChangeText(text);
    setSelectedUser({});
  };
  return (
    <HideKeyboard>
      <View style={styles.container}>
        <InputHeader onChangeText={text => onChangeFilter(text)} />
        <RingBg diameter={screenWidth} borderColor={colorCode.ring}>
          <RingBg diameter={screenWidth - vw(90)} borderColor={colorCode.ring}>
            <RingBg
              diameter={screenWidth - vw(180)}
              borderColor={colorCode.ring}>
              {list.slice(0, 6).map((item, index) => (
                <Profile
                  key={item.id}
                  item={item}
                  top={profileLocation[index].top}
                  left={profileLocation[index].left}
                  name={item.name}
                  onClickProfile={onClickProfile}
                  selectedUser={selectedUser}
                />
              ))}
            </RingBg>
          </RingBg>
        </RingBg>
        <RBSheet
          ref={ref => {
            sheetRef.current = ref;
          }}
          height={vh(290)}
          openDuration={250}
          customStyles={{
            container: styles.bottomSheetCont,
          }}>
          <View style={styles.notch} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <CustomImage
              source={selectedUser?.profileImg}
              style={styles.selectedProfileImg}
            />
            <CustomText style={styles.selectedProfileName}>
              {selectedUser.name}
            </CustomText>
            <CustomText style={styles.selectedProfileNumber}>
              {selectedUser.number}
            </CustomText>
            <View style={styles.btnCont}>
              <AppButton
                buttonTitle={'Send money'}
                fontColor={colorCode.white}
                borderColor={colorCode.pink}
                backgroundColor={colorCode.pink}
              />
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    </HideKeyboard>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.primary,
  },
  bottomSheetCont: {
    backgroundColor: colorCode.sheetBg,
    borderTopRightRadius: vw(40),
    borderTopLeftRadius: vw(40),
  },
  notch: {
    height: vw(7),
    backgroundColor: colorCode.notch,
    width: vw(64),
    alignSelf: 'center',
    marginTop: vh(16),
    borderRadius: vw(10),
  },
  selectedProfileImg: {
    height: vw(72),
    width: vw(72),
    borderRadius: vw(36),
    alignSelf: 'center',
    marginTop: vh(15),
  },
  selectedProfileName: {
    fontSize: normalize(20),
    fontWeight: '600',
    color: colorCode.white,
    alignSelf: 'center',
    marginTop: vh(10),
  },
  selectedProfileNumber: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: colorCode.white,
    alignSelf: 'center',
    marginTop: vh(7),
  },
  btnCont: {
    height: vh(60),
    width: vw(147),
    alignSelf: 'center',
    marginTop: vh(25),
  },
});
export default withSearch(SendMoney, transactionHistory);
