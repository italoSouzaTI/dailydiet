import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Alert, Button, View } from 'react-native';
import uuid from 'react-native-uuid';
import Buttons from '../../components/Buttons';
import FakeModal from '../../components/FakeModal';
import Header from '../../components/header';
import Input from '../../components/Input';
import { dailyCreate, dailyGetAll } from '../../storage/dailyDB';

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
export interface dayliDietProps {
    data: Array<dailyProps>
}
export type dailyProps = {
    key: string,
    name: string,
    descript: string,
    hour: string,
    date: string,
    isCheck: checkDailyProps
}
export type checkDailyProps = {
    id: String,
    label: string,
    check: boolean,
    color: string,
}

const NewMeal: React.FC = (route) => {
    const edition = route;
    const navigation = useNavigation();
    const [name, setName] = useState<string>('');
    const [descript, setDescript] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [hour, setHour] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [isCheck, setIsCheck] = useState<checkDailyProps>({
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

    async function validation () {
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
        if (edition.route.params?.data) {
            return await updateDB(edition.route.params?.data);
        } else {
            return await onHandleActionDaily();
        }
    }

    async function updateDB (edition: dailyProps) {
        try {
            setLoading(true);
            const responseStorage = await dailyGetAll();
            if (responseStorage) {
                responseStorage.map(item => {
                    if (item.key === edition.key) {
                        item.date = date,
                            item.descript = descript,
                            item.hour = hour,
                            item.isCheck = isCheck,
                            item.name = name
                    }
                })
            }
            await dailyCreate(responseStorage);
            navigation.navigate("CheckDaily", { color: isCheck.color });
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };

    async function onHandleActionDaily () {
        const aux = await dailyGetAll()
        let newArray = [];
        let paramsState: Array<dayliDietProps> = {
            key: uuid.v4().toString(),
            name,
            descript,
            hour,
            date,
            isCheck
        };

        newArray.push(...aux, paramsState);
        await dailyCreate(newArray);
        navigation.navigate("CheckDaily", { color: isCheck.color });
    }
    function handleDate () {
        const newDate = new Date();
        setDate(newDate.toLocaleDateString());
    }
    function populatingData () {
        setName((state) => state = edition.route.params?.data.name);
        setDescript((state) => state = edition.route.params?.data.descript);
        setDate((state) => state = edition.route.params?.data.date);
        setHour((state) => state = edition.route.params?.data.hour);
        onchangeDaily(edition.route.params?.data.isCheck.id);
    }
    useEffect(() => {
        if (edition.route.params?.data) {
            populatingData();
        } else {
            handleDate();
        }
    }, [])
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
                                    <Label> {item.label}</Label>
                                </ButtonAction>
                            ))
                        }


                    </Row>
                </ContainerDaily>
                <ContainerBtn>
                    <Buttons.ButtonDefault
                        onPress={validation}
                        label={edition.route.params?.data ? 'Salvar alterações' : 'Cadastrar refeição'}
                    />
                </ContainerBtn>
            </FakeModal>
        </Container>
    );
}

export default NewMeal;