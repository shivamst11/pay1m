/**
 * @format
 * @author Shivam Tripathi
 * @description SendMoney Profile component
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import CustomImage from '../../Component/CustomImage';
import CustomText from '../../Component/CustomText';
import colorCode from '../../Utility/colorCode';
import {normalize, vw} from '../../Utility/dimension';

const Profile = props => {
  const isSelected = props.item.id === props?.selectedUser?.id;
  return (
    <View
      source={props.item.profileImg}
      activeOpacity={0.8}
      onTouchStart={() => props.onClickProfile(props.item)}
      style={[
        styles.container,
        {top: props.top, left: props.left},
        {
          height: isSelected ? vw(72) : vw(36),
          width: isSelected ? vw(72) : vw(36),
          borderRadius: isSelected ? vw(36) : vw(18),
          borderWidth: isSelected ? vw(4) : vw(2),
          borderColor: isSelected ? colorCode.greenBorder : colorCode.white,
        },
      ]}>
      <CustomImage
        source={props.item.profileImg}
        style={{
          height: isSelected ? vw(64) : vw(32),
          width: isSelected ? vw(64) : vw(32),
          borderRadius: isSelected ? vw(32) : vw(16),
        }}
      />
      <View style={styles.nameCont}>
        <CustomText
          numberOfLines={1}
          style={[
            styles.profileName,
            {
              color: isSelected ? colorCode.greenBorder : colorCode.drWhile,
              fontSize: isSelected ? normalize(14) : normalize(12),
            },
          ]}>
          {props.name}
        </CustomText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorCode.white,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameCont: {
    width: 200,
    alignItems: 'center',
    bottom: vw(-22),
    position: 'absolute',
  },
  profileName: {
    fontWeight: '500',
  },
});
export default Profile;
