import React from 'react';
import BackgroundDefault from '../../components/BackgroundDefault';
import Buttons from '../../components/Buttons';
import BgOn from '../../assets/dailyOn.png'
import BgOff from '../../assets/dailyOff.png'
import {
    Container,
    Title,
    SubTitle,
    SubTextBold,
    Photo,
    ContainerBtn
} from './styles';
import { useNavigation } from '@react-navigation/native';

const CheckDaily: React.FC = ({ route }) => {
    const { color } = route.params;
    const navigation = useNavigation();
    return (
        <BackgroundDefault>
            <Container>
                <Title
                    iscolor={color}
                >
                    {
                        color === 'green' ? (
                            'Continue assim!'
                        ) : (
                            'Que pena!'
                        )
                    }
                </Title>

                {
                    color === 'green' ? (
                        <SubTitle>
                            Você continua <SubTextBold>dentro da dieta.</SubTextBold> Muito bem!
                        </SubTitle>
                    ) : (
                        <SubTitle>
                            Você <SubTextBold>saiu da dieta</SubTextBold> dessa vez, mas continue se esforçando e não desista!
                        </SubTitle>

                    )
                }

                <Photo
                    source={color === `green` ? BgOn : BgOff} />
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