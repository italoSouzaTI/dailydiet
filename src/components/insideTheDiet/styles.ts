import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

type isInsidetheDietColorProps = {
    colorInside: boolean
}
export const Container = styled(TouchableOpacity) <isInsidetheDietColorProps>`
    margin-top: 33px;
    width: 100%;
    height: 102px;
    border-radius: 8px;
    background-color: ${({ theme, colorInside }) => colorInside ? theme.produto.green.green_light : theme.produto.red.red_mid};
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 26px;
    padding-right: 26px;
`;
export const ContainerInfo = styled.View`
    width:100%;
    justify-content: center;
    align-items: center;
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
export const ContainerIcon = styled(Feather) <isInsidetheDietColorProps>`
    font-size: 24px;
    color:${({ theme, colorInside }) => colorInside ? theme.produto.green.green_dark : theme.produto.red.red_dark};
    position: absolute;
    right: -20px;
    top: -10px;
`;