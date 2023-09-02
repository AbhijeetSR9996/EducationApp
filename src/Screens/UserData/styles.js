import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: moderateVerticalScale(5),
    backgroundColor: colors.black,
  },
  card: {
    width: moderateScale(250),
    height: moderateScale(335),
    backgroundColor: colors.white,
    borderRadius: 5,
    margin: moderateScale(20),
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.containerColor,
    paddingVertical: moderateVerticalScale(10),
  },
  idNumber: {
    fontSize: scale(20),
    color: colors.idColor,
  },
  bioData: {
    fontSize: scale(28),
    color: colors.white,
  },
  mainHeader: {
    fontSize: scale(30),
    color: colors.headingthreeColor,
    textAlign: 'center',
    marginTop: moderateVerticalScale(30),
  },
  imgContainer: {
    padding: moderateScale(10),
  },
  imgStyle: {
    width: '100%',
    height: moderateScale(160),
  },
  mainContain: {
    padding: moderateScale(10),
    backgroundColor: colors.containerColor,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: scale(14),
    color: colors.white,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  myEmail: {
    fontSize: scale(14),
    color: colors.white,
    alignSelf: 'flex-start',
    textTransform: 'lowercase',
  },
});

export default styles;
