import React, {useState, useEffect} from 'react';
import {Platform, StyleSheet, View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import imagePath from '../constants/imagePath';
import colors from '../constants/colors';
import {moderateVerticalScale, scale} from 'react-native-size-matters';

const Routes = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      Hide_Splash_Screen();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const Hide_Splash_Screen = () => {
    setIsVisible(false);
  };

  let Splash_Screen = (
    <View style={styles.SplashScreen_RootView}>
      <View style={styles.SplashScreen_ChildView}>
        <Text style={styles.textStyle}>EDUCATION APP</Text>
        <Image source={imagePath.booksBg} style={styles.imageStyle} />
      </View>
    </View>
  );

  return (
    <NavigationContainer>
      {AuthStack()}
      {isVisible === true ? Splash_Screen : null}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? moderateVerticalScale(20) : 0,
  },
  SplashScreen_RootView: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    flex: 1,
    marginVertical: moderateVerticalScale(-10),
  },
  textStyle: {
    fontSize: scale(25),
    marginBottom: moderateVerticalScale(20),
    fontWeight: 'bold',
    color: colors.white,
  },
  imageStyle: {
    alignSelf: 'center',
    height: undefined,
    width: '80%',
    aspectRatio: 1,
    display: 'flex',
    borderRadius: 15,
  },
});

export default Routes;
