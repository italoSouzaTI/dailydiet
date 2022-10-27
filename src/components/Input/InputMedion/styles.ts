import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'

export const Label = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-size:${theme.font.size.size_14}px;
    font-family:${theme.font.bold};
    `}
    margin-bottom:4px;
`;
export const ContainerItem = styled.View`
    width: 48%;
`;

export const ContainerInput = styled(TextInput)`
    ${({ theme }) => css`
    border-color:${theme.produto.base.gray_5};
    color:${theme.produto.base.gray_1};
    `}
    border-width:1px;
    height:48px;
    border-radius:6px;
    padding-left:13px;
    padding-right:13px;
`;
