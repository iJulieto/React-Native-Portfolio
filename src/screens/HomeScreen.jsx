import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// Image
import Portrait from '../assets/images/Self/HeartSelf.jpg';

// Data
import HomeData from '../assets/data/HomeData.json';
const { Home_Content } = HomeData;

// Components
import TitleBar from '../components/TitleBar'; 
import CustomButton from '../components/CustomButton';

// Custom Hook
import useTypewriter from '../custom_hooks/useTypeWriter';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showCursor, setShowCursor] = useState(true);
  const displayedText = useTypewriter(Home_Content.heading);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Home" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={Portrait}
            style={styles.placeholderImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.headline}>
          {displayedText}
          {showCursor && <Text style={styles.cursor}>|</Text>}
        </Text>
        <Text style={styles.tagline}>{Home_Content.tagline}</Text>
        <Text style={styles.description}>
          {Home_Content.description}
        </Text>
        <CustomButton 
          title="Learn More" 
          onPress={() => navigation.navigate('Profile')} 
          style={styles.learnMoreButton}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 0,
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  imageContainer: {
    marginBottom: 30,
    borderRadius: 175,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 20,
  },
  placeholderImage: {
    width: 250,
    height: 300,
    borderRadius: 175,
  },
  headline: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    letterSpacing: 0.5,
    minHeight: 40, 
  },
  cursor: {
    color: '#1fbab7',
    fontWeight: 'normal',
  },
  tagline: {
    fontSize: 18,
    color: '#1fbab7',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    paddingHorizontal: 30,
    lineHeight: 24,
    marginBottom: 20,
  },
  learnMoreButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginBottom: 50,
  },
});

export default HomeScreen;