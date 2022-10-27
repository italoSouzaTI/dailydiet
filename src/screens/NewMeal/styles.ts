import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({ theme }) => theme.produto.base.gray_5};
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
`;

export const Label = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-size:${theme.font.size.size_14}px;
    font-family:${theme.font.bold};
    `}
    margin-bottom:4px;
`;
type colorBg = {
    colorBg: string,
    checkBG: boolean
}
export const ButtonAction = styled(TouchableOpacity) <colorBg>`
    width: 48%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    ${({ theme, colorBg, checkBG }) => css`
        background-color: ${checkBG && colorBg === "green" ? theme.produto.green.green_light :
            checkBG && colorBg === "red" ? theme.produto.red.red_light : theme.produto.base.gray_6
        };
`}
`;

type colorBadge = {
    colorBad: string
}
export const Bagde = styled.View<colorBadge>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    ${({ theme, colorBad }) => css`
        background-color: ${colorBad === 'green' ? theme.produto.green.green_dark : theme.produto.red.red_dark};
    `}
`;

export const ContainerTwo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
`;