import {FlatList, Text, View, Image} from 'react-native';
import React from 'react';
import Data from './Data';
import imagePath from '../../constants/imagePath';
import styles from './styles';

const UserData = ({navigation}) => {
  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={imagePath.profilePic} />
        </View>
        <View style={styles.bioDataContainer}>
          <Text style={styles.bioData}> Bio Data </Text>
          <Text style={styles.idNumber}>
            {item.id < 10 ? `#0${item.id}` : `#${item.id}`}
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <Text style={styles.myName}> Name: {item.name} </Text>
          <Text style={styles.myEmail}> Email: {item.email}</Text>
          <Text style={styles.myName}> Mobile: {item.mobile}</Text>
          <Text style={[styles.myName, {textTransform: 'capitalise'}]}>
            {' '}
            Website: {item.website}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text style={styles.mainHeader}>LIST OF STUDENTS</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={Data}
        renderItem={showUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default UserData;
