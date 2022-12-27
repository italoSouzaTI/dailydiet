import AsyncStorage from "@react-native-async-storage/async-storage";
import { dayliDietProps } from "../screens/NewMeal";

import { GROUP_DAILY } from "./storageConfig";


export async function dailyCreate (newdaily: Array<dayliDietProps>) {
    try {
        const stringNewDaily = JSON.stringify(newdaily);
        await AsyncStorage.setItem(GROUP_DAILY, stringNewDaily);
    } catch (error) {
        throw error
    }
}

export async function dailyGetAll () {
    try {
        const storage = await AsyncStorage.getItem(GROUP_DAILY);
        const dailys = storage ? JSON.parse(storage) : []
        return dailys;
    } catch (error) {
        throw error
    }
}