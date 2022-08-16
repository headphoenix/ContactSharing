import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { LaunchScreen } from "../../features/home/screens/launchscreen";
import { SignScreen } from "../../features/home/screens/signscreen";
import { SignInScreen } from "../../features/home/screens/signin.screen";
import { RegisterScreen } from "../../features/home/screens/register.screen";



const Tab = createStackNavigator();


export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SignScreen" component={SignScreen} options={{ headerShown: false }} />
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} options={{
        title: 'Register', headerStyle: {
          backgroundColor: '#ff0066',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: "center"
      }}/>
      <Tab.Screen name="SignInScreen" component={SignInScreen} options={{
        title: 'Sign In', headerStyle: {
          backgroundColor: '#ff0066',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: "center"
      }} />
    </Tab.Navigator>
  </NavigationContainer>
);