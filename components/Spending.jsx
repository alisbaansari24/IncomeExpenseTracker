import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function Spending() {

    const [spendingStats, setSpendingStats] = useState([
        {
            img: require('../assets/images/starbucks.png'),
            name: "Starucks",
            date_Time: "Jan 12, 2022",
            price: -150.00
        },
        {
            img: require('../assets/images/person.png'),
            name: "Transfer",
            date_Time: "Yesterday",
            price: -85.00
        },
        {
            img: require('../assets/images/youtube.png'),
            name: "Youtube",
            date_Time: "Jan 16, 2022",
            price: -11.19
        }
    ])
    const [isSelected, setIsSelected] = useState(null)
    // const [selecteItem, setSelectItem] = useState(null)
    // const isSelected = selecteItem === index
    return (
        <View className='py-4'>
            <View className='flex flex-row justify-between'>
                <Text className='text-2xl font-bold'>Spending</Text>
                <View className='text-[#666666] text-lg'>
                    <MaterialIcons name="import-export" color="#666666" size={26} />
                </View>
            </View>
            <View className='py-6 '>
                {spendingStats.map((item, index) => (

                    <Pressable
                        key={index}
                        onPress={() => setIsSelected(index)}
                        className={`flex flex-row justify-between items-center  ${isSelected === index ? "bg-[#29756F] px-2" : ""
                            } rounded-xl py-2  my-3`} >
                        <View className='flex flex-row gap-3'>
                            <Image
                                source={item?.img}
                                style={{ width: 40, height: 40 }}
                                className="w-8 h-8 self-center rounded-full items-center"
                            />

                            <View>
                                <Text className='text-lg font-semibold'>{item?.name}</Text>
                                <Text>{item?.date_Time}</Text>
                            </View>
                        </View>
                        <Text className={`items-center text-xl font-bold  ${isSelected === index ? "text-white" : "text-red-600"}`}>₹{item?.price}</Text>
                    </Pressable>
                ))}
            </View>

        </View >
    )
}