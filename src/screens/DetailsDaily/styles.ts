import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type StatusBG = {
    statusBg: string
}
export const Container = styled(SafeAreaView) <StatusBG>`
    flex:1;
    ${({ theme, statusBg }) => css`
    background-color:${statusBg === 'red' ? theme.produto.red.red_light :
            statusBg === 'green' ? theme.produto.green.green_light :
                theme.produto.base.gray_5
        };
    `}
`;
export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

`;
export const ContainerBtn = styled.View`
    flex: 1;
    justify-content: flex-end;
    align-content: flex-end;
`;

export const ContainerDaily = styled.View`
    width: 100%;
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_1};
    font-size:${theme.font.size.size_20}px;
    font-family:${theme.font.bold};
    `}
    margin-bottom:4px;
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-size:${theme.font.size.size_14}px;
    `}
    margin-bottom:4px;
`;

export const Badge = styled.View`
flex-direction: row;
    width: 40%;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    ${({ theme }) => css`
    background:${theme.produto.base.gray_6};
    `}
`;

type StatusBadge = {
    statusBad: string
}

export const Circle = styled.View<StatusBadge>`
width: 10px;
height: 10px;
border-radius:5px;
margin-right: 10px;
${({ theme, statusBad }) => css`
    background:${statusBad === 'red' ? theme.produto.red.red_dark : theme.produto.green.green_dark};
    `}
`;