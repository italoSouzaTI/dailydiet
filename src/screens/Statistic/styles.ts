import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';


type ContainerProps = {
    status: boolean;
}
export const Container = styled(SafeAreaView) <ContainerProps>`
    flex: 1;
    background-color: ${({ theme, status }) => status ? theme.produto.green.green_light : theme.produto.red.red_light};
`;
export const ContainerInfo = styled.View`
    width:100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 38px;
`;
export const Label = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_1};
    font-family:${theme.font.bold};
    font-size:${theme.font.size.size_32}px;
    `}
`;
export const SubLabel = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-family:${theme.font.regular};
    font-size:${theme.font.size.size_14}px;
    `}
    margin-top:2px;
`;
export const LabelStatitisc = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_1};
    font-family:${theme.font.bold};
    font-size:${theme.font.size.size_14}px;
    `}
    text-align:center;
    margin-bottom:23px;
`;

type Colorcard = {
    colorcard: string;
}
export const CardData = styled.View<Colorcard>`
    width: 100%;
    border-radius: 8px;
    padding: 16px;

    ${({ theme, colorcard }) => css`
        background-color: ${colorcard === "basic" ? theme.produto.base.gray_6 :
            colorcard === "negative" ? theme.produto.red.red_light : theme.produto.green.green_light
        };
    `}
    justify-content:center;
    align-items:center;
    margin-bottom: 12px;
`;

export const CardLabel = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_1};
    font-family:${theme.font.bold};
    font-size:${theme.font.size.size_24}px;
    `}

    margin-bottom: 2px;
`;
export const CardSubLabel = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-family:${theme.font.regular};
    font-size:${theme.font.size.size_14}px;
    `}
    margin-top:2px;
    text-align:center;
`;
export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

`;