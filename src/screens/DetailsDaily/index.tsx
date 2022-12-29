import { useNavigation } from '@react-navigation/native';
import React, { useState, } from 'react';
import { Alert, Modal, View } from 'react-native';
import Buttons from '../../components/Buttons';
import FakeModal from '../../components/FakeModal';
import Header from '../../components/header';
import { dailyCreate, dailyGetAll } from '../../storage/dailyDB';
import { dailyProps } from '../NewMeal';

import {
    Container,
    ContainerBtn,
    ContainerDaily,
    Title,
    SubTitle,
    Circle,
    Badge,
    ContainerModal,
    CardModal,
    DoubleButton,
    ContainerBTN
} from './styles';

export interface DetailsProps {
    statusBad?: string,
}


const DetailsDaily: React.FC<DetailsProps> = ({ statusBad, route }) => {
    const { data } = route.params;
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    function handleAction () {
        setModalVisible(!modalVisible);
    }
    async function handleTrash (id: string) {
        try {
            const getDataDB = await dailyGetAll();
            console.log('Antes', getDataDB.length)
            if (getDataDB) {
                const newDB = getDataDB.filter(item => item.key != id);
                await dailyCreate(newDB);
                setModalVisible(!modalVisible);
                navigation.goBack();
            }
        } catch (error) {
            console.log('handleTrash', error)
        }
    }
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

                    <SubTitle>{
                        data.isCheck.color == 'green' ?
                            "dentro da dieta" :
                            "fora da dieta"
                    }</SubTitle>
                </Badge>
                <ContainerBtn>
                    <Buttons.ButtonEditor
                        onPress={() => { navigation.navigate("NewMeal", { data }) }}
                    />
                    <Buttons.ButtonTrash
                        onPress={handleAction}
                    />
                </ContainerBtn>
            </FakeModal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <ContainerModal>
                    <CardModal>
                        <Title
                            style={{
                                textAlign: 'center'
                            }}
                        >Deseja realmente excluir o registro da refeição?</Title>
                        <DoubleButton>
                            <ContainerBTN>
                                <Buttons.ButtonTrash
                                    onPress={() => { setModalVisible(!modalVisible) }}
                                    label='Cancelar'
                                />
                            </ContainerBTN>
                            <ContainerBTN>
                                <Buttons.ButtonDefault
                                    onPress={() => { handleTrash(data.key) }}
                                    label='Sim,excluir'
                                />
                            </ContainerBTN>
                        </DoubleButton>
                    </CardModal>
                </ContainerModal>
            </Modal>
        </Container>
    );
}

export default DetailsDaily;