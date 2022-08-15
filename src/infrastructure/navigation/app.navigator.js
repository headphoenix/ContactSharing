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
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#72BAFC",
        inactiveTintColor: "gray",
        headerShown: false
      }}
      screenOptions={{
        headerShown: false
        }}
    >
      <Tab.Screen name="LaunchScreen" component={LaunchScreen} />
      <Tab.Screen name="SignScreen" component={SignScreen} />
      <Tab.Screen name="RegisterScreen" component={RegisterScreen} />
      <Tab.Screen name="SignInScreen" component={SignInScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);