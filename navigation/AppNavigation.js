// navigation/AppNavigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Splash from "../src/Splash"
import Onboarding from "../src/Onboarding"
import Homepage from "../screens/Homepage"
import AddWallet from "../components/AddWallet"
import Wallet from "../screens/Wallet"
import { useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
    
    return (
        <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="SplashScreen" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Homepage} />
            <Stack.Screen name="wallet-stack" component={WalletStack} />
        </Stack.Navigator>
    );
}


const WalletStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="wallet"
                component={Wallet}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='add-wallet' component={AddWallet} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export { WalletStack }