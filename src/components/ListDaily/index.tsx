import React from 'react';
import { SectionList, Text, TouchableOpacityProps, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
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
    data: Array;
}


const ListDaily: React.FC<ListPorps> = ({ data, ...rest }) => {
    const navigation = useNavigation();
    return (
        <Container>
            <SectionList
                sections={data}
                keyExtractor={({ key }) => key}
                renderItem={({ item }) => (
                    <ContainerData
                        onPress={() => {
                            navigation.navigate("NewMeal", {
                                data: item
                            })
                        }}
                    >
                        <LabelData>{item.date}</LabelData>
                        <ContainerDataItem>
                            <LabelItem>{item.name}</LabelItem>
                        </ContainerDataItem>
                        <Status
                            status={item.isCheck.color}
                        />
                    </ContainerData>
                )
                }
                renderSectionHeader={({ section: { title } }) => (
                    <Title>{title}</Title>
                )}
                ItemSeparatorComponent={() => (<Separetor />)}
                ListEmptyComponent={() => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text>Nenhum registro encontado.</Text>
                    </View>
                )}
            />

        </Container>
    );
}

export default ListDaily;