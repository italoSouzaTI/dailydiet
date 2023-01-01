import { checkDailyProps, dailyProps } from "../screens/NewMeal";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Statistic: object
            Home: undefined;
            CheckDaily: { color: string };
            NewMeal: {
                data?: dailyProps;
            };
        }
    }
}