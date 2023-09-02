import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.white,
    textAlign: 'center',
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: moderateVerticalScale(40),
    marginBottom: moderateVerticalScale(10),
    borderRadius: 20,
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  mainHeader: {
    fontSize: scale(30),
    color: colors.headingtwoColor,
    textTransform: 'uppercase',
  },
  mainHeaderTwo: {
    //fontSize: scale(27),
    color: colors.headingoneColor,
  },
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateVerticalScale(-20),
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: scale(17),
    color: colors.textColor,
    marginTop: moderateVerticalScale(30),
    paddingBottom: moderateVerticalScale(50),
    lineHeight: 26,
  },
  menuStyle: {
    marginBottom: moderateVerticalScale(30),
    justifyContent: 'space-between',
    paddingVertical: moderateVerticalScale(10),
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
});

export default styles;
