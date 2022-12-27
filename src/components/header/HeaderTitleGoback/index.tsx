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
    status?: string
}

const HeaderTitleGoback: React.FC<HeaderTitleGobackProps> = ({
    name,
    status,
}) => {
    const navigation = useNavigation()
    return (
        <Container>
            <ButtonGoback
                onPress={() => { navigation.goBack() }}>
                <Icon
                    status={status}
                    name="arrow-left"
                />
            </ButtonGoback>
            <Title
                status={status}
            >{name}</Title>
        </Container>
    );
}

export default HeaderTitleGoback;