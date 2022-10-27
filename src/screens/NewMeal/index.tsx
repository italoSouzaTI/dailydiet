import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, View } from 'react-native';
import Buttons from '../../components/Buttons';
import FakeModal from '../../components/FakeModal';
import Header from '../../components/Header';
import Input from '../../components/Input';

import {
    Container,
    ContainerBtn,
    ContainerDaily,
    Row,
    Bagde,
    Label,
    ButtonAction,
    ContainerTwo
} from './styles';

type checkDailyProps = {
    id: String,
    label: string,
    check: boolean,
    color: string,
}
const NewMeal: React.FC = () => {
    const navigation = useNavigation();
    const [name, setName] = useState<string>('');
    const [descript, setDescript] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [hour, setHour] = useState<string>('');
    const [isCheck, setIsCheck] = useState<object>({
        id: '',
        label: '',
        check: false,
        color: ''
    });
    const [checkDaily, setCheckDaily] = useState([
        {
            id: '1',
            label: 'Sim',
            check: false,
            color: 'green'
        },
        {
            id: '2',
            label: 'Não',
            check: false,
            color: 'red'
        }
    ]);
    function onchangeDaily (id: string) {
        const clone = checkDaily.slice();
        clone.map((item) => {
            if (item.id === id) {
                item.check = true;
                setIsCheck(item)
            } else {
                item.check = false;
            }
        })
        setCheckDaily(state => state = clone);
    }

    function validation () {
        if (name.trim() === '') {
            Alert.alert('Atenção', 'Preencha o campo nome');
            return
        }
        if (descript.trim() === '') {
            Alert.alert('Atenção', 'Preencha o campo descrição');
            return
        }
        if (hour.trim() === '') {
            Alert.alert('Atenção', 'Preencha o campo hora');
            return
        }
        if (date.trim() === '') {
            Alert.alert('Atenção', 'Preencha o campo data');
            return
        }
        if (isCheck.check != true) {
            Alert.alert('Atenção', 'Selecione uma o');
            return
        }
        return onHandleActionDaily();
    }

    function onHandleActionDaily () {
        let date = new Date()
        let todaysDate = date.toLocaleDateString();
        const data = [];
        const params = {
            name,
            descript,
            hour,
            date,
            isCheck
        };
        data.push({ date: params })
        console.log(data)
    }

    return (
        <Container>
            <Header.HeaderTitleGoback
                name='Nova refeição'
            />
            <View
                style={{ marginTop: 38 }}
            />
            <FakeModal
            >
                <Input.InputClass
                    value={name}
                    onChangeText={setName}
                    label='Nome'
                />
                <Input.InputTextArea
                    value={descript}
                    onChangeText={setDescript}
                />
                <ContainerTwo>
                    <Input.InputMedion
                        label='Data'
                        value={date}
                        onChangeText={setDate}
                    />
                    <Input.InputMedion
                        label='horário'
                        value={hour}
                        onChangeText={setHour}
                    />
                </ContainerTwo>
                <ContainerDaily>
                    <Label>Está dentro da dieta?</Label>
                    <Row>
                        {
                            checkDaily.map((item) => (
                                <ButtonAction
                                    colorBg={item.color}
                                    checkBG={item.check}
                                    onPress={() => onchangeDaily(item.id)}
                                    key={item.id}
                                >
                                    <Bagde
                                        colorBad={item.color}
                                    />
                                    <Label>  {item.label}</Label>
                                </ButtonAction>
                            ))
                        }


                    </Row>
                </ContainerDaily>
                <ContainerBtn>
                    <Buttons.ButtonDefault
                        onPress={validation}
                        label='Cadastrar refeição'
                    />
                </ContainerBtn>
            </FakeModal>
        </Container>
    );
}

export default NewMeal;