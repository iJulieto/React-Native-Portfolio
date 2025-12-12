import { View, Text, StyleSheet} from 'react-native';

const TitleBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 75,
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