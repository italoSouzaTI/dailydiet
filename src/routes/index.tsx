import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Routes as RouteApp } from './routes'
import { useTheme } from 'styled-components/native'


export function Routes () {
    const { produto } = useTheme();
    return (
        <View
            style={{ flex: 1, backgroundColor: produto.base.gray_7 }}
        >
            <NavigationContainer>
                <RouteApp />
            </NavigationContainer>
        </View>
    )
}