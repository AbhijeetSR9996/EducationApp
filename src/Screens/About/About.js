import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import React from 'react';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import colors from '../../constants/colors';

const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.aboutContainer}>
        <Text style={styles.mainHeader}>Abhijeet Singh Rathour</Text>
        <Text style={styles.paraStyle}> I am a Frontend Developer 🙂 </Text>
        <View style={styles.aboutContainer}>
          <Image style={styles.imgStyle} source={imagePath.profilePic} />
        </View>
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About Me</Text>
          <Text style={styles.paraStyle2}>
            Experienced Developer with a demonstrated history of working in the
            information technology and services industry. Skilled in Mobile
            Applications, UI Design, Databases, Java and Tally ERP. Strong
            engineering professional with a Master of Computer Applications -
            MCA focused in Computer Science from CHANDIGARH UNIVERSITY.
          </Text>
        </View>
        <Text style={styles.mainHeader}>Follow me on Social Network</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/abhijeet-singh-rathour-746958173',
              )
            }>
            <Image style={styles.iconStyle} source={imagePath.linkedinIcon} />
          </TouchableOpacity>
          <View>
            <Text style={{color: colors.black}}> | </Text>
          </View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              Linking.openURL('https://www.github.com/AbhijeetSR9996')
            }>
            <Image style={styles.iconStyle} source={imagePath.githubIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
