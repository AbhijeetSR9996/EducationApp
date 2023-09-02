import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../constants/navigationStrings';
import {Home, Course, About, Contact, UserData} from '../Screens';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.COURSE}
        component={Course}
        options={{
          headerTitleStyle: styles.headerStyle,
          headerTitle: 'Course',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={navigationStrings.ABOUT}
        component={About}
        options={{
          headerTitleStyle: styles.headerStyle,
          headerTitle: 'About',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={navigationStrings.CONTACT}
        component={Contact}
        options={{
          headerTitleStyle: styles.headerStyle,
          headerTitle: 'Contact',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={navigationStrings.USERDATA}
        component={UserData}
        options={{
          headerTitleStyle: styles.headerStyle,
          headerTitle: 'UserData',
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 25,
  },
});
