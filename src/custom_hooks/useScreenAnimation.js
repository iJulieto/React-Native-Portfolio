import { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const useScreenAnimation = () => {
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
  })

  return useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    opacity: opacity.value,
  }));
};

export default useScreenAnimation;