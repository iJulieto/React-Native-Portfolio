import React from 'react';
import { View, StyleSheet } from 'react-native';

const TabIcon = ({ focused, color, IconComponent, size = 30 }) => {
  return (
    <View 
      style={[
        styles.iconContainer, 
        focused && styles.activeIconContainer
      ]}
    >
      <IconComponent color={focused ? '#ffffff' : color} size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 45,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  activeIconContainer: {
    backgroundColor: 'black',
  }
});

export default TabIcon;