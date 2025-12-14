import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// TitleBar
import TitleBar from '../components/TitleBar';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

import Data from '../assets/data/Data.json';
import ProjectData from '../assets/data/ProjectData.json';
const { Tech_Stack } = Data;
const { Projects } = ProjectData;

import { ProjectImages, TechStackImages } from '../assets/data/ImageMap.js';

const ProjectsScreen = () => {
  
  const navigation = useNavigation();

  const renderProjectItem = ({ item }) => (
    <Card>
      <View style={styles.cardHeader}>
        <Image source={ProjectImages[item.image]} style={styles.projectImage} />
        <View style={styles.headerText}>
          <Text style={styles.projectTitle}>{item.title}</Text>
          <View style={styles.tagContainer}>
            {item.tags.map((tag, index) => {
              const techItem = Tech_Stack.find(t => t.name === tag);
              const iconSource = techItem ? TechStackImages[techItem.icon] : null;
              return (
                <View key={index} style={styles.tagBadge}>
                  {iconSource && <Image source={iconSource} style={styles.tagLogo} />}
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      
      <Text style={styles.projectDescription}>{item.description}</Text>

      <CustomButton title="View Details" onPress={() => navigation.navigate('Contact')} style={styles.button}  />
    </Card>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Projects" />
      
      <View style={styles.container}>
        <FlatList
          data={Projects}
          renderItem={renderProjectItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  listContent: {
    paddingTop: 100,
    paddingBottom: 100,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f2f1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 4,
  },
  tagLogo: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  tagText: {
    fontSize: 10,
    color: '#1fbab7',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  button: {
    marginTop: 5,
  },
});

export default ProjectsScreen;