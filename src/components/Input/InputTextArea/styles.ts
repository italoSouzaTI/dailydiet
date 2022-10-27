import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'

export const Container = styled.View`
    width: 100%;
    margin-bottom: 24px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
    color:${theme.produto.base.gray_2};
    font-size:${theme.font.size.size_14}px;
    font-family:${theme.font.bold};
    `}
    margin-bottom:4px;
`;

export const ContainerInput = styled(TextInput)`
    ${({ theme }) => css`
    border-color:${theme.produto.base.gray_5};
    color:${theme.produto.base.gray_1};
    `}
    justify-content: flex-start;
    text-align-vertical: top;
    border-width:1px;
    height:120px;
    border-radius:6px;
    padding-left:13px;
    padding-right:13px;
    padding-top:13px;
    padding-bottom:13px;
`;
