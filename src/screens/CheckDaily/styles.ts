import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
type typecolor = {
    iscolor: boolean
}
export const Title = styled.Text<typecolor>`
    ${({ theme, iscolor }) => css`
        font-size: ${theme.font.size.size_24}px;
        font-family: ${theme.font.bold};
        color:${iscolor ? theme.produto.green.green_dark : theme.produto.red.red_dark};
    `}
    text-align:center;
    margin-bottom:8px;
`;
export const SubTextBold = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font.size.size_16}px;
        font-family:${theme.font.bold};
        color:${theme.produto.base.gray_1};
    `}
    text-align:center;
`;
export const SubTitle = styled.Text`
 ${({ theme }) => css`
        font-size: ${theme.font.size.size_16}px;
        font-family: ${theme.font.regular};
        color:${theme.produto.base.gray_1};
    `}
    text-align:center;
`;
export const Photo = styled.Image`
    margin-top: 40px;
    margin-bottom: 38px;
    width: 224px;
    height: 288px;
`;

export const ContainerBtn = styled.View`
    width: 50%;
`;