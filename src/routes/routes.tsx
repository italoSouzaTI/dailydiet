import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Statistic from '../screens/Statistic'
import NewMeal from '../screens/NewMeal'
import CheckDaily from '../screens/CheckDaily'

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
            <Screen
                name="NewMeal"
                component={NewMeal}
            />
            <Screen
                name="CheckDaily"
                component={CheckDaily}
            />
        </Navigator>
    )

}