import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TitleBar = ({ title }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { top: insets.top + 10 }]}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '50%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center', 
    alignItems: 'center',     
    alignSelf: 'center',
    borderRadius: 35,
    zIndex: 10,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TitleBar;