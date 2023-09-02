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
    paddingHorizontal: moderateScale(25),
    backgroundColor: colors.white,
    marginBottom: moderateVerticalScale(10),
  },
  mainHeader: {
    fontSize: scale(20),
    color: colors.headingtwoColor,
    fontWeight: '500',
    paddingVertical: moderateVerticalScale(15),
    textTransform: 'capitalize',
    marginHorizontal: moderateScale(-3),
  },
  description: {
    fontSize: scale(15),
    color: colors.textColor,
    paddingBottom: moderateVerticalScale(20),
    lineHeight: 25,
    textAlign: 'justify',
    marginHorizontal: moderateScale(3),
  },
  inputView: {marginTop: moderateVerticalScale(-20)},
  inputContainer: {
    marginTop: moderateVerticalScale(20),
  },
  labels: {
    fontWeight: 'bold',
    color: colors.textColor,
    paddingBottom: moderateVerticalScale(5),
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: colors.inputColor,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(6),
    borderRadius: 2,
    color: colors.black,
  },
  multilineStyle: {
    paddingVertical: moderateVerticalScale(4),
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateVerticalScale(20),
  },
  buttonText: {
    color: colors.white,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: moderateVerticalScale(20),
    marginHorizontal: moderateScale(-2),
  },
  wrapperText: {
    marginTop: moderateVerticalScale(5),
    color: colors.headingtwoColor,
  },
});

export default styles;
