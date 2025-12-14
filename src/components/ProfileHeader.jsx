import { View, Text, StyleSheet, Image } from 'react-native';

// Data
import ProfileData from '../assets/data/ProfileData.json';
import Data from '../assets/data/Data.json';
const { Profile_Content } = ProfileData;
const { Tech_Stack } = Data;

// Mapping Images
import { TechStackImages } from '../assets/data/ImageMap.js';

// Image
import Self from '../assets/images/Self/Self.png';

// Components
import Card from './Card';

const ProfileHeader = () => {
  return (
    <View>
      <View style={styles.profileHeader}>
        <View style={styles.imageContainer}>
          <Image source={Self} style={styles.avatar} />
        </View>
        <Text style={styles.nameText}>{Profile_Content.name}</Text>
        <Text style={styles.roleText}>{Profile_Content.role}</Text>
      </View>

      <Card style={styles.infoSection}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.bodyText}>{Profile_Content.about}</Text>
      </Card>

      <Card style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Tech Stack</Text>
        <View style={styles.techContainer}>
          {Tech_Stack.map((tech, index) => (
            <View key={index} style={styles.techBadge}>
              <Image source={TechStackImages[tech.icon]} style={styles.techIcon} resizeMode="contain" />
              <Text style={styles.techText}>{tech.name}</Text>
            </View>
          ))}
        </View>
      </Card>
      <Text style={[styles.sectionTitle, { marginLeft: 26 }]}>My Journey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  imageContainer: {
    marginBottom: 20,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 15,
    backgroundColor: 'white',
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  roleText: {
    fontSize: 18,
    color: '#1fbab7',
    fontWeight: '600',
    letterSpacing: 1,
  },
  infoSection: {
    padding: 25,
    borderRadius: 25,
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 26,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdfa',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccfbf1',
    marginRight: 8,
    marginBottom: 8,
  },
  techIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  techText: {
    color: '#1fbab7',
    fontWeight: '600',
    fontSize: 14,
  },
});

export default ProfileHeader;