import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// TitleBar
import TitleBar from '../components/TitleBar';

const ContactScreen = () => {
  // State to handle form inputs
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Function to simulate sending a message
  const handleSendMessage = () => {
    if (name === '' || message === '') {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', `Thanks ${name}! Your message has been sent.`);
      setName('');
      setMessage('');
    }
  };

  // Function to open external links
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Contact" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Section 1: Direct Contact Info */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Get in Touch</Text>
          <Text style={styles.subText}>Feel free to reach out for collaborations!</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>hello@myportfolio.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Location:</Text>
            <Text style={styles.value}>Manila, Philippines</Text>
          </View>
        </View>

        {/* Section 2: Social Media Links */}
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#333' }]} 
            onPress={() => openLink('https://github.com')}
          >
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, { backgroundColor: '#0077b5' }]} 
            onPress={() => openLink('https://linkedin.com')}
          >
            <Text style={styles.socialText}>LinkedIn</Text>
          </TouchableOpacity>
        </View>

        {/* Section 3: Message Form */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Send a Message</Text>
          
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.inputLabel}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Write your message here..."
            value={message}
            onChangeText={setMessage}
            multiline={true} // Allows typing multiple lines
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send Message</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingTop: 30,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 5,
  },
  subText: {
    color: '#666',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    width: 70,
    color: '#333',
  },
  value: {
    color: '#555',
  },
  // --- Social Media Buttons ---
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flex: 0.48, // Takes up roughly half the width
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  socialText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // --- Form Inputs ---
  inputLabel: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
  },
  textArea: {
    height: 100, // Taller input for the message
    textAlignVertical: 'top', // Ensures text starts at the top-left
  },
  sendButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ContactScreen;