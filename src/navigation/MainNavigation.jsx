import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

// Icons
import { Home, Code, Phone, User } from 'lucide-react-native';

// Custom Tab Icon Component
import TabIcon from '../components/TabIcon'; 

// Screens
import HomeScreen from '../screens/HomeScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ContactScreen from '../screens/ContactScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Animated Wrapper
import AnimatedScreenWrapper from '../components/AnimatedScreenWrapper';

const Tab = createBottomTabNavigator();

const Tabs = [
  { name: 'Home', component: HomeScreen, Icon: Home },
  { name: 'Profile', component: ProfileScreen, Icon: User },
  { name: 'Projects', component: ProjectsScreen, Icon: Code },
  { name: 'Contact', component: ContactScreen, Icon: Phone },
];

// Wrapper component to add animation to each screen
const createAnimatedScreen = (ScreenComponent) => {
  return (props) => {
    return (
      <AnimatedScreenWrapper>
        <ScreenComponent {...props} />
      </AnimatedScreenWrapper>
    );
  };
};

function MainNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: '#ffffff',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        {Tabs.map((tab) => (
          <Tab.Screen 
            key={tab.name}
            name={tab.name} 
            component={createAnimatedScreen(tab.component)}
            options={{
              tabBarIcon: ({ focused, color }) => (
                <TabIcon 
                  focused={focused} 
                  color={color} 
                  IconComponent={tab.Icon} 
                  size={30}
                />
              )
            }} 
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 25,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 35,
    height: 60,
  },
});

export default MainNavigation;