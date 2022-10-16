import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes () {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }
            }
            initialRouteName='Home'
        >
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )

}