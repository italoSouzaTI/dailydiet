import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    margin-top: 8px;

    width:100%;
    height: 50px;
    border-radius: 6px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px;
    border-color: ${({ theme }) => theme.produto.base.gray_1};
`;

export const Icon = styled(Feather)`
    font-size: 24px;
    color:${({ theme }) => theme.produto.base.gray_1};

    margin-right: 12px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        color:${theme.produto.base.gray_1};
        font-family:${theme.font.bold};
        font-size:${theme.font.size.size_14}px;
    `}
`;
