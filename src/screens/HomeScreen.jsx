import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Portrait from '../assets/images/Capturing.jpg';

// TitleBar
import TitleBar from '../components/TitleBar'; 

const HomeScreen = () => {
  const navigation = useNavigation();
  const fullText = "Hi, I'm Je-ar";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; 
    const pauseTime = isDeleting ? 500 : 2000; 

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setDisplayedText('');
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullText]);

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
        <Text style={styles.tagline}>Full-Stack Developer</Text>
        <Text style={styles.description}>
          Transforming ideas into extraordinary digital solutions that captivate and inspire people.
        </Text>
        <TouchableOpacity 
          style={styles.learnMoreButton}
          onPress={() => navigation.navigate('Profile')}
          activeOpacity={0.8}
        >
          <Text style={styles.learnMoreText}>Learn More</Text>
        </TouchableOpacity>
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
    padding: 20,
    paddingTop: 100,
    paddingBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  imageContainer: {
    marginBottom: 30,
    borderRadius: 50,
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
    width: 275,
    height: 300,
    borderRadius: 150,
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
    marginBottom: 30,
  },
  learnMoreButton: {
    backgroundColor: '#1fbab7',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    marginBottom: 50,
  },
  learnMoreText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default HomeScreen;