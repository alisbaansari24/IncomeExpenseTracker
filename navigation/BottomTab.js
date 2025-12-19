import { View, Text, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Statistics from '../screens/Statistics'
import HomePage from '../screens/Homepage'
import Profile from '../screens/Profile'
import { WalletStack } from './AppNavigation'

const TabButton = ({ item, onPress, focused }) => {
  // const focused = accessibilityState?.selected===true;
  // const viewRef = useRef(null)
  // const [active, setActive] = useState(false)

  // useEffect(() => {
  //   if (focused) {
  //     viewRef.current.animate({ 0: { scale: .5, route: '0deg' }, 1: { scale: 1.5, rotate: '360deg' } });
  //   } else {
  //     viewRef.current.animate({ 0: { scale: 1.5, route: '360deg' }, 1: { scale: 1.5, rotate: '0deg' } });

  //   }
  // })

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      // style={style.container}
      style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
    >
      {/* <View>
        <Animatable.View style={[StyleSheet.absoluteFillObject, { backgroundColor: }]} />
      </View> */}
      <Ionicons
        name={focused ? item.activeIcons : item.inActiveIcon}
        size={26}
        color={focused ? "#408782" : "#555"}
      />
    </TouchableOpacity>
  );
};


export default function BottomTab() {
  const Tab = createBottomTabNavigator();

  const TabList = [
    {
      route: 'Home',
      component: () => <HomePage />,
      activeIcons: 'home',
      inActiveIcon: 'home-outline'
    },
    {
      route: 'statistic',
      component: () => <Statistics />,
      activeIcons: 'stats-chart',
      inActiveIcon: 'stats-chart-outline'
    },
    {
      route: 'wallet',
      component: () => <WalletStack />,
      activeIcons: 'wallet',
      inActiveIcon: 'wallet-outline'
    },
    {
      route: 'profile',
      component: () => <Profile />,
      activeIcons: 'person',
      inActiveIcon: 'person-outline'
    }

  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 0,
          paddingTop:10,
          right: 16,
          left: 16,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          // shadowOpacity: 0.15,
          shadowRadius: 8,
          elevation: 12,
          // borderColor:"gray"
        

        }
      }}
    >
      {TabList.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? item.activeIcons : item.inActiveIcon}
                size={26}
                color={focused ? '#408782' : '#555'}
              />
            ),
          }}
        />

      ))}

    </Tab.Navigator>

  );
}
