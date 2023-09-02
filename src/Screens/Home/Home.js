import {Text, View, Image} from 'react-native';
import React from 'react';
import Menu from '../../Components/Menu';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const Home = () => {
  const description =
    'Here, you will find courses on every subject in just few clicks. So, what are you waiting for?? ';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image style={styles.headerImage} source={imagePath.booksBg} />

        <View style={styles.headerText}>
          <Text style={styles.mainHeader}> Welcome to </Text>
          <Text
            style={{
              ...styles.mainHeader,
              ...styles.mainHeaderTwo,
            }}>
            EDUCATION APP{' '}
          </Text>
          <Text style={styles.paraStyle}>{description}</Text>
        </View>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle} />
        <Menu />
        <View style={styles.lineStyle} />
      </View>
    </View>
  );
};

export default Home;
