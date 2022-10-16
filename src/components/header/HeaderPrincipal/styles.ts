import styled from 'styled-components/native';

export const ContainerHeader = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ContainerLogo = styled.Image`
    width: 82px;
    height: 37px;
`;
export const ContainerImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 2px;
    border-color: ${({ theme }) => theme.produto.base.gray_2};
`;