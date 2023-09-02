import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

const styles = StyleSheet.create({
  cardImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mainContainer: {
    paddingHorizontal: moderateScale(20),
  },
  courseContainer: {
    padding: moderateScale(30),
    backgroundColor: colors.containerTwoColor,
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: colors.grey,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: moderateVerticalScale(20),
  },
  imageContainer: {
    marginTop: moderateVerticalScale(-30),
  },
  textContainer: {
    marginBottom: moderateVerticalScale(20),
  },
  mainHeader: {
    fontSize: scale(20),
    color: colors.black,
    textTransform: 'uppercase',
    paddingBottom: moderateVerticalScale(15),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    textAlign: 'left',
    fontSize: scale(16),
    textAlign: 'justify',
    fontWeight: '400',
  },
  coursename: {
    color: colors.black,
    textAlign: 'center',
    fontSize: scale(16),
    fontWeight: '400',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateVerticalScale(5),
  },
  buttonStyle: {
    backgroundColor: colors.buttonColor,
    borderRadius: 5,
    paddingVertical: moderateVerticalScale(10),
    paddingHorizontal: moderateScale(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(18),
    color: colors.buttonTextColor,
    textTransform: 'capitalize',
  },
});

export default styles;
