import React from 'react';
import { SectionList, TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title,
    ContainerData,
    ContainerDataItem,
    LabelData,
    LabelItem,
    Status,
    Separetor
} from './styles';

interface ListPorps extends TouchableOpacityProps {
    data: listaData;
}
type listaData = {
    title: string,
    data: [{
        time: string,
        snack: string,
        isDaily: boolean,
    }]
}

const List: React.FC<ListPorps> = ({ ListPorps, ...rest }) => {

    const data = [
        {
            title: "12.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: false
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: true
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: true
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: true
            }
            ]
        },
        {
            title: "11.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: false
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: false
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: false
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: false
            }
            ]
        },
        {
            title: "11.08.22",
            data: [{
                time: '20:00',
                snack: 'X-tudo',
                isDaily: true
            },
            {
                time: '16:00',
                snack: 'Whey protein com leite',
                isDaily: true
            },
            {
                time: '12:30',
                snack: 'Salada cesar com frango grelhado',
                isDaily: true
            },
            {
                time: '09:30',
                snack: 'Vitamina de banana com abacate',
                isDaily: true
            }
            ]
        },


    ]
    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <ContainerData
                        onPress={() => { }}
                    >
                        <LabelData>{item.time}</LabelData>
                        <ContainerDataItem>
                            <LabelItem>{item.snack}</LabelItem>
                        </ContainerDataItem>
                        <Status
                            status={item.isDaily}
                        />
                    </ContainerData>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Title>{title}</Title>
                )}
                ItemSeparatorComponent={() => (<Separetor />)}
            />
        </Container>
    );
}

export default List;