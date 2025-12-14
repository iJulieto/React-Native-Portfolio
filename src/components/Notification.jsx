import { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import { CheckCircle, AlertCircle } from 'lucide-react-native';

const Notification = ({ message, type = 'success', onHide }) => {
  const translateY = useRef(new Animated.Value(-100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 20,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      handleHide();
    }, 3000);

    return () => clearTimeout(timer);
  });

   const handleHide = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onHide) onHide();
    });
  };



  const isSuccess = type === 'success';
  const backgroundColor = isSuccess ? '#1fbab7' : '#ff6b6b';
  const Icon = isSuccess ? CheckCircle : AlertCircle;

  return (
    <Animated.View style={[styles.container, { backgroundColor, transform: [{ translateY }], opacity }]}>
      <Icon color="white" size={24} style={styles.icon} />
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 10,
    zIndex: 9999,
  },
  icon: {
    marginRight: 12,
  },
  message: {
    flex: 1,
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Notification;