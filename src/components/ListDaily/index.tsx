import React from 'react';
import { SectionList, TouchableOpacityProps, View } from 'react-native';

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
    data: Array<listaData>;
}
type listaData = {
    title: string,
    data: [{
        time: string,
        snack: string,
        isDaily: boolean,
    }]
}

const ListDaily: React.FC<ListPorps> = ({ data, ...rest }) => {


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

export default ListDaily;