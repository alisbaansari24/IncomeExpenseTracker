import React from 'react';
import { ScrollView, View } from 'react-native';
import Stats from '../components/Stats'
import Spending from '../components/Spending'

const Statistics = () => {
    return (
        <ScrollView>
            <View className='p-4'>
                <Stats />
                <Spending />
            </View>
        </ScrollView>
    );
};



export default Statistics;