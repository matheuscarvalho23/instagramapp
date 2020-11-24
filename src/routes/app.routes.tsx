import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import colors from '../styles/colors';
import profilePhoto from '../assets/profile.jpg';

const { Navigator, Screen } = createBottomTabNavigator();

const DashboardRoutes: React.FC = () => (
  <NavigationContainer independent={true}>
    <Navigator
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          bottom: 0
        },
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
          marginTop: 20,
        },
        labelStyle: {
          fontSize: 11,
        },
        inactiveTintColor: colors.black,
        activeTintColor: colors.purple,
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => {
            return (
              <Ionicons
                name="md-home"
                size={size}
                color={colors.black}
              />
            )
          }
        }}
      />
      <Screen
        name="Search"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="magnify"
                size={size}
                color={colors.black}
              />
            )
          }
        }}
      />
      <Screen
        name="Reeds"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={(focused) ? 'compass' : 'compass-outline'}
                size={size}
                color={colors.black}
              />
            )
          }
        }}
      />
      <Screen
        name="Store"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name={(focused) ? 'cart' : 'cart-outline'}
                size={size}
                color={colors.black}
              />
            )
          }
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => {
            return (
              <Image
                source={profilePhoto}
                style={{ width: 27, height: 27, borderRadius: 13.5 }}
              />
            )
          }
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default DashboardRoutes;