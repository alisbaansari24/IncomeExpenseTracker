import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Profile() {
    return (
        <ScrollView className='flex-1 pb-4'>
            <View className="flex-1 bg-[#2A7C76] h-[240px] rounded-b-[20%] pb-4">

                {/* Header */}
                <View className="absolute top-10 left-0 right-0 flex flex-row justify-between items-center p-4">
                    <Text className="text-2xl font-bold text-white">Profile</Text>
                    <View className="bg-[#FFFFFF0F] rounded-xl px-3 p-2">
                        <Fontisto name="bell" color="#fff" size={24} />
                    </View>
                </View>

                {/* Profile Info */}
                <View className="absolute left-0 right-0 top-[150px] items-center">
                    <Image
                        source={require('../assets/images/Woman 1.png')}
                        style={{ width: 120, height: 120 }}
                        className="rounded-full bg-white"
                    />
                    <Text className="text-2xl font-semibold text-center  mt-3">Alish Ansari</Text>
                    <Text className="text-center text-[#2A7C76] font-semibold">alish@gmail.com</Text>
                </View>
            </View>

            {/* Menu */}
            <View className="p-6 mt-28 pb-20">
                <View className="flex flex-row items-center gap-4 border-b border-gray-400 py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <Ionicons name="diamond" color="#438883" size={24} />
                    </View>
                    <Text className="text-xl font-semibold">Invite Friends</Text>
                </View>
                <View className="flex flex-row items-center gap-4  py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <Ionicons name="person" color="#666666" size={24} />

                    </View>
                    <Text className="text-xl font-semibold">Account info</Text>
                </View>
                <View className="flex flex-row items-center gap-4  py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <FontAwesome name="users" color="#666666" size={24} />
                    </View>
                    <Text className="text-xl font-semibold">Personal profile</Text>
                </View>
                <View className="flex flex-row items-center gap-4  py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <Ionicons name="mail" color="#666666" size={24} />
                    </View>
                    <Text className="text-xl font-semibold">Message center</Text>
                </View>
                <View className="flex flex-row items-center gap-4  py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <MaterialCommunityIcons name="security" color="#666666" size={24} />
                    </View>
                    <Text className="text-xl font-semibold">Login and security</Text>
                </View>
                <View className="flex flex-row items-center gap-4  py-4">
                    <View className='bg-[#F0F6F5] rounded-full p-2'>
                        <Fontisto name="locked" color="#666666" size={24} />

                    </View>
                    <Text className="text-xl font-semibold">Data and privacy</Text>
                </View>
            </View>
        </ScrollView>

    )
}