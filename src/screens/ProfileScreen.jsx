import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Data
import ProfileData from '../assets/data/ProfileData.json';
const { Achievements } = ProfileData;

// Components
import TitleBar from '../components/TitleBar';
import ProfileHeader from '../components/ProfileHeader';
import RoadmapItem from '../components/RoadmapItem';

const ProfileScreen = () => {
  const [contentHeight, setContentHeight] = useState(0);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (contentHeight > 0) {
      const animation = Animated.loop(
        Animated.timing(scrollY, {
          toValue: -contentHeight,
          duration: 15000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      );
      animation.start();
      return () => animation.stop();
    }
  }, [contentHeight, scrollY]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Profile" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader />
        
        <View style={styles.roadmapWindow}>
          <Animated.View style={{ transform: [{ translateY: scrollY }] }}>
            <View onLayout={(e) => setContentHeight(e.nativeEvent.layout.height)}>
              {Achievements.map((item) => (
                <RoadmapItem key={`a-${item.id}`} item={item} isLast={false} />
              ))}
            </View>
            <View>
              {Achievements.map((item, index) => (
                <RoadmapItem key={`b-${item.id}`} item={item} isLast={index === Achievements.length - 1} />
              ))}
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 30,
    paddingTop: 100,
    paddingBottom: 100,
  },
  roadmapWindow: {
    height: 400,
    overflow: 'hidden',
    marginTop: 10,
  },
});

export default ProfileScreen;