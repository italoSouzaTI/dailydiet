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
    Status?: string
}

const HeaderTitleGoback: React.FC<HeaderTitleGobackProps> = ({
    name,
    Status
}) => {
    const navigation = useNavigation()
    return (
        <Container>
            <ButtonGoback
                onPress={() => { navigation.goBack() }}>
                <Icon
                    Status={Status}
                    name="arrow-left"
                />
            </ButtonGoback>
            <Title
                Status={Status}
            >{name}</Title>
        </Container>
    );
}

export default HeaderTitleGoback;