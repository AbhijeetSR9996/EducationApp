import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Checkbox from '@react-native-community/checkbox';
import colors from '../../constants/colors';
import styles from './styles';
import navigationStrings from '../../constants/navigationStrings';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const strongRegex = new RegExp('^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$');

  const submit = () => {
    if (name == '') {
      Alert.alert('Name is required.');
      return;
    } else if (email == '') {
      Alert.alert('Email is required.');
      return;
    } else if (!strongRegex.test(email)) {
      Alert.alert('Enter a valid email.');
      return;
    } else if (phone == '') {
      Alert.alert('Mobile number is required.');
      return;
    } else if (phone.length < 10) {
      Alert.alert('Enter a valid mobile number.');
      return;
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate(navigationStrings.HOME);
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{maxHeight: '100%'}}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainHeader}> Level up your knowledge </Text>
        <Text style={styles.description}>
          You can reach us anytime via singh@abhi.com{' '}
        </Text>

        <View style={styles.inputView}>
          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Enter your name </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Abhi Singh'}
              placeholderTextColor={colors.grey}
              value={name}
              onChangeText={name => setName(name)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Enter your email </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={'demo@mail.com'}
              placeholderTextColor={colors.grey}
              value={email}
              onChangeText={email => setEmail(email)}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}> Enter your mobile number </Text>
            <TextInput
              style={styles.inputStyle}
              placeholder={'1234567890'}
              placeholderTextColor={colors.grey}
              value={phone}
              maxLength={10}
              keyboardType="numeric"
              onChangeText={phone => setPhone(phone)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.labels}> How can we help you? </Text>
            <TextInput
              style={[styles.inputStyle, styles.multilineStyle]}
              placeholder={'Tell us about yourself'}
              placeholderTextColor={colors.grey}
              value={message}
              onChangeText={message => setMessage(message)}
              numberOfLines={5}
              multiline={true}
            />
          </View>
        </View>

        <View style={styles.wrapper}>
          <Checkbox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            color={agree ? colors.checkColor : undefined}
          />
          <Text style={styles.wrapperText}>
            {' '}
            I have read and agree with Terms & Conditions{' '}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {backgroundColor: agree ? colors.checkColor : colors.grey},
          ]}
          // onPress={() => navigation.navigate('Home')}
          onPress={submit}
          disabled={!agree}>
          <Text style={styles.buttonText}> Contact Us </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;
