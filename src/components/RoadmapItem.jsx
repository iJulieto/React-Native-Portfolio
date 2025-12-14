import { View, Text, StyleSheet, Image } from 'react-native';

// Mapping Images
import { AchievementImages } from '../assets/data/ImageMap.js';

const RoadmapItem = ({ item, isLast }) => {
  return (
    <View style={styles.roadmapItem}>
      <View style={styles.timelineColumn}>
        <View style={styles.timelineDot} />
        {!isLast && <View style={styles.timelineLine} />}
      </View>
      <View style={styles.roadmapContent}>
        <Text style={styles.yearText}>{item.year}</Text>
        <Text style={styles.achievementTitle}>{item.title}</Text>
        <Text style={styles.achievementDesc}>{item.description}</Text>
        {item.image && (
          <Image 
            source={AchievementImages[item.image]}
            style={styles.achievementImage} 
            resizeMode="contain" 
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  roadmapItem: {
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  timelineColumn: {
    alignItems: 'center',
    width: 30,
    marginRight: 10,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1fbab7',
    marginTop: 6,
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    backgroundColor: '#e5e7eb',
    flex: 1,
    marginTop: -2,
  },
  roadmapContent: {
    flex: 1,
    paddingBottom: 30,
  },
  yearText: {
    color: '#1fbab7',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 4,
  },
  achievementDesc: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 10,
    lineHeight: 20,
  },
  achievementImage: {
    width: 250,
    height: 150,
    borderRadius: 8,
    marginTop: 5,
  },
});

export default RoadmapItem;