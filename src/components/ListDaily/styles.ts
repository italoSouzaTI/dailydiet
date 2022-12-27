import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
    flex: 1;
`;
export const Title = styled.Text`
    ${({ theme }) => css`
        color:${theme.produto.base.gray_1};
        font-family:${theme.font.bold};
        font-size:${theme.font.size.size_16}px;
    `}
    margin-top:32px;
`;
export const ContainerData = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    justify-content: space-between ;
    align-items: center;
    padding-left:12px;
    padding-right:12px;
    padding-top:14px;
    padding-bottom:14px;
    border-width: 1px;
    border-radius: 6px;
    border-color:${({ theme }) => theme.produto.base.gray_5} ;
`;
export const ContainerDataItem = styled.View`
    flex: 1;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 12px;
    border-left-width: 1px;
    border-left-color:${({ theme }) => theme.produto.base.gray_4} ;
`;
export const LabelData = styled.Text`
    ${({ theme }) => css`
        color:${theme.produto.base.gray_1};
        font-family:${theme.font.bold};
        font-size:${theme.font.size.size_12}px;
    `}
    padding-right: 12px;
`;

export const LabelItem = styled.Text`
    ${({ theme }) => css`
        color:${theme.produto.base.gray_2};
        font-family:${theme.font.regular};
        font-size:${theme.font.size.size_14}px;
    `}
    justify-items:flex-start;
    align-items:flex-start;
`;
type statusProp = {
    status: string;
}
export const Status = styled.View<statusProp>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ theme, status }) => status == `green` ? theme.produto.green.green_mid : theme.produto.red.red_mid};
`;

export const Separetor = styled.View`
    width: 100%;
    margin:2px;
`;