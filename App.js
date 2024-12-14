import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import firstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FourthScreen from './screens/FourthScreen';
import Header from './components/header';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <NavigationContainer> 
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-outline' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
            } else if (route.name === 'Social') {
              iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
            } else if (route.name === 'Venture') {
              iconName = focused ? 'compass-outline' : 'compass-outline';
            } else if (route.name === 'Daily') {
              iconName = focused ? 'square-outline' : 'square-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },

          header: () => <Header />,

          tabBarActiveTintColor: '#00a2ad',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen 
          name="Daily" 
          component={firstScreen} />
        <Tab.Screen name="Venture" component={SecondScreen} />
        <Tab.Screen name="Home" component={ThirdScreen} />
        <Tab.Screen name="Social" component={ThirdScreen} />
        <Tab.Screen 
        name='Profile'
        component={FourthScreen}
         />
      </Tab.Navigator>


        
    </NavigationContainer>
  );
}



export default MyTabs;