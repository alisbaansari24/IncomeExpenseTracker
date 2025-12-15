import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View className="bg-[#3F8782] flex-1 justify-center items-center">
      <Image
        source={require('../assets/images/expense.png')}
        style={{ width: 100, height: 100, resizeMode: 'contain' }}
      />
      <Text className="text-xl font-bold text-white mt-4">Expense Tracker</Text>
    </View>
  )
}