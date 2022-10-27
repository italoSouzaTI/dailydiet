import React from 'react';
import BackgroundDefault from '../../components/BackgroundDefault';
import Buttons from '../../components/Buttons';
import Bg from '../../assets/dailyOn.png'
import {
    Container,
    Title,
    SubTitle,
    SubTextBold,
    Photo,
    ContainerBtn
} from './styles';
import { useNavigation } from '@react-navigation/native';

const CheckDaily: React.FC = () => {
    const navigation = useNavigation();
    return (
        <BackgroundDefault>
            <Container>
                <Title
                    iscolor={true}
                >Continue assim!</Title>
                <SubTitle>Você continua <SubTextBold>dentro da dieta.</SubTextBold> Muito bem!</SubTitle>
                <Photo
                    source={Bg} />
                <ContainerBtn>
                    <Buttons.ButtonDefault
                        onPress={() => { navigation.navigate("Home") }}
                        label='Ir para a página inicial'
                    />
                </ContainerBtn>
            </Container>

        </BackgroundDefault>
    );
}

export default CheckDaily;