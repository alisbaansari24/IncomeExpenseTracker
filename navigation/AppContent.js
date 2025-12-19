import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import AppNavigation from '../navigation/AppNavigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AppContent() {
    const insets = useSafeAreaInsets();
    const scheme = useColorScheme();
    const backgroundColor = scheme === 'dark' ? '#000000' : '#ffffff';
    const barStyle = scheme === 'dark' ? 'light-content' : 'dark-content';
    return (
        <View style={{ flex: 1, backgroundColor, paddingBottom: insets.bottom }}>
            <StatusBar
                barStyle={barStyle}
                backgroundColor={backgroundColor}
                translucent={false}
                hidden={false}
            />
            <AppNavigation />
        </View>
    )
}