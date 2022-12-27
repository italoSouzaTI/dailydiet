import React, { useState, useEffect } from 'react';
import BackgroundDefault from '../../components/BackgroundDefault';
import Header from '../../components/header';
import InsideTheDiet from '../../components/insideTheDiet';
import CreateMeal from '../../components/createMeal';
import ListDaily from '../../components/ListDaily';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { dayliDietProps } from '../NewMeal';
import { dailyGetAll } from '../../storage/dailyDB';
import groupBy from 'lodash.groupby'


const Home: React.FC = () => {
    const navigation = useNavigation();
    const isfocused = useIsFocused();
    const [dataStorage, setDataStorage] = useState<[]>([]);

    async function populandoData () {
        try {
            const response = await dailyGetAll();
            const groups = response.reduce((groups, game) => {

                const date = game.date.split('T')[0];
                if (!groups[date]) {
                    groups[date] = [];
                }
                groups[date].push(game);
                return groups;
            }, {});

            const groupArrays = Object.keys(groups).map((date) => {
                return {
                    title: date,
                    data: groups[date]
                };
            });
            setDataStorage(groupArrays);
        } catch (error) {
            console.log('populandoData-error', error)
        }
    }

    useEffect(() => {
        populandoData();
    }, [isfocused])

    return (
        <BackgroundDefault>
            <Header.HeaderPrincipal />
            <InsideTheDiet
                onPress={() => { navigation.navigate("Statistic") }}
                colorInside={true}
                label='90,86%'
                subLabel='das refeições dentro da dieta'
            />
            <CreateMeal
                click={() => { navigation.navigate("NewMeal"), { data: null } }}
            />
            <ListDaily
                data={dataStorage}
            />
        </BackgroundDefault>
    );
}

export default Home;