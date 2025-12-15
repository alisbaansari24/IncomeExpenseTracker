import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Onboarding() {
    const navigation = useNavigation()
    return (

        <View className="flex-1 bg-[#EEF8F7] justify-between items-center p-4">

            <View className="flex-1 justify-center items-center">
                <Image
                    source={require('../assets/images/hand-shake.png')}
                    style={{ width: 150, height: 150, resizeMode: 'contain' }}
                />
                <Text className="text-xl text-center text-[#3F8782] mt-6 font-semibold">
                    Welcome to Expense Tracker!
                </Text>
            </View>

            <View className='pb-4 w-3/4 text-center'>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="mb-2 bg-[#3F8782] px-6 py-3 rounded-full "
                >
                    <Text className="text-white text-center text-lg font-semibold w-full">
                        Get Started
                    </Text>
                </TouchableOpacity>
                <Text className='text-center'>Already have account? <Text className='text-[#3F8782]'> Log In</Text></Text>
            </View>
        </View>


    );
}
