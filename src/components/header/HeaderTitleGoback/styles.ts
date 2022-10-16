import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 50px;
    padding-left: 24px;
    padding-right: 24px;
`;
export const ButtonGoback = styled(TouchableOpacity)``;

type StatusIcon = {
    Status: string
}
export const Icon = styled(Feather) <StatusIcon>`
    ${({ theme, Status }) => css`
        color:${Status === 'negativo' ? theme.produto.red.red_dark :
            Status === 'positivo' ? theme.produto.green.green_dark :
                theme.produto.base.gray_2
        };
    `}
    font-size: 24px;
`;

export const Title = styled.Text<StatusIcon>`
 ${({ theme, Status }) => css`
        color:${Status === 'negativo' ? theme.produto.red.red_dark :
            Status === 'positivo' ? theme.produto.green.green_dark :
                theme.produto.base.gray_2
        };
        font-size: ${theme.font.size.size_16}px;
        font-family: ${theme.font.bold};
    `}
    flex:1;
    text-align:center;
`;

