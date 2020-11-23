import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard'
import colors from '../styles/colors';

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
                color={focused ? colors.purple : colors.black}
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
              <Ionicons
                name="md-search"
                size={size}
                color={focused ? colors.purple : colors.black}
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
                name="compass-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
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
                name="account"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />
      <Screen
        name="Profile"
        component={Dashboard}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, focused }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={focused ? colors.purple : colors.black}
              />
            )
          }
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default DashboardRoutes;