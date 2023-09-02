import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import imagePath from '../../constants/imagePath';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  imgStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: 100,
  },
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: scale(18),
    color: colors.headingtwoColor,
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: moderateVerticalScale(15),
    lineHeight: 30,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(10),
    marginBottom: moderateVerticalScale(20),
  },
  paraStyle: {
    fontSize: scale(18),
    color: colors.textColor,
    paddingBottom: moderateVerticalScale(30),
  },
  aboutLayout: {
    backgroundColor: colors.whiteBg,
    paddingHorizontal: moderateScale(30),
    marginVertical: moderateVerticalScale(30),
  },
  aboutSubHeader: {
    fontSize: scale(18),
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: moderateVerticalScale(15),
    lineHeight: 30,
    alignSelf: 'center',
  },
  paraStyle2: {
    color: colors.white,
    paddingBottom: moderateVerticalScale(20),
    textAlign: 'justify',
  },
  iconStyle: {
    width: '100%',
    height: scale(50),
    aspectRatio: 1,
  },
});

export default styles;
