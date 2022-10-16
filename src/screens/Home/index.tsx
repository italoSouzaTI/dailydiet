import React from 'react';
import { Alert } from 'react-native';
import BackgroundDefault from '../../components/BackgroundDefault';
import Header from '../../components/header';
import InsideTheDiet from '../../components/insideTheDiet';
import CreateMeal from '../../components/createMeal';
import ListDaily from '../../components/ListDaily';


const Home: React.FC = () => {
    const data = [
        {
            title: "12.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: false
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: true
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: true
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: true
            }
            ]
        },
        {
            title: "11.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: false
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: false
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: false
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: false
            }
            ]
        },
        {
            title: "11.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: true
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: true
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: true
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: true
            }
            ]
        },


    ]
    return (
        <BackgroundDefault>
            <Header />
            <InsideTheDiet
                onPress={() => { }}
                colorInside={true}
                label='90,86%'
                subLabel='das refeições dentro da dieta'
            />
            <CreateMeal
                onPress={() => { Alert.alert('Adiconar dieta') }}
            />
            <ListDaily
                data={data}
            />
        </BackgroundDefault>
    );
}

export default Home;