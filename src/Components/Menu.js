import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import navigationStrings from '../constants/navigationStrings';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(navigationStrings.COURSE)}>
        <Image style={styles.iconStyle} source={imagePath.coursesIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(navigationStrings.USERDATA)}>
        <Image style={styles.iconStyle} source={imagePath.conferenceIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(navigationStrings.ABOUT)}>
        <Image style={styles.iconStyle} source={imagePath.aboutIcon} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate(navigationStrings.CONTACT)}>
        <Image style={styles.iconStyle} source={imagePath.telephoneIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: moderateVerticalScale(5),
  },
  iconStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
});

export default Menu;
