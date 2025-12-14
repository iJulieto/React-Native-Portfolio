import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import useScreenAnimation from '../custom_hooks/useScreenAnimation';

const AnimatedScreenWrapper = ({ children }) => {
  const animatedStyle = useScreenAnimation();

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AnimatedScreenWrapper;
