import React from 'react';
import Header from '../../components/header';
import FakeModal from '../../components/FakeModal';


import {
    Container,
    ContainerInfo,
    Label,
    SubLabel,
    LabelStatitisc,
    CardData,
    CardLabel,
    CardSubLabel,
    Row
} from './styles';

const Statistic: React.FC = ({ route }) => {
    const data = route.params;
    return (
        <Container
            status={data.insideDaily}
        >
            <Header.HeaderTitleGoback
                status={data.insideDaily ? 'positivo' : 'negativo'}
            />
            <ContainerInfo>
                <Label>{data.percentage}%</Label>
                <SubLabel>das refeições dentro da dieta</SubLabel>
            </ContainerInfo>
            <FakeModal>
                <LabelStatitisc>Estatísticas gerais</LabelStatitisc>
                <CardData
                    colorcard="basic"
                >
                    <CardLabel>{data.dailyCheck}</CardLabel>
                    <CardSubLabel>melhor sequência de pratos dentro da dieta</CardSubLabel>
                </CardData>
                <CardData
                    colorcard="basic"
                >
                    <CardLabel>{data.countDaily}</CardLabel>
                    <CardSubLabel>refeições registradas</CardSubLabel>
                </CardData>
                <Row>
                    <CardData
                        style={{
                            width: '48%'
                        }}
                    >
                        <CardLabel>{data.dailyCheck}</CardLabel>
                        <CardSubLabel>refeições dentro da dieta</CardSubLabel>
                    </CardData>
                    <CardData
                        style={{
                            width: '48%'
                        }}
                        colorcard="negative"
                    >
                        <CardLabel>{data.dailyNoCheck}</CardLabel>
                        <CardSubLabel>refeições fora da dieta</CardSubLabel>
                    </CardData>
                </Row>
            </FakeModal>
        </Container>
    )
}

export default Statistic;