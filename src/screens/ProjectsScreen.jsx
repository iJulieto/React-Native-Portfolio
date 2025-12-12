import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// TitleBar
import TitleBar from '../components/TitleBar';

// 2. Sample Data (You can replace this with real data later)
const PROJECTS = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A personal portfolio built with PHP and Custom CSS.',
    image: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png', // Placeholder icon
    tags: ['PHP', 'CSS', 'MySQL'],
  },
  {
    id: '2',
    title: 'E-Commerce App',
    description: 'Mobile shopping app with cart functionality.',
    image: 'https://cdn-icons-png.flaticon.com/512/3081/3081559.png',
    tags: ['React Native', 'Firebase'],
  },
  {
    id: '3',
    title: 'Task Manager',
    description: 'A productivity tool to track daily tasks.',
    image: 'https://cdn-icons-png.flaticon.com/512/2641/2641409.png',
    tags: ['JavaScript', 'Node.js'],
  },
];

const ProjectsScreen = () => {

  // 3. This function controls how each single "Card" looks
  const renderProjectItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.image }} style={styles.projectImage} />
        <View style={styles.headerText}>
          <Text style={styles.projectTitle}>{item.title}</Text>
          <View style={styles.tagContainer}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>{tag}</Text>
            ))}
          </View>
        </View>
      </View>
      
      <Text style={styles.projectDescription}>{item.description}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TitleBar title="Projects" />
      
      <View style={styles.container}>
        <FlatList
          data={PROJECTS}
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
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  // --- CARD STYLING ---
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    // Shadows
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 50,
    height: 50,
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
  // --- TAGS (the little pills for "PHP", "CSS") ---
  tagContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },
  tag: {
    fontSize: 10,
    color: '#6200ea',
    backgroundColor: '#ede7f6', // Light purple bg
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 6,
    overflow: 'hidden', // iOS fix for borderRadius on Text
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 15,
  },
  // --- BUTTON ---
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default ProjectsScreen;