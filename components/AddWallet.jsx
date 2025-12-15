import { View, Text, ScrollView, TextInput, Pressable, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-native-ui-datepicker'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dropdown } from 'react-native-element-dropdown'

export default function AddWallet() {
    const navigation = useNavigation()
    const [date, setDate] = useState(dayjs())
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [stats, setStats] = useState("Income")
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0)
    const statistics = [
        { label: "Expense", value: "Expense" },
        { label: "Income", value: "Income" }
    ];
    // console.log("DATA: ", statistics);
    const addMoney = async () => {
        try {
            console.log("Amount", amount)
            const stored = await AsyncStorage.getItem('totalAmount');
            const totalAmount = stored ? JSON.parse(stored) : 0;

            console.log("totalAmount", totalAmount)
            // console.log("typeof total amount ==> ", typeof totalAmount)
            const total = Number(amount || 0) + Number(totalAmount || 0)

            console.log("total before setting to Async storage ==> ", total)
            console.log("type of total", typeof total);

            //! 1st step - check -> transaction exists or not
            const transactionData = await AsyncStorage.getItem('transaction')
            if (!transactionData) { //! if not exists 
                await AsyncStorage.setItem('transaction', JSON.stringify([])) //! set empty array []
            }

            const updatedTransaction = await AsyncStorage.getItem('transaction') //! []
            const transaction = JSON.parse(updatedTransaction) //! parsing to exact format
            const data = {
                name,
                date,
                type: 'Income',
                amount
            }
            //! pushing transaction data to array
            transaction.push(data);

            //! save the transaction data to Async storage
            await AsyncStorage.setItem('transaction', JSON.stringify(transaction));
            await AsyncStorage.setItem('totalAmount', JSON.stringify(total))

            console.log("Amount Succesffuly Added!")
            console.log("Total Amount,", total)
            navigation.goBack()
        } catch (error) {
            console.error("Amount adding error", error)
        }
    }


    // *------------Add Expense-----------------=>{
    const addExpense = async () => {
        try {
            const allAmount = await AsyncStorage.getItem('totalAmount')
            const totalAmount = allAmount ? JSON.parse(allAmount) : 0
            console.log("TotalAmount Before Expense", totalAmount)
            const totalExpense = Number(totalAmount || 0) - Number(amount || 0)
            console.log("Total", totalExpense)


            const expenseTransactionData = await AsyncStorage.getItem('transaction')
            if (!expenseTransactionData) {
                await AsyncStorage.setItem('transaction', JSON.stringify([]))
            }
            const updatedExpense = await AsyncStorage.getItem('transaction')
            const expenseData = JSON.parse(updatedExpense)
            const data = {
                name,
                date,
                type: 'Expense',
                amount
            }

            expenseData.push(data)
            await AsyncStorage.setItem('transaction', JSON.stringify(expenseData))

            await AsyncStorage.setItem('totalAmount', JSON.stringify(totalExpense))
            console.log("Expense Succesffuly Added!")
            console.log("Total Amount After Expense,", totalExpense)
            navigation.goBack()
        } catch (error) {
            console.error("Expense is not added!", error)
        }
    }


    return (
        <ScrollView className=''>

            <View className="flex-1 bg-[#2A7C76] h-[190px] rounded-b-[20%] pb-4">
                {/* Header */}
                <View className="absolute top-10 left-0 right-0 flex-row justify-between items-center px-4">
                    <View className="flex-1">
                        <Text className="text-2xl font-bold text-white">Add Money</Text>

                        <View className="ml-auto w-[150px]">
                            <Dropdown
                                style={{
                                    height: 48,
                                    borderRadius: 12,
                                    borderWidth: 1,
                                    borderColor: "#ffffff",
                                    backgroundColor: "#ffffff",
                                    paddingHorizontal: 8,
                                }}
                                placeholderStyle={{ fontSize: 18, color: "#ffffff" }}   //* placeholder text white
                                selectedTextStyle={{ fontSize: 15, color: "#ffffff" }}   // *selected text white
                                itemTextStyle={{ fontSize: 15, color: "#000", }}          //* dropdown items black text
                                data={statistics}
                                labelField="label"
                                valueField="value"
                                placeholder={statistics[1].label}
                                value={stats}
                                onChange={(item) => setStats(item.value)
                                }
                            />
                        </View>

                    </View>
                </View>

            </View>
            <View className='flex flex-grow -mt-20 p-5'>
                <View className='bg-white p-6 rounded-3xl'>
                    <Text className='text-md text-gray-400 ml-3 font-bold text-2xl text-center pb-10'>Add {stats}</Text>
                    <View className='gap-2'>
                        <Text className='text-md text-gray-400 ml-3'>Name</Text>
                        <TextInput
                            value={name}
                            className=' rounded-xl border px-4 py-3'
                            placeholder=''
                            onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View className='gap-2 mt-3'>
                        <Text className='text-md text-gray-400 ml-3'>Amount</Text>
                        <TextInput
                            keyboardType='numeric'
                            value={amount}
                            className=' rounded-xl border px-4 py-3'
                            placeholder='Add Your Amount'
                            onChangeText={(text) => {
                                console.log("amount change ==> ", text)
                                setAmount(text)
                            }}
                        />
                    </View>
                    <View>
                        <Text className='pl-3 pt-3 text-gray-400'>Select Date</Text>
                        <TouchableOpacity
                            onPress={() => setShowDatePicker(true)}
                            className="border px-4 py-3 rounded-xl mt-2"
                        >
                            <Text>{dayjs(date).format("DD/MM/YYYY")}</Text>
                        </TouchableOpacity>

                        {showDatePicker && (
                            <DatePicker
                                mode='single'
                                date={date}
                                onChange={(event) => {
                                    setDate(event.date);
                                    setShowDatePicker(false);
                                }}
                                className=' rounded-2xl '
                                placeholder='select Date'
                            // onChange={event => setDate(event.date)}
                            />
                        )

                        }
                    </View>

                    <View>
                        <Pressable className='flex flex-row gap-4 justify-between items-center pt-6'>
                            <Text
                                onPress={() => navigation.goBack()}
                                className='rounded-xl text-black bg-gray-400 px-3 py-2 font-semibold'>Cancel</Text>
                            <Text
                                onPress={() => {
                                    console.log("SAve clicked =>", stats);
                                    stats === "Income" ? addMoney() : addExpense()
                                }}
                                className='rounded-xl text-white bg-[#3F8782] px-3 py-2 font-semibold'>Save</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}