import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddWallet from '../components/AddWallet';

export default function Wallet() {
    const navigation = useNavigation()
    const [active, setActive] = useState('Transactions')
    const [totalBalance, setTotalBalance] = useState(0)
    const [transactions, setTransactions] = useState([]);
    console.log(active, "active")
    // const addBalance = async (bal, name, date) => {
    //     try {
    //         const totalBalance = await AsyncStorage.getItem('totalAmount')
    //         const total = Number(bal + Number(totalBalance || 0))
    //         const transaction = {
    //             name,
    //             date,
    //             type: 'Income',
    //             amount:bal
    //         }
    //         await AsyncStorage.setItem('transaction', JSON.stringify(transaction))
    //         await AsyncStorage.setItem('totalAmount', JSON.stringify(total))
    //     } catch (e) {
    //         console.error("While saving ,error", e)
    //     }
    // }

    // const subtractBalance = async (subBal) => {
    //     const totalBalance = await AsyncStorage.getItem('totalAmount')
    //     const totalAfterSub = Number(Number(totalBalance) - subBal)
    //     await AsyncStorage.setItem('totalAmount', JSON.stringify(totalAfterSub))
    // }
    const getTotalBal = async () => {

        const balance = await AsyncStorage.getItem('totalAmount')
        console.log(balance, "balancedata")
        setTotalBalance(Number(JSON.parse(balance) || 0))
        console.log("Wallet balance", balance)
        const transaction = await AsyncStorage.getItem('transaction')
        setTransactions(JSON.parse(transaction) || []);
        console.log("transaction", JSON.parse(transaction))
    }
    
    useFocusEffect(
        useCallback(() => {
            getTotalBal()
        }, [])
    )

    return (
        <ScrollView className='flex-1 pb-4 '>
            <View className="flex-1 bg-[#2A7C76] h-[190px] rounded-b-[20%] pb-4">
                {/* Header */}
                <View className="absolute top-10 left-0 right-0 flex flex-row justify-between items-center p-4">
                    <Text className="text-2xl font-bold text-white">Wallet</Text>
                    <View className="bg-[#FFFFFF0F] rounded-xl px-3 p-2">
                        <Fontisto name="bell" color="#fff" size={24} />
                    </View>
                </View>
            </View>
            <View className='bg-white rounded-3xl p-4 -mt-16'>
                <View className="items-center justify-center py-10">
                    <Text className="text-base font-semibold text-gray-600">Total Balance</Text>
                    <Text className="text-3xl font-bold text-black mt-1">₹{totalBalance}</Text>
                </View>
                <Pressable className='flex flex-row gap-8 items-center justify-center'>
                    <Text
                        onPress={() => navigation.navigate('add-wallet')}
                        className='border rounded-full border-[rgb(64,135,130)] p-3'>
                        <AntDesign name="plus" color="#408782" size={24} />
                    </Text>
                    <View className='border rounded-full border-[#408782] p-3'>
                        <Ionicons name="qr-code" color="#408782" size={24} />
                    </View>
                    <View className='border rounded-full border-[#408782] p-3'>
                        <FontAwesome name="send" color="#408782" size={24} />
                    </View>
                </Pressable>
                <View className='flex rounded-3xl flex-row justify-between bg-[#F4F6F6] my-6 p-3'>
                    <Pressable
                        onPress={() => setActive('Transactions')}
                        className={`rounded-3xl px-4 py-2 ${active === 'Transactions' ? 'bg-[#549994]' : ''}`}>
                        <Text className={`text-md font-medium ${active === 'Transactions' ? 'text-white' : 'text-[#666]'}`}>
                            Transactions
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setActive('Upcoming')}
                        className={`rounded-3xl px-4 py-2 ${active === 'Upcoming' ? 'bg-[#549994] text-white' : 'text-[#666666]'}`}>
                        <Text className='text-md font-medium'>
                            Upcoming Bills
                        </Text>
                    </Pressable>

                </View>
                <ScrollView className='pb-10'>
                    {(transactions).map((history, index) => (
                        <Pressable
                            // onPress={() => getTotalBal()}
                            key={index} className='flex flex-row items-center justify-between py-6'>
                            <View

                                className='flex flex-row items-center gap-2 '>
                                <View className='w-12 h-12 rounded-lg bg-[#F0F6F5] text-center items-center justify-center'>
                                    <Image source={history?.img || history?.icon} width={100} height={100} />
                                </View>
                                <View>
                                    <Text className='text-lg font-semibold'>{history.name}</Text>
                                    <Text className='text-md text-gray-400'>{new Date(history.date).toDateString()}</Text>
                                </View>
                            </View>

                            <Text
                                className={`text-xl font-semibold ${history.type === "Expense"
                                    ? "text-red-600"
                                    : "text-[#25A969]"
                                    }`}
                            >
                                {history.type === "Expense"
                                    ? `- ₹${history.amount}`
                                    : `+ ₹${history.amount}`}
                            </Text>

                        </Pressable>
                    ))
                    }
                </ScrollView>


            </View>
        </ScrollView>
    )
}