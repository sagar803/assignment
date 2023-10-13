import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, ScrollView, View } from 'react-native';
import ContactForm from '../components/ContactForm'
import logoImage from '../assets/logo.jpg';

const ContactUs = () => {
  return (

      <ScrollView style={styles.container}>
        <View sorce={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo}/> 
        </View>
        <ContactForm />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, 
    height: 250,
    resizeMode:'cover'
  },
})


export default ContactUs;