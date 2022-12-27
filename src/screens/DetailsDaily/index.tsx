import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Alert, Button, View } from 'react-native';
import uuid from 'react-native-uuid';
import Buttons from '../../components/Buttons';
import FakeModal from '../../components/FakeModal';
import Header from '../../components/header';
import Input from '../../components/Input';
import { dailyCreate, dailyGetAll } from '../../storage/dailyDB';
import { dailyProps } from '../NewMeal';

import {
    Container,
    ContainerBtn,
    ContainerDaily,
    Title,
    SubTitle,
    Circle,
    Badge
} from './styles';

export interface DetailsProps {
    statusBad?: string,
}


const DetailsDaily: React.FC<DetailsProps> = ({ statusBad, route }) => {
    const { data } = route.params;
    console.log(data)
    const navigation = useNavigation();
    return (
        <Container
            statusBg={data.isCheck.color}
        >
            <Header.HeaderTitleGoback
                name={'Refeição'}
            />
            <View
                style={{ marginTop: 38 }}
            />
            <FakeModal
            >
                <ContainerDaily>
                    <Title>{data.name}</Title>
                    <SubTitle>{data.descript}</SubTitle>
                </ContainerDaily>
                <ContainerDaily>
                    <Title>Data e hora</Title>
                    <SubTitle>{data.date} às {data.hour}</SubTitle>
                </ContainerDaily>
                <Badge>
                    <Circle
                        statusBad={data.isCheck.color}
                    />
                    <SubTitle>dentro da dieta</SubTitle>
                </Badge>
                <ContainerBtn>
                    <Buttons.ButtonEditor
                        onPress={() => { }}
                        label={'Editar refeição'}
                    />
                    <Buttons.ButtonTrash
                        onPress={() => { }}
                        label={'Excluir refeição'}
                    />
                </ContainerBtn>
            </FakeModal>
        </Container>
    );
}

export default DetailsDaily;