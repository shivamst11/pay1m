/**
 * @format
 * @author Shivam Tripathi
 * @description History Card Component
 */

import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import {transactionHistory} from '../../dummyData/dummyData';
import colorCode from '../../Utility/colorCode';
import {TRX_STATUS} from '../../Utility/Constant';
import {normalize, vh, vw} from '../../Utility/dimension';
import GlobalStyles from '../../Utility/GlobalStyles';
import ImagePath from '../../Utility/ImagePath';
const Transaction = () => {
  const transactionCard = (item, index) => {
    const statusIcon =
      item.status === TRX_STATUS.RECEIVED
        ? ImagePath.RECEIVED
        : item.status === TRX_STATUS.SENT
        ? ImagePath.SENT
        : ImagePath.FAILED;

    const iconWidth =
      item.status === TRX_STATUS.RECEIVED
        ? 87
        : item.status === TRX_STATUS.SENT
        ? 62
        : 70;

    const amountColor =
      item.status === TRX_STATUS.RECEIVED
        ? colorCode.received
        : item.status === TRX_STATUS.SENT
        ? colorCode.sent
        : colorCode.failed;

    const cardBg = index % 2 === 0 ? colorCode.sheetBg : colorCode.midnightBlue;

    return (
      <View key={item.id} style={[styles.cardCont, {backgroundColor: cardBg}]}>
        <View style={[GlobalStyles.rowView, GlobalStyles.alignCenter]}>
          <CustomImage source={item.profileImg} style={styles.profileImg} />
          <View>
            <CustomText style={styles.cardName}>{item.name}</CustomText>
            <CustomImage
              resizeMode={'contain'}
              source={statusIcon}
              style={[styles.sentIcon, {width: vw(iconWidth)}]}
            />
          </View>
        </View>
        <CustomText style={[styles.cardAmount, {color: amountColor}]}>
          {item.amount}
        </CustomText>
      </View>
    );
  };

  return (
    <ScrollView style={styles.trxList}>
      {transactionHistory.map((item, index) =>
        transactionCard(item, index + 1),
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  trxList: {
    paddingTop: vh(32),
  },
  cardCont: {
    height: vh(88),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: vw(16),
    alignItems: 'center',
  },
  profileImg: {
    height: vw(48),
    width: vw(48),
    borderRadius: vw(24),
    marginRight: vw(16),
  },
  cardName: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: colorCode.name,
    marginBottom: vh(4),
  },
  receivedIcon: {
    height: vh(28),
  },
  failedIcon: {
    height: vh(28),
  },
  sentIcon: {
    height: vh(28),
  },
  cardAmount: {
    fontSize: normalize(16),
    fontWeight: '700',
  },
});
export default Transaction;
