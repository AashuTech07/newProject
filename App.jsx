import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './SplashScreen';
import DetailsScreen from './DetailsScreen';
import MainNavigator from './MainNavigator'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Movie Details',
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
