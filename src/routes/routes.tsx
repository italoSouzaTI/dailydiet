import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Statistic from '../screens/Statistic'

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
            <Screen
                name="Statistic"
                component={Statistic}
            />
        </Navigator>
    )

}