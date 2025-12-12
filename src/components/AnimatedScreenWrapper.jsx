import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const AnimatedScreenWrapper = ({ children }) => {
  const isFocused = useIsFocused();
  const translateX = useSharedValue(isFocused ? 0 : 300);
  const opacity = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    if (isFocused) {
      translateX.value = withTiming(0, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
      opacity.value = withTiming(1, {
        duration: 300,
        easing: Easing.out(Easing.cubic),
      });
    } else {
      translateX.value = withTiming(300, {
        duration: 300,
        easing: Easing.in(Easing.cubic),
      });
      opacity.value = withTiming(0, {
        duration: 300,
        easing: Easing.in(Easing.cubic),
      });
    }
  }, [isFocused]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
    };
  });

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

