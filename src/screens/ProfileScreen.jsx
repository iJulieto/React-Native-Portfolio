import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// TitleBar
import TitleBar from '../components/TitleBar'; 

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Profile" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
    
        {/* Profile Image Section */}
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
            style={styles.avatar} 
          />
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.roleText}>Full Stack Developer</Text>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bodyText}>
            Passionate developer building apps with React Native and PHP. 
            I love creating clean UIs and robust backends.
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>dev@example.com</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>+63 900 000 0000</Text>
          </View>
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
    paddingTop: 30, // Extra padding so content doesn't touch the floating TitleBar immediately
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Makes the square image a perfect circle
    borderWidth: 4,
    borderColor: '#6200ea',
    marginBottom: 15,
  },
  nameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  roleText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  infoSection: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ea',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
    width: 60,
  },
  value: {
    color: '#555',
  }
});

export default ProfileScreen;