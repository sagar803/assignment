import React from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, resetForm } from '../store';
import email from 'react-native-email';
import { SafeAreaView } from 'react-native';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, mobileNumber, email: userEmail, message } = useSelector(
    (state) => state.contactUs
  );

  const handleInputChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phoneNumber);
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = () => {
    if (!name || !mobileNumber || !userEmail || !message) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (!validateEmail(userEmail)) {
      Alert.alert('Error', 'Invalid email address.');
      return false;
    }

    if (!validatePhoneNumber(mobileNumber)) {
      Alert.alert('Error', 'Invalid mobile number.');
      return false;
    }
    const emailBody = `Name: ${name}\nMobile Number: ${mobileNumber}\nEmail: ${userEmail}\nMessage: ${message}`;

    email(['info@redpositive.in'], {
      subject: 'Contact Us Form Submission',
      body: emailBody,
    }).catch(console.error);

    dispatch(resetForm());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={(text) => handleInputChange('mobileNumber', text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userEmail}
        onChangeText={(text) => handleInputChange('email', text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Message"
        value={message}
        onChangeText={(text) => handleInputChange('message', text)}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};
export default ContactForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 40,

  },
  input: {
    borderRadius: 5,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  multilineInput: {
    height: 80,
  },
});
