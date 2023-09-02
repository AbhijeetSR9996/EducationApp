import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Courses from './Courses';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import styles from './styles';

const Course = ({navigation}) => {
  const courseCard = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.cardImage}
              source={imagePath.booksBg}
              resizeMode="contain"
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainHeader}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.coursename}>{item.course1}</Text>
            <Text style={styles.coursename}>{item.course2}</Text>
            <Text style={styles.coursename}>{item.course3}</Text>
            <Text style={styles.coursename}>{item.price}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigate(navigationStrings.HOME)}>
                <Text style={styles.buttonText}>Course Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={item => item.id}
      data={Courses}
      renderItem={courseCard}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Course;
