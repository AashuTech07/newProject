
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#ccf', paddingBottom: 5, height: 60 }, 
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'; 
          } else if (route.name === 'Search') {
            iconName = 'search'; 
          }

          
          return (
            <Icon
              name={iconName}
              size={focused ? 35 : 30}
              color={focused ? 'blue' : 'black'} 
            />
          );
        },
        tabBarActiveTintColor: 'blue', 
        tabBarInactiveTintColor: 'black', 
        tabBarLabelStyle: { fontSize: 12 }, 
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
