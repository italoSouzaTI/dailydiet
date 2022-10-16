import React from 'react';
import { Alert } from 'react-native';
import BackgroundDefault from '../../components/BackgroundDefault';
import Header from '../../components/header';
import InsideTheDiet from '../../components/insideTheDiet';
import CreateMeal from '../../components/createMeal';
import List from '../../components/List';


const Home: React.FC = () => {
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
            <List />
        </BackgroundDefault>
    );
}

export default Home;