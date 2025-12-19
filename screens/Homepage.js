import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
// import Entypo from 'react-native-vector-icons/Entypo';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Homepage() {
  const [transaction, setTransaction] = useState([
    {
      img: require('../assets/images/upwork.png'),
      name: "Upwork",
      price: 445,
      day: "Today"
    },
    {
      img: require('../assets/images/upwork.png'),
      name: "Transfer",
      price: - 85.00,
      day: "Yestaerday"
    },
    {
      img: require('../assets/images/paypal.png'),
      name: "Paypal",
      price: + 994,
      day: "Jan 30, 2022"
    },
    {
      img: require('../assets/images/youtube.png'),
      name: "Youtube",
      price: -  11.99,
      day: "Jan 16, 2022"
    }
  ])
  return (
    <ScrollView>
      <View>
        <View className=' flex flex-row px-4 pt-10 pb-32 rounded-b-[30px] bg-[#429690] '>
          <View className=' h-full'>
            <Text className='text-white text-md '>Good afternoon,</Text>
            <Text className='text-white text-3xl font-bold'>Alish Ansari</Text>
          </View>
          <View className='flex items-center justify-center bg-[#FFFFFF0F] ml-auto rounded-lg w-12 h-12'>
            <Fontisto name="bell" color="#fff" size={24} />
          </View>
        </View>
        <View className='px-6 -mt-24'>
          <View className='bg-[#2F7E79] p-4 rounded-3xl'>
            <View className='flex flex-row justify-between'>
              <View>
                <Text className='text-xl font-bold  text-white'>Total Balance</Text>
                <Text className='text-2xl font-bold  text-white'>₹ 2,548.00</Text>
              </View>
              <Entypo name="dots-three-horizontal" color="#fff" size={24} />

            </View>
            <View className='flex flex-row flex-wrap justify-between py-6 '>
              <View>
                <View className=' flex flex-row gap-2 items-center '>
                  <Entypo name="arrow-long-down" color="#fff" size={16} className="bg-[#FFFFFF26] p-1 rounded-full" />
                  <Text className='text-lg font-semibold  text-white'>Income</Text>
                </View>
                <Text className='text-xl font-bold pl-6  text-white'>₹ 1,840.00</Text>
              </View>
              <View>
                <View className='flex flex-row gap-2'>
                  <Entypo name="arrow-long-up" color="#fff" size={16} className="bg-[#FFFFFF26] p-1 rounded-full" />

                  <Text className='text-lg font-semibold text-white'>Expenses</Text>
                </View>
                <Text className='text-xl font-bold pl-6 text-white'>₹ 284.00</Text>
              </View>
            </View>
          </View>
        </View>
        <View className='p-4'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-xl font-bold text-black'>Transaction History</Text>
            <Text className='text-md text-gray-400 font-semibold'>See All</Text>
          </View>
          {transaction.map((history, index) => (
            <View key={index} className='flex flex-row items-center justify-between py-6'>
              <View className='flex flex-row items-center gap-2'>
                <View className='w-12 h-12 rounded-lg bg-[#F0F6F5] text-center items-center justify-center'>
                  <Image source={history?.img} width={100} height={100} />
                </View>
                <View>
                  <Text className='text-lg font-semibold'>{history.name}</Text>
                  <Text className='text-md text-gray-400'>{history?.day}</Text>
                </View>
              </View>
              <Text className={`text-xl font-semibold text-[#25A969] ${history?.price < 0 ? "text-red-600" : "text-[#25A969]"}`}>₹ {history?.price}</Text>

            </View>
          ))
          }
        </View>
      </View>
    </ScrollView >
  );
}