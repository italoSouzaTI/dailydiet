import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
    Container,
    ButtonGoback,
    Icon,
    Title
} from './styles';

type HeaderTitleGobackProps = {
    name?: string
}

const HeaderTitleGoback: React.FC<HeaderTitleGobackProps> = ({
    name
}) => {
    const navigation = useNavigation()
    return (
        <Container>
            <ButtonGoback
                onPress={() => { navigation.goBack() }}>
                <Icon
                    Status="positivo"
                    name="arrow-left"
                />
            </ButtonGoback>
            <Title
                Status="positivo"
            >{name}</Title>
        </Container>
    );
}

export default HeaderTitleGoback;