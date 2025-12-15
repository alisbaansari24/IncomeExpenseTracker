import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Feather from 'react-native-vector-icons/Feather';

export default function Stats() {
    const [selectWeek, setSelectWeek] = useState('')
   

    const data = {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep'],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2,
            },
        ],
    };

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#2F7E79',
        backgroundGradientTo: '#43888300',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
        },
    };
    const tab = [
        "Day", "Week", "Month", "Year"
    ]
    return (
        <View className=''>

            <View className='flex flex-row'>
                <Text className='mb-5 text-2xl text-center'>Statistics</Text>
                <View className='ml-auto text-end '> <Feather name="download" color="#000" size={24} /></View>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex-row mb-3"
            >
                {tab.map((item, index) => (
                    <Pressable key={index}
                        onPress={() => setSelectWeek(index)}
                        className="mr-8 gap-5">
                        <Text className={` ${selectWeek === index ? "bg-[#438883]" : "bg-gray-200"} text-white text-md rounded-lg px-4 py-2 font-medium`}>
                            {item}
                        </Text>
                    </Pressable>
                ))}
            </ScrollView>
            {/* dropdown */}
           
            <LineChart
                data={data}
                width={Dimensions.get('window').width - 28}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
}

