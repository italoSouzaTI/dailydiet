import React from 'react';
import Header from '../../components/Header';
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

const Statistic: React.FC = () => {
    return (
        <Container>
            <Header.HeaderTitleGoback />
            <ContainerInfo>
                <Label>90,86%</Label>
                <SubLabel>das refeições dentro da dieta</SubLabel>
            </ContainerInfo>
            <FakeModal>
                <LabelStatitisc>Estatísticas gerais</LabelStatitisc>
                <CardData
                    colorcard="basic"
                >
                    <CardLabel>22</CardLabel>
                    <CardSubLabel>melhor sequência de pratos dentro da dieta</CardSubLabel>
                </CardData>
                <CardData
                    colorcard="basic"
                >
                    <CardLabel>109</CardLabel>
                    <CardSubLabel>refeições registradas</CardSubLabel>
                </CardData>
                <Row>
                    <CardData
                        style={{
                            width: '48%'
                        }}
                    >
                        <CardLabel>99</CardLabel>
                        <CardSubLabel>refeições dentro da dieta</CardSubLabel>
                    </CardData>
                    <CardData
                        style={{
                            width: '48%'
                        }}
                        colorcard="negative"
                    >
                        <CardLabel>10</CardLabel>
                        <CardSubLabel>refeições fora da dieta</CardSubLabel>
                    </CardData>
                </Row>
            </FakeModal>
        </Container>
    )
}

export default Statistic;