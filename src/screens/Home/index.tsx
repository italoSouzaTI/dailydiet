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
    const [dataStatistic, setDataStatistic] = useState<{}>({
        countDaily: 0,
        dailyCheck: 0,
        dailyNoCheck: 0,
        percentage: '',
        insideDaily: false
    });

    async function populandoData () {
        try {
            const response = await dailyGetAll();
            handleStatistic(response);
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

    function handleStatistic (list: Array) {
        let countDaily = 0;
        let dailyCheck = 0;
        let dailyNoCheck = 0;
        let percentage = 0;
        let insideDaily = false;
        list.map(item => {
            countDaily += 1;
            if (item.isCheck.label === "Sim") {
                dailyCheck += 1;
            } else {
                dailyNoCheck += 1;
            }
        })

        if (dailyCheck > dailyNoCheck || dailyCheck == dailyNoCheck) {
            percentage = parseFloat(((100 * dailyCheck) / countDaily));
            insideDaily = true;
        } else {
            percentage = ((100 * dailyNoCheck) / countDaily);
            insideDaily = false;
        }

        setDataStatistic(state => state = {
            countDaily,
            dailyCheck,
            dailyNoCheck,
            percentage,
            insideDaily
        });
    }

    useEffect(() => {
        populandoData();
    }, [isfocused]);

    return (
        <BackgroundDefault>
            <Header.HeaderPrincipal />
            <InsideTheDiet
                onPress={() => { navigation.navigate("Statistic", dataStatistic) }}
                colorInside={dataStatistic.insideDaily ? true : false}
                label={`${dataStatistic.percentage}%`}
                subLabel='das refeições dentro da dieta'
            />
            <CreateMeal
                click={() => { navigation.navigate("NewMeal") }}
            />
            <ListDaily
                data={dataStorage}
            />
        </BackgroundDefault>
    );
}

export default Home;